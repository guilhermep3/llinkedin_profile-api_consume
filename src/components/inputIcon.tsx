"use client"
import { Search, Send } from "lucide-react"
import { Input } from "./ui/input"
import { useState, useRef } from "react"

export const InputIcon = () => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDivClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div
      className="relative flex items-center gap-2 px-3 border border-muted-foreground rounded-md bg-background cursor-text"
      onClick={handleDivClick}
    >
      <Search width={20} height={20} />
      <Input
        ref={inputRef}
        className="w-52 p-0 border-none focus-visible:border-none focus-visible:ring-0 bg-background!"
        placeholder="Pesquisar"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Send
        className={`cursor-pointer block transition-all duration-300
          ${isFocused ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-full opacity-0 pointer-events-none'}`}
        width={20} height={20}
      />

    </div>
  )
}
