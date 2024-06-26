import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400..800&display=swap"
        rel="stylesheet"
      />
      <body className="bg-green-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
