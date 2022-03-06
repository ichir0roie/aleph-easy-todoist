import React, { FC } from 'react'

// import "https://esm.sh/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" // doesn't work.
import "https://cdn.esm.sh/bootstrap@5.1.3/dist/css/bootstrap.min.css"

// import 'https://cdn.esm.sh/raf/polyfill';



export default function App({ Page, pageProps }: { Page: FC, pageProps: Record<string, unknown> }) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml"/>
      </head>
        <Page {...pageProps} />
      
    </main>
  )
}
