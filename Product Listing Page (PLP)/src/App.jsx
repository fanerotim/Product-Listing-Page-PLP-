import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProductPage } from './components/ProductPage/ProductPage';
import { useState } from 'react';

function App() {

  const [activeCategory, setActiveCategory] = useState('books');

  const handleChangeCategory = (category) => {
    setActiveCategory((prev) => category);
  }

  return (
    <>
      <div className={styles.app__container}>
        <Header handleChangeCategory={handleChangeCategory}/>
        <ProductPage activeCategory={activeCategory}/>
        <Footer />
      </div>
    </>
  )
}

export default App