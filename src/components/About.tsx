"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Olá! Eu sou Paulo Luan, um desenvolvedor full-stack apaixonado por
          criar produtos e web apps que não apenas funcionam, mas também
          encantam. Minha jornada no mundo da tecnologia começou com uma simples
          curiosidade, e desde então, tenho me dedicado a transformar essa
          curiosidade em soluções inovadoras e impactantes.
        </Paragraph>
        <Paragraph className=" mt-4">
          Desde os primeiros dias da minha jornada, fiquei cativado pela arte de
          criar experiências digitais excepcionais. Como desenvolvedor, eu
          prospero em transformar linhas de código em soluções funcionais e
          elegantes. Meu objetivo não é apenas criar software, mas construir
          maravilhas digitais que unem forma e função de maneira perfeita.
        </Paragraph>

        <Paragraph className=" mt-4">
          Mas minha jornada não para na programação. Com um coração cheio de
          palavras e uma mente transbordando de ideias, aventurei-me no reino da
          escrita. Desde artigos técnicos que desvendam conceitos complexos até
          contos criativos que acendem a imaginação, teço palavras para
          informar, entreter e inspirar.
        </Paragraph>
        <Paragraph className=" mt-4">
          O que me diferencia é a minha apreciação inabalável pelo design. Eu
          acredito que estética e usabilidade caminham lado a lado. Meu olhar
          para um design incrível garante que cada projeto que eu empreendo não
          apenas funcione perfeitamente, mas também tenha uma aparência
          deslumbrante.
        </Paragraph>
        <Paragraph className=" mt-4">
          Através deste site, meu objetivo é compartilhar meus insights,
          experiências e criações com você. Seja você um colega desenvolvedor em
          busca de soluções, um colega escritor em busca de inspiração, ou
          simplesmente alguém que aprecia os aspectos mais refinados do design,
          há algo aqui para você.
        </Paragraph>
        <Paragraph className=" mt-4">
          Junte-se a mim nesta jornada de bytes e narrativas, lógica e
          criatividade, código e prosa. Juntos, podemos explorar as
          possibilidades infinitas da tecnologia e da narrativa, enquanto nos
          deleitamos na pura beleza do design cuidadoso.
        </Paragraph>
        <Paragraph className=" mt-4">
          Obrigado por estar aqui, e mal posso esperar para embarcar nesta
          aventura com você.
        </Paragraph>
      </div>
    </div>
  );
}
