import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contato | Paulo Luan",
  description:
    "Paulo Luan é um desenvolvedor full-stack, apaixonado por construir produtos e web apps que impactam milhões de vidas.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Entre em Contato</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Entre em contato comigo por e-mail, pelo WhatsApp ou preencha este
        formulário de contato. Eu responderei o mais rápido possível.
      </Paragraph>
      <Contact />
    </Container>
  );
}
