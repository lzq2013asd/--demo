import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>廖子乔--在线简历web3实例</title>
        <meta
          name="description"
          content="WTF Academy DApp 极简入门教程，帮助开发者入门去中心应用开发。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>前端--web开发工程师 在线简历，展示个人项目，体现个人学习能力</p>
          <div>
            <a
              href="https://gitee.com/liao-ziqiao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{"   ZiQiao Liao "}
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/su7web.webp"
            alt="wtf antdweb3 Logo"
            width={689}
            height={412}
            priority
          />
        </div>

        <div className={styles.grid}>
        <a
            href="https://gitee.com/liao-ziqiao/vue3-koa-2021"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              2021版个人博客vue3源码 <span>-&gt;</span>
            </h2>
            <p>更多</p>
          </a>
          <a
            href="https://gitee.com/liao-ziqiao/next-ui2024"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              2024版nextjs个人博客源码 <span>-&gt;</span>
            </h2>
            <p>更多</p>
          </a>

          <a
            href="/web3"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Dapp钱包插件Demo <span>-&gt;</span>
            </h2>
            <p>访问Demo</p>
          </a>

          <a
            href="https://web3.ant.design/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Ant Design Web3 <span>-&gt;</span>
            </h2>
            <p>了解 Ant Design Web3</p>
          </a>
        </div>
      </main>
    </>
  );
}
