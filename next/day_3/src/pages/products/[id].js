import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Comment } from './comments';

export async function getServerSideProps({ params }) {
    const { id } = params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
  
    return {
      props: {
        product,
      },
    };
}

const Product = ({ product }) => 
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className={styles.prod}>    
        <div className={styles.product}>
          <h3>{product.title}</h3>
          
          <p>price: {product.price}$ </p>
          <p>{product.description}</p>

          <Image src={product.image} alt={product.title}  width="200" height="250"/>
        </div>
    </div>

     <Comment/>
    </>
  

export default Product