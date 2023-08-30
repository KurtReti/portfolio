import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />

      <div className="font-Victor bg-rose-mountain  md:scrollbar-thumb-red-400/50 text-zinc-400 h-screen overflow-visible z-0">
        <Head>
          <title>Kurt Reti</title>={" "}
          <link
            rel="shortcut icon"
            href="https://cdn.discordapp.com/attachments/216749490747473921/1028578997640118314/Screen_Shot_2022-10-09_at_7.05.19_pm.png"
          />
        </Head>
        {/* Header */}

        {/* Hero */}

        <section id="hero" className="">
          <Hero />
        </section>

        {/* About */}

        <section id="about" className="">
          <About />
        </section>

        {/* Experience */}

        <section id="experience" className="">
          <Experience />
        </section>

        {/* Skills */}
        <section id="skills" className="">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        {/* Contact */}
        <section id="contact" className="">
          <Contact />
        </section>
      </div>
    </>
  );
}
