import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { SquareCode } from 'lucide-react';

export default function Experience() {
  return (
    <>
      <div
        className="flex flex-col px-5 md:px-40 items-center justify-center dark:text-white scroll-mt-30"
        id="experiencia"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
            viewport={{ once:true }}
          className="text-xl md:text-4xl font-bold"
        >
          Minhas Experiências
        </motion.h2>
        <div className="flex my-20 md:my-30 gap-5 md:gap-17 flex-wrap  justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-5 md:gap-10  p-10 w-70 md:w-100  rounded-[5px] border hover:scale-102 transition-all duration-500 border-blue-500 bg-card"
          >
            <SquareCode className="rounded-[10px]  bg-blue-800 p-2 w-12 h-12 md:p-4 md:w-20 md:h-20 text-white" />
            <h3 className=" text-xl md:text-3xl font-bold ">Back-end</h3>
            <ul className="flex flex-row gap-2 flex-wrap">
              <Badge className="bg-blue-500 h-7 text-[12px]">Java</Badge>
              <Badge className="bg-blue-500 h-7 text-[12px]">C#</Badge>
              <Badge className="bg-blue-500 h-7 text-[12px]">TypeScript</Badge>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-5 md:gap-10  p-10 w-70 md:w-100 rounded-[5px] hover:scale-102 transition-all duration-500 border border-yellow-500 bg-card"
          >
            <SquareCode className=" rounded-[10px] bg-yellow-600 p-2 w-12 h-12 md:p-4 md:w-20 md:h-20 text-white" />
            <h3 className="text-xl md:text-3xl font-bold">Banco de Dados</h3>
            <ul className="flex flex-row gap-2 flex-wrap">
              <Badge className="bg-yellow-500 h-7 text-[12px]">MySQL</Badge>
              <Badge className="bg-yellow-500 h-7 text-[12px]">Redis</Badge>
              <Badge className="bg-yellow-500 h-7 text-[12px]">Mongo</Badge>
              <Badge className="bg-yellow-500 h-7 text-[12px]">MariaDB</Badge>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-5 md:gap-10  p-10 w-70 md:w-100 rounded-[5px] hover:scale-102 transition-all duration-500  border border-green-500 bg-card"
          >
            <SquareCode className=" rounded-[10px] bg-green-600 p-2 w-12 h-12 md:p-4 md:w-20 md:h-20 text-white" />
            <h3 className="text-xl md:text-3xl font-bold">Front-end</h3>
            <ul className="flex flex-row gap-2 flex-wrap">
              <Badge className="bg-green-500 h-7 text-[12px]">Html/Css</Badge>
              <Badge className="bg-green-500 h-7 text-[12px]">React</Badge>
              <Badge className="bg-green-500 h-7 text-[12px]">Angular</Badge>
              <Badge className="bg-green-500 h-7 text-[12px]">Tailwind</Badge>
              <Badge className="bg-green-500 h-7 text-[12px]">Shadcn</Badge>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}
