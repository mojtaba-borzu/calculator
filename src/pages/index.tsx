import type { NextPage } from "next";
import Head from "next/head";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Puzzlelty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-screen h-screen flex flex-col items-center justify-center">
        <img src="/logo.svg" alt="logo" className="w-[200px] h-[200px]" />
        <div className="text-[100px] text-blue-500  font-black">Puzzlelity</div>
      </header>
    </div>
  );
};

export default IndexPage;
