"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export interface ShutterTextProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p" | "div";
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

/**
 * ShutterText
 * Premium character-level text reveal animation with a vertical shutter effect.
 * Each character slides upward from behind an overflow-hidden mask.
 * Automatically wraps multi-line text without clipping or overlapping.
 * Supports prefers-reduced-motion and triggers only once when entering viewport.
 */
export function ShutterText({
  children,
  text,
  className,
  as: Component = "span",
  style,
  delay = 0,
  duration = 0.45,
  stagger = 0.02,
  once = true,
}: ShutterTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once, amount: 0.05 });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : delay,
        staggerChildren: shouldReduceMotion ? 0 : stagger,
      },
    },
  };

  const charVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : {
          opacity: 0,
          y: "125%",
        },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: shouldReduceMotion ? 0 : duration,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Helper to split a string into words and shutter-animated characters
  const renderString = (str: string, prefix = "") => {
    const lines = str.split(/\r?\n/);
    return lines.map((line, lineIndex) => {
      const words = line.split(" ");
      return (
        <React.Fragment key={`${prefix}-l-${lineIndex}`}>
          {words.map((word, wordIndex) => {
            if (word === "" && wordIndex !== 0 && wordIndex !== words.length - 1) {
              return null;
            }
            return (
              <React.Fragment key={`${prefix}-w-${lineIndex}-${wordIndex}`}>
                <span className="inline-block whitespace-nowrap">
                  {word.split("").map((char, charIndex) => (
                    <span
                      key={`${prefix}-c-${lineIndex}-${wordIndex}-${charIndex}`}
                      className="inline-block overflow-hidden align-baseline py-[0.35em] -my-[0.35em] px-[0.02em] -mx-[0.02em]"
                    >
                      <motion.span
                        variants={charVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    </span>
                  ))}
                </span>
                {wordIndex < words.length - 1 && " "}
              </React.Fragment>
            );
          })}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  // Recursively process children to support nested spans, line breaks, etc.
  const processNode = (node: React.ReactNode, keyPrefix = "st"): React.ReactNode => {
    if (node === null || node === undefined) {
      return null;
    }
    if (typeof node === "string") {
      return renderString(node, keyPrefix);
    }
    if (typeof node === "number") {
      return renderString(String(node), keyPrefix);
    }
    if (React.isValidElement(node)) {
      if (node.type === "br") {
        return node;
      }
      const { children: subChildren, className: subClass, style: subStyle, ...otherProps } = (node.props as Record<string, any>) || {};
      const Tag = node.type as any;
      return (
        <Tag
          key={keyPrefix}
          className={subClass}
          style={subStyle}
          {...otherProps}
        >
          {React.Children.map(subChildren, (subChild, idx) =>
            processNode(subChild, `${keyPrefix}-${idx}`)
          )}
        </Tag>
      );
    }
    if (Array.isArray(node)) {
      return node.map((item, idx) => processNode(item, `${keyPrefix}-${idx}`));
    }
    return node;
  };

  const content = children ?? text;
  const MotionComponent = motion[Component as keyof typeof motion] as any;

  return (
    <MotionComponent
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={style}
    >
      {processNode(content)}
    </MotionComponent>
  );
}

export default ShutterText;
