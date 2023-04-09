import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { EditScheduleContextProvider } from "@/contexts/EditScheduleContext";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <EditScheduleContextProvider>
        <Component {...pageProps} />
      </EditScheduleContextProvider>
    </main>
  );
}
