import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Header />
      <Navigation />
      <Footer />
    </div>
  )
}
