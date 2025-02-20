"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      {children}
    </ThemeProvider>
  )
}

export default Provider