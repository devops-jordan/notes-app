"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const SwichDarkLighMode = ({ status }: { status: boolean }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return (
    <div className=''>Detecting system</div>
  )

  return (
    <div className='flex gap-2 tracking-tighter'>
      <p className={`text-[12px] ${!status ? "hidden" : ''}`}>Default: <span className='text-sky-700 font-semibold'>{theme}</span></p>
      <div className='flex dark:bg-[#f2f2f2] bg-[#64748b] rounded-md gap-1'>
        <button className={`rounded-sm text-white dark:text-black transition-all duration-150 px-2 hover:scale-105 ${theme === "light" ? "bg-slate-500" : ''} ${!status ? 'hidden' : ''}`} onClick={() => setTheme("light")}>Ligh</button>
        <button className={`rounded-sm bg-white transition-all dark:text-black duration-150 hover:scale-105 px-2 ${theme === 'dark' ? 'bg-slate-500' : ''} ${!status ? 'hidden' : ''}`} onClick={() => setTheme("dark")}>Dark</button>
      </div>
    </div>
  )
}

export default SwichDarkLighMode