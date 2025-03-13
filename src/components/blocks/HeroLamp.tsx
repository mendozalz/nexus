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
      titleClassName="text-fl-2xl sm:text-fl-3xl md:text-fl-4xl lg:text-fl-5xl font-[var(--peso-bold)] title-hero-lamp"
      subtitleClassName="text-fl-base sm:text-fl-lg md:text-fl-xl max-w-[90%] sm:max-w-[var(--grid-max-width)] subtitle-hero-lamp"
      actionsClassName="mt-4 md:mt-8"
    />
  );
}

export { HeroLamp };
