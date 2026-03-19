import React from 'react'
import './styles.css'
import './globals.css'

import { ThemeProvider } from '@/components/ui/darkmode/theme-provider'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
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
              {children}
            </ThemeProvider>
          </main>
        </body>
      </html>
    </>
  )
}
