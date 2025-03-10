import { Hero } from "./Hero";

interface Props {
  title: string;
  subtitle: string;
}

function HeroLamp({ title, subtitle }: Props) {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      titleClassName="text-fl-4xl md:text-fl-5xl font-[var(--peso-bold)] title-hero-lamp"
      subtitleClassName="text-fl-lg md:text-fl-xl max-w-[var(--grid-max-width)] subtitle-hero-lamp"
      actionsClassName="mt-8"
    />
  );
}

export { HeroLamp };
