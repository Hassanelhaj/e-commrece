"use client"
import { Provider } from 'react-redux'
import NavBar from '../../Components/NavBar'
import './globals.css'
import Store from '@/redux/Store'


export const metadata = {
  title: 'modern markit',
  description:'developed by hassan ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

  
<head>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

</head>
      <body>
    <Provider store={Store}>

      <NavBar/>
      <main>
      {children}
      </main>
    </Provider>

      </body>

    </html>
  )
}
