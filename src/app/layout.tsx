import './globals.css'

export const metadata = {
  title: 'potats.xyz',
  description: 'This is a potats',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.title} />

        <meta property="og:url" content="https://potats.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content={metadata.title} />
        <meta
          property="og:image"
          content={`https://potats.xyz/potats.png`}
        />
        <meta property="og:description" content={metadata.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content={`https://potats.xyz/potats.png`}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
