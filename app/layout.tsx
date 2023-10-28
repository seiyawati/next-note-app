import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js 13 Memo App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
