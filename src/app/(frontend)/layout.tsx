import React from 'react'
import './styles.css'
import './globals.css'

import NavBar from '@/components/base/NavBar'
import { ThemeProvider } from '@/components/ui/darkmode/theme-provider'

export const metadata = {
  description: 'LIVE THICK - Sample PayloadCMS and Docker site',
  title: 'Payload and Docker LVTK Website',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <main>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar />
              {children}
            </ThemeProvider>
          </main>
        </body>
      </html>
    </>
  )
}
