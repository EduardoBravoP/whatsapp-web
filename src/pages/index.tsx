import type { NextPage } from "next";
import Head from "next/head";
import { Sidebar } from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WhatsApp</title>
        <link rel="icon" href="/whatsapp.png" />
      </Head>

      <Sidebar />
    </div>
  );
};

export default Home;
