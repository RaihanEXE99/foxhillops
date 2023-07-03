import './globals.css'
import Header from './header'
import BackgroundParticles from './components/Background';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundParticles />
        <Header/>
        {children}
      </body>
    </html>
  )
}
