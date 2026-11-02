"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

const STAGGER = 0.035

export interface TextRollProps {
  children: string
  className?: string
  center?: boolean
  duration?: number
}

/**
 * TextRoll
 * Exact 21st.dev component by Mazyar Kawa (Gamma UI)
 * (https://21st.dev/r/Mazyar%20kawa/text-roll)
 * Dynamic typography animation revealing individual characters with a vertical roll effect.
 */
export function TextRoll({
  children,
  className,
  center = false,
  duration = 0.4,
}: TextRollProps) {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative block overflow-hidden",
        className
      )}
      style={{
        lineHeight: 1,
      }}
    >
      {/* Top Text (Slides up) */}
      <div className="select-none">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration,
                ease: [0.22, 1, 0.36, 1],
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          )
        })}
      </div>

      {/* Bottom Text (Slides in from bottom) */}
      <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration,
                ease: [0.22, 1, 0.36, 1],
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          )
        })}
      </div>
    </motion.span>
  )
}

export default TextRoll
