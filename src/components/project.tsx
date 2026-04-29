import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import bibli from '../assets/bibli.jpeg';
import nat from '../assets/nat.png';
import noto from '../assets/noto.png';
import prod from '../assets/prod.png';
import cach from '../assets/cach.jpeg';

interface Proj {
  img: string;
  title: string;
  link: string | null;
  description: string;
}

export default function Project() {
  const projects: Proj[] = [
    {
      img: bibli,
      title: 'Sistema de Biblioteca Digital',
      link: 'https://github.com/walkerpontes/projeto-biblioteca',
      description:
        'Sistema de biblioteca digital com salas, cursos, fóruns e autenticação de usuários, desenvolvido com Java 17 e Spring Boot. Utiliza Spring JPA, MySQL, Spring Security e Thymeleaf. Projeto em constante evolução.',
    },
    {
      img: prod,
      title: 'ProdApi V1',
      link: 'https://github.com/walkerpontes/ProdApiV1',
      description:
        'API REST em .NET para gerenciamento de produtos, com autenticação JWT baseada em roles. Desenvolvida com .NET 10, Entity Framework Core, MySQL e documentação via Swagger.',
    },
    {
      img: nat,
      title: 'Noto.io',
      link: 'https://github.com/walkerpontes/noto-io-reactNative',
      description:
        'Aplicativo mobile desenvolvido com React Native e Expo para gerenciamento de tarefas e anotações offline. Utiliza AsyncStorage para armazenamento local e oferece interface simples e responsiva.',
    },
    {
      img: noto,
      title: 'Noto.io Web',
      link: 'https://github.com/walkerpontes/noto.io',
      description:
        'Aplicação web desenvolvida com React e Vite para gerenciamento de tarefas e notas, com armazenamento local via localStorage e interface simples e responsiva.',
    },
    {
      img: cach,
      title: 'LadyApp',
      link: null,
      description:
        'Aplicativo mobile para gerenciamento de gastos com vacinação, medicamentos, ciclo menstrual e despesas gerais. Desenvolvido com React Native e Expo, utilizando armazenamento local para funcionamento offline.',
    },
  ];

  return (
    <>
      <div
        className="flex flex-col p-10 items-center justify-center w-full dark:text-white gap-20 mb-30 scroll-mt-30"
        id="projeto"
      >
        <motion.h2
          className="text-xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.5 }}
        >
          Projetos
        </motion.h2>
        <Carousel className="w-[90%]  ">
          <CarouselContent className="-ml-1 ">
            {projects.map((project, key) => (
              <CarouselItem key={key} className="basis-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover="hover"
                  transition={{ duration: 0.5 }}
                  className="p-1 "
                >
                  <Card className="w-80 md:w-100 h-auto">
                    <motion.img
                      src={project.img}
                      alt="Event cover"
                      className="relative z-20 aspect-video w-full object-cover "
                      variants={{
                        hover: { scale: 1.03 },
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <CardHeader>
                      <CardTitle className="text-[15px]">{project.title}</CardTitle>
                      <CardAction>
                        {project.link ? (
                          <Button variant="secondary" className="h-10">
                            <a
                              href={project.link!}
                              target="_blank"
                              className="w-full h-full flex items-center justify-center"
                            >
                              GitHub
                            </a>
                          </Button>
                        ) : (
                          <p>Uso pessoal</p>
                        )}
                      </CardAction>
                      <CardDescription>
                        <p>{project.description}</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
