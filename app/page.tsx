import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
