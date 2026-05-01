import './App.css';

import { ArrowUp, Moon, Sun } from 'lucide-react';
import { Button } from './components/ui/button';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Project from './components/project';
import Certificate from './components/certificate';
import Contact from './components/contact';
import Footer from './components/footer';
import { useEffect, useState } from 'react';

function App() {
  const [dark, setDark] = useState(() => {
    const salvo = localStorage.getItem("theme")
    if(salvo == null) return true
    return salvo == "dark"
  });
  

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {;

    const oldTheme = document.querySelectorAll('meta[name="theme-color"]')
    oldTheme.forEach((tag) => tag.remove())
    const meta = document.createElement('meta');
    meta.name = "theme-color";
    meta.content = dark ? "#000000" : "#ffffff";
    document.head.appendChild(meta);

    if (dark) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const theme = () => {
    setDark(!dark)
  };

  return (
    <>
      <div className=" fixed bottom-10 right-10 flex flex-row items-center gap-2 z-999">
        <Button
          className=" h-[3em] w-[3em] bg-[#1313137c] dark:bg-[#3131318f] backdrop-blur-lg"
          onClick={theme}
        >
          <Sun className="relative scale-0 dark:scale-100 dark:text-yellow-500"></Sun>
          <Moon className="absolute  dark:scale-0 scale-100 text-white"></Moon>
        </Button>

        <Button
          className="h-[3em] w-[3em]  backdrop-blur-lg bg-[#1313137c] dark:bg-[#ffffff7c]  cursor-pointer"
          onClick={top}
        >
          <ArrowUp />
        </Button>
      </div>
      <Header />

      <main>
        <About />

        <Experience />

        <Project />

        <Certificate />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
