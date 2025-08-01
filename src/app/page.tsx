import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Olá! Eu sou Paulo Luan</Heading>
      <Paragraph className="max-w-xl mt-4">
        Desenvolvedor de Software cursando o último semestre de Análise e
        Desenvolvimento de Sistemas na Unifor. Possuo experiência no
        desenvolvimento de soluções para automação de processos contábeis na
        Assertivus Contábil. Atualmente, integro a equipe da Gerência de TI do
        Sistema FIEC como estagiário de desenvolvimento, contribuindo com
        projetos utilizando tecnologias como React, Next.js, PHP, Laravel, SQL e
        Docker. Também atuei recentemente como monitor no projeto Geração Tech,
        auxiliando alunos em formação no curso Full Stack Web.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Atualmente, estou focado em{" "}
        <Highlight>construir produtos que resolvem problemas reais</Highlight> e
        melhorar a experiência do usuário através de tecnologias modernas.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        No que estou trabalhando agora
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
