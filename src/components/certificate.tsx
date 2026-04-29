import java from '../assets/cert-java.png';
import spr from '../assets/cert-spr.png';
import ty from '../assets/cert-ty.png';
import kub from '../assets/cert-kub.png';
import red from '../assets/cert-red.png';
import aws from '../assets/cert-aws.png';
import ang from '../assets/cert-ang.png';
import dck from '../assets/cert-dck.png';
import my from '../assets/cert-my.png';

import { Card, CardAction, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MoveUpRight } from 'lucide-react';
import { ButtonGroup, ButtonGroupSeparator } from './ui/button-group';
import { useState } from 'react';

const CardMotion = motion(Card);

interface badge {
  color: string;
  tech: string[];
}

interface FormCertificate {
  image: string;
  theme: string;
  type: 'back' | 'front' | 'fullstack' | 'bd';
  link: string;
  badge: badge;
}

export default function Certificate() {
  const group: FormCertificate[] = [
    {
      image: java,
      theme: 'Certificação em Java',
      type: 'back',
      link: 'https://cursos.alura.com.br/degree/certificate/0b8ee993-085b-4873-9007-d1d9b183191b?lang=pt_BR',
      badge: {
        color: 'bg-blue-600',
        tech: ['TDD', 'BDD', 'Maven', 'Patterns', 'Mock', 'Java para Web'],
      },
    },
    {
      image: spr,
      theme: 'Spring Boot',
      type: 'back',
      link: 'https://cursos.alura.com.br/certificate/657cb6b9-4380-4e54-84ab-3443765a09db?lang=pt_BR',
      badge: {
        color: 'bg-purple-600',
        tech: ['JDBC', 'REST API', 'MVC', 'Jpa', 'Tomcat'],
      },
    },
    {
      image: ty,
      theme: 'TypeScript',
      type: 'fullstack',
      link: 'https://cursos.alura.com.br/certificate/55bafb22-0a44-40a6-a075-782250b8d2cf?lang=pt_BR',
      badge: {
        color: 'bg-emerald-600',
        tech: ['Interfaces', 'REST API', 'Ts para web', 'CRUD', 'MVC'],
      },
    },
    {
      image: kub,
      theme: 'Kubernetes',
      type: 'back',
      link: 'https://cursos.alura.com.br/certificate/46793dfb-e0e0-47a2-b78b-9d9f1b8acb94?lang=pt_BR',
      badge: {
        color: 'bg-fuchsia-600',
        tech: ['Cluster', 'Pods', 'Services'],
      },
    },
    {
      image: red,
      theme: 'Redis',
      type: 'bd',
      link: 'https://cursos.alura.com.br/certificate/ab613743-860b-4670-bfac-ceee0d4a90e2?lang=pt_BR',
      badge: {
        color: 'bg-yellow-600',
        tech: ['Fila', 'Busys', 'Rank', 'Range wishscores'],
      },
    },
    {
      image: aws,
      theme: 'Certificação em AWS',
      type: 'back',
      link: 'https://cursos.alura.com.br/certificate/f50b2660-199b-4315-8a30-9585a2d42492?lang=pt_BR',
      badge: {
        color: 'bg-red-500',
        tech: ['AWS Snowball', 'CloudFront', 'EBS', 'EFS', 'EC2'],
      },
    },
    {
      image: ang,
      theme: 'Angular',
      type: 'front',
      link: 'https://cursos.alura.com.br/certificate/52fde3ef-cb4b-4283-bcf6-09cc34d3f392?lang=pt_BR',
      badge: {
        color: 'bg-cyan-700',
        tech: ['Fluxos', 'Requisições', 'Roteamento', 'Diretivas'],
      },
    },
    {
      image: dck,
      theme: 'Docker',
      type: 'back',
      link: 'https://cursos.alura.com.br/certificate/a7174222-5f49-4d93-9df3-51bb1d403dce?lang=pt_BR',
      badge: {
        color: 'bg-rose-500',
        tech: ['Imagens', 'Persistência', 'Containers', 'Rede'],
      },
    },
    {
      image: my,
      theme: 'MySQL',
      type: 'bd',
      link: 'https://cursos.alura.com.br/certificate/16773da0-2a91-442b-b57b-8efe8833111f?lang=pt_BR',
      badge: {
        color: 'bg-lime-600',
        tech: ['Modelagem', 'Persistência', 'Query', 'Logs'],
      },
    },
  ];
  const [certificate, setCertificate] = useState<FormCertificate[]>(group);

  console.log(group.filter((v) => v.type == 'back'));
  return (
    <>
      <div
        className="flex flex-col  justify-center items-center w-full dark:text-white gap-20 px-20 mb-30 scroll-mt-30"
        id="certificado"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
            viewport={{once:true }}
          className="text-xl md:text-4xl font-bold"
        >
          Certificados
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
            viewport={{once:true }}
        >
          <ButtonGroup>
            <Button
              variant="secondary"
              className="md:text-xl md:h-[2em]"
              onClick={() => setCertificate(group)}
            >
              Tudo
            </Button>
            <ButtonGroupSeparator />
            <Button
              variant="secondary"
              className="md:text-xl md:h-[2em]"
              onClick={() => setCertificate(group.filter((v) => v.type == 'fullstack'))}
            >
              FullStack
            </Button>
            <ButtonGroupSeparator />
            <Button
              variant="secondary"
              className="md:text-xl md:h-[2em]"
              onClick={() => setCertificate(group.filter((v) => v.type == 'front'))}
            >
              Front
            </Button>
            <ButtonGroupSeparator />
            <Button
              variant="secondary"
              className="md:text-xl md:h-[2em]"
              onClick={() => setCertificate(group.filter((v) => v.type == 'back'))}
            >
              Back
            </Button>
            <ButtonGroupSeparator />
            <Button
              variant="secondary"
              className="md:text-xl md:h-[2em]"
              onClick={() => setCertificate(group.filter((v) => v.type == 'bd'))}
            >
              Banco de Dados
            </Button>
          </ButtonGroup>
        </motion.div>

        <div className="flex flex-row  flex-wrap gap-10 ">
          {certificate.map((cert, key) => (
            <CardMotion
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{ duration: 0.5}}
              className="relative mx-auto w-100  pt-0"
            >
              <motion.img
                src={cert.image}
                variants={{
                  hover: { scale: 1.03 },
                }}
                transition={{ duration: 0.5 }}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-[15px]">{cert.theme}</CardTitle>
                <CardAction>
                  <Button variant="secondary" className="h-10">
                    <a href={cert.link} className="w-full h-full flex flex-row gap-2 items-center">
                      <span>Certificado</span>
                      <MoveUpRight />
                    </a>
                  </Button>
                </CardAction>
                <CardDescription className="flex flex-row flex-wrap gap-2 mt-4">
                  {cert.badge.tech.map((tech) => (
                    <Badge key={tech} className={`h-7 text-[10px] text-white ${cert.badge.color}`}>
                      {tech}
                    </Badge>
                  ))}
                </CardDescription>
              </CardHeader>
            </CardMotion>
          ))}
        </div>
      </div>
    </>
  );
}
