import { Html, Head, Main, NextScript } from "next/document"
import Link from "next/link"
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en">
    <Head>
    <link rel="icon" type="image/png" href="/favicon.ico" />
    </Head>
      
      <body>
    <Script id="theme-switcher" strategy="beforeInteractive">
      {`if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark")
} else {
  document.documentElement.classList.remove("dark")
}`}
    </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
