import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import '../styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return <>
    {/* <Provider store={store}> */}
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    {/* </Provider> */}

  </>
}

export default MyApp
