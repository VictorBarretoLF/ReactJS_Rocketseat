import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HorizontalDivider } from "./horizontal-divider";
import { SectionTitle } from "./section-title";
import { HighlightedProjectCard } from "./highlighted-project-card";

const PROJECTS = [
    {
        title: "BookWise",
        description:
            "BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js.",
        techs: ["Next.js", "TypeScript", "Next Auth", "Stitches"],
        thumbnail: "https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA",
        slug: "book-wise",
    },
    {
        title: "Ignite Call",
        description:
            "Este projeto foi desenvolvido durante o bootcamp Ignite da Rocketseat. O projeto permite ao usuário criar uma conta e receber agendamentos no calendário usando a API do Google, um projeto semelhante ao Calendly.",
        techs: ["Next.js", "TypeScript", "Next Auth", "Stitches", "React Query", "Prisma"],
        thumbnail: "https://media.graphassets.com/x8RFLG61REeI778PBPK2",
        slug: "ignite-call",
    },
];

export const HighlightedProjectsList = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em destaque" />
            <HorizontalDivider className="mb-16" />

            <div>
                {PROJECTS.map((project, index) => (
                    <div key={project.slug}>
                        <HighlightedProjectCard project={project} />
                        <HorizontalDivider className="my-16" />
                    </div>
                ))}
                <p>
                    <span className="text-gray-400">Se interessou?</span>
                    <Link href="/projects" className="inline-flex">
                        Ver todos
                        <HiArrowNarrowRight />
                    </Link>
                </p>
            </div>
        </section>
    );
};
