import Head from "next/head";
import Image from "next/image";
import Background from "../components/Background";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-gray-600 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Kurt Reti</title>={" "}
      </Head>
      {/* Header */}

      <Header />

      {/* Hero */}

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
