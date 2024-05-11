import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import "bootstrap-icons/font/bootstrap-icons.css"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
