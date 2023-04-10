import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
    products:data,
    }
  }
}


const Home =({products})=> 

    <>
      <Head>
        <title>Zien store</title>
        <meta name="description" content="This is best store in the world." />
        <meta property="og:title" content="Zien store products page" />
        <meta property="og:image" content="next.svg" />
      </Head>

    <Navbar/>

    <h2 className={styles.heading}>Products </h2>

    <div className={styles.products}>
      {

      products?.map((product,index) => (
        <div key={product.id} className={styles.product}>
          <Image src={product.image} alt={product.title}  width="200" height="250"/>
          <h3><Link href={`/products/${product.id}`}>{product.title}</Link></h3>
          <p>{product.price}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>

    
      
    </>
  
export default Home;
