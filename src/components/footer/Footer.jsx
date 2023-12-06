import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.container}>
      <div>all rights reserved</div>
      <div className={styles.socialNewtworks}>
      <Link href={"https://www.facebook.com/"}><Image src="/1.png" width={15} className={styles.icon} height={15} alt='facebook'/></Link>
      <Link href={"https://www.instagram.com/"}><Image src="/2.png" width={15} className={styles.icon} height={15} alt='instagram'/></Link>
      <Link href={"https://twitter.com/"}><Image src="/3.png" width={15} className={styles.icon} height={15} alt='twiter'/></Link>
      <Link href={"https://www.youtube.com/"}><Image src="/4.png" width={15} className={styles.icon} height={15} alt='youtube'/></Link>
      </div>
      
    </div>
  )
}

export default Footer