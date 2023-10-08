'use client'
import { useEffect, useState } from 'react'
import List from './list'
import styles from './page.module.css'


export default function Home() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Food trucks</h1>
      </div>
      {isClient && <List /> }
    </main>
  )
}
