import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleOnBannerBtnClick = (e) => {
    e.preventDefault();
    console.log("Button Clicked!");
  }
	return (
		<div className={styles.container}>
			<Head>
				<title>Coffe Connoisseur</title>
				<meta name="description" content="Next JS Udemy tutorial" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
