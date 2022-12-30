import { Header } from '../components/header';
import { Footer } from '../components/footer';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header
        title='My keys' 
        description='Your favorite digital key holder' 
        faviconUrl='/favicon.ico'/>
      <Footer/>
    </div>
  )
}
