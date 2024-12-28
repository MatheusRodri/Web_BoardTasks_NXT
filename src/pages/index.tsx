import Head from 'next/head';
import styles from '../../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+</title>
      </Head>
      <h1>projetos</h1>
    </div>



  );
}
