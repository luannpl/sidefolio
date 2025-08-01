import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projetos | Paulo Luan",
  description:
    "Paulo Luan é um desenvolvedor full-stack, apaixonado por construir produtos e web apps que impactam milhões de vidas.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        Meus Principais Projetos Públicos
      </Heading>

      <Products />
    </Container>
  );
}
