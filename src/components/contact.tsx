import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from './ui/field';
import { toast } from 'sonner';
import { Button } from './ui/button';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [descricao, setDescricao] = useState('');

  console.log(import.meta.env.VITE_SERVICE_ID);
  console.log(import.meta.env.VITE_TEMPLATE_ID);
  console.log(import.meta.env.VITE_PUBLIC_KEY);

  const enviar = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message: descricao,
    };

    await emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, data, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then((e) => {
        console.log(e);
        toast.success('E-mail enviado com sucesso');
      })
      .catch((err) => {
        console.log(err);
        toast.error(`O e-mail nao foi enviado. Causa: ${err}`);
      });

    setName('');
    setEmail('');
    setDescricao('');
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-full dark:text-white gap-20 scroll-mt-30"
        id="contato"
      >
        <motion.h2
          className="text-xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{once:true }} 
        >
          Vamos conversar?
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}}
          onSubmit={async (e) => await enviar(e)}
          className=" md:w-1/2 w-9/10 border  p-10 rounded-2xl "
        >
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="font-bold text-[14px]">Envie um email</FieldLegend>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Nome</FieldLabel>
                  <input
                    id="checkout-7j9-card-number-uw1"
                    placeholder="Nome"
                    required
                    className=" p-2 rounded-[5px] border"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">Email</FieldLabel>
                  <input
                    id="checkout-7j9-card-name-43j"
                    placeholder="empresa@email.com"
                    required
                    type="email"
                    className="border not-visited:p-2 rounded-[5px]"
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="checkout-7j9-optional-comments">Descrição</FieldLabel>
                  <textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="Adicione o sua descrição"
                    className="resize-none border p-2 rounded-[5px]"
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                  />
                </Field>
                <Field orientation="horizontal">
                  <Button variant="secondary" type="submit">Enviar</Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </motion.form>
      </div>
    </>
  );
}
