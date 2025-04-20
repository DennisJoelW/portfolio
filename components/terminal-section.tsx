"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function TerminalSection() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "portfolio init"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="diagonal-lines opacity-30"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900/70 backdrop-blur-md rounded-lg border border-[#47E3E3]/30 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-black/50 border-b border-[#47E3E3]/20">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-gray-400">terminal</div>
          </div>
          <div className="p-4 font-mono">
            <div className="flex items-center">
              <span className="text-[#47E3E3]">dennis@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$</span>
              <span className="ml-2 text-white">{text}</span>
              {showCursor && <span className="ml-0.5 inline-block w-2 h-5 bg-[#47E3E3]"></span>}
            </div>

            {text === fullText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-4"
              >
                <div className="text-green-400">✓ Portfolio initialized successfully</div>
                <div className="text-gray-400 mt-2">
                  <span className="text-[#47E3E3]">→</span> Mobile App Developer
                </div>
                <div className="text-gray-400">
                  <span className="text-[#47E3E3]">→</span> Front End Developer
                </div>
                <div className="text-gray-400">
                  <span className="text-[#47E3E3]">→</span> Back End Developer
                </div>
                <div className="mt-4 text-yellow-400">Ready to explore projects...</div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

