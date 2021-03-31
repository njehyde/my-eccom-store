import Head from 'next/head';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Home.module.css'

import { useCart } from '../hooks/use-cart';
import products from '../products.json';

export default function Home() {
  const { subtotal, totalItems, addToCart, checkout } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          The best space jellyfish swag on the web!
        </p>

        <ul className={styles.cart}>
          <li>
            <strong>Items:</strong> {totalItems}
          </li>
          <li>
            <strong>Total:</strong> £{subtotal}
          </li>
          <li>
            <button className={`${styles.button} ${styles.cartButton}`} onClick={checkout}>
              <FaShoppingCart />
              Checkout
            </button>
          </li>
        </ul>

        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, image, description, price } = product;

            return (
              <li key={id} className={styles.card}>
                <Link href={`products/${id}`}>
                  <a>
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>£{price}</p>
                    <p>{description}</p>
                  </a>
                </Link>
                <p>
                  <button className={styles.button} onClick={() => { 
                    addToCart({ id });
                  }}>Add to Cart</button>
                </p>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}