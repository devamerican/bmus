export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (
      <html lang="en">
        <body id="outstatic" suppressHydrationWarning >{children}</body>
      </html>
    )
  }