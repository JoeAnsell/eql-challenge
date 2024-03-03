import Head from "next/head";
import styles from "./Layout.module.scss";

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Is this Dog??</title>
        <meta name="description" content="Is this dog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.layout}>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
