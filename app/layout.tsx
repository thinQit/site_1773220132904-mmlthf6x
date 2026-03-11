import "./globals.css"
import { Anton, Montserrat } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Iron Peak Fitness Austin | Personal Training, HIIT, Yoga, Spin & Boxing",
  description:
    "Iron Peak Fitness is a coaching-first gym in Austin, TX offering personal training and group classes (HIIT, yoga, spinning, boxing). View the class schedule, meet trainers, explore memberships, and book a free intro session.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${montserrat.variable} bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
