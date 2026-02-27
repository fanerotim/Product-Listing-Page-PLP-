import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProductPage } from './components/ProductPage/ProductPage';

function App() {

  return (
    <>
      <div className={styles.app__container}>
        <Header />
        <ProductPage />
        <Footer />
      </div>
    </>
  )
}

export default App