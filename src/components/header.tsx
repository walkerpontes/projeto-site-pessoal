import { useEffect, useState } from 'react';
import icone from '../assets/iconecodigo.png';

export default function Header() {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <>
      <header
        className={`w-full px-10 fixed z-999 backdrop-blur-lg ${isScrolled ? 'dark:bg-[#0000009a] bg-[#f5f5f5e5]' : 'bg-transparent'}`}
      >
        <div className=" relative w-full h-25 gap-2 flex flex-col justify-center lg:flex-row lg:justify-between flex-wrap items-center dark:text-white font-bold ">
          <div
            className={`flex flex-row items-center gap-2 md:gap-5 md:text-2xl lg:mr-25 transition-transform duration-500 ${isScrolled ? 'xl:translate-x-50' : 'xl:translate-x-0'}`}
          >
            <img src={icone} className="h-10 md:h-14 invert dark:invert-0" />
            <h1>Walker Pontes</h1>
          </div>
          <div
            className={`md:text-2xl flex flex-row gap-5 transition-transform items-center duration-500 ${isScrolled ? 'xl:-translate-x-40' : 'xl:translate-x-0'}`}
          >
            <a href="#experiencia">Experiências</a>
            <a href="#projeto">Projetos</a>
            <a href="#certificado">Certificados</a>
            <a href="#contato">Contato</a>
          </div>
          
        </div>
      </header>
    </>
  );
}
