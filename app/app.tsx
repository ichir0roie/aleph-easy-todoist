import React, { FC } from 'react'

// import "https://esm.sh/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" // doesn't work.
import "https://esm.sh/bootstrap@5.1.3/dist/css/bootstrap.min.css"

export default function App({ Page, pageProps }: { Page: FC, pageProps: Record<string, unknown> }) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} />
    </main>
  )
}
