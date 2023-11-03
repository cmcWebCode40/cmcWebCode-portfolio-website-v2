import './globals.css'
import localFont from 'next/font/local'

const Montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Michael chinweike Portfolio',
  description: 'A portfolio website to showcase my works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-itunes-app" content="app-id=1602920651" />
      </head>
      <body className={Montserrat.className}>{children}</body>
    </html>
  )
}
