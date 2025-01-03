"use client";
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Root = ({children}) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' >{children}</ThemeProvider>
  )
}

export default Root