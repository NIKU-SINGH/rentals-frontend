import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/index'
import '../styles/globals.css'
import store from '../redux/store'
import { Provider } from 'react-redux'
import router from 'next/router'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {

  // const user = store.getState().user.userInfo;
  // if(user){
  //   router.push(`/user/${user._id}`) 
  // }

  return <>
    <Provider store={store}>
      <NextNProgress />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>

  </>
}

export default MyApp
