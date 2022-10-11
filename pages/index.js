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
    
    <div className="font-Josefin md:scrollbar md:scrollbar-track-transparent md:scrollbar-thumb-red-400/50 bg-zinc-900 text-zinc-400 h-screen snap-y snap-mandatory scroll-smooth overflow-visible z-0">
      
      <Head>
        <title>Kurt Reti</title>={" "}
        <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/216749490747473921/1028578997640118314/Screen_Shot_2022-10-09_at_7.05.19_pm.png" />
      </Head>
      {/* Header */}

      <Header />

      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Contact */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
