import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Minha Carreira</Heading>
      <Paragraph className="max-w-xl mt-4">
        Sou um desenvolvedor full-stack apaixonado por construir produtos e web
        apps que impactam milhões de vidas. Minha jornada profissional é breve,
        mas cheia de aprendizados, projetos e conquistas.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
