import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

 const Navbar = () =>
 <nav className={styles.navbar}>
 <div className={styles.navbarBrand}>
   <Link className={styles.navLink} href="/">
     ZienStore
   </Link>
 </div>
 <ul className={styles.navbarNav}>
   <li className={styles.navItem}>
     <Link className={styles.navLink} href="/about">
       About
     </Link>
   </li>
   <li className={styles.navItem}>
     <Link className={styles.navLink} href="/products">
       products
     </Link>
   </li>
   <li className={styles.navItem}>
     <Link className={styles.navLink} href="/contact">
      Contact
     </Link>
   </li>
 </ul>
</nav>


export default Navbar;