import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Compass, Eye, HeartHandshake, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const features = [
  {
    icon: Compass,
    title: "Our Mission",
    text: "Our mission is to make the Himalayas of India accessible,safe, sustainable and life time memorable for travellers across the globe.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "Our vision is to become India's most trusted  community for exploring the Himalayas of India.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First & Responsible",
    text: "We believe adventure should be exciting but safety is always first, responsible and deeply connected to local communities.",
  },
  {
    icon: HeartHandshake,
    title: "Local Mountain Network",
    text: "Thats why we work with best Guides,local drivers, homestay owners and adventure professionals across the Himalayas of India .",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/about/group-trek.jpg"
                alt="A small group of trekkers walking a Himalayan trail together"
                width={1600}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border bg-card p-5 shadow-lg shadow-black/10 sm:left-8 sm:right-auto sm:max-w-72">
              <Quote className="h-5 w-5 text-brand" aria-hidden="true" />
              <p className="mt-2 font-poppins font-normal text-xs leading-relaxed text-foreground">
                &ldquo;Our vision is to become India&apos;s most trusted  community for exploring the Himalayas of India.&rdquo;
              </p>
              <p className="mt-2 font-poppins font-normal text-xs text-muted-foreground">
                Alpine Club India
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-2">
            <p className="mb-3 font-heading text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
              Our Vision &amp; Ethos
            </p>
            <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-black sm:text-3xl lg:text-[2.2rem]">
              India&apos;s Most Trusted Community For Exploring The Himalayas.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 max-w-xl font-poppins">
              We believe adventure should be exciting but safety is always first, responsible and deeply connected to local communities.Thats why we work with best Guides,local drivers, homestay owners and adventure professionals across the Himalayas of India .
            </p>

            <ul className="mt-8 grid gap-7 sm:grid-cols-2 text-left">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand"
                  >
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-extrabold uppercase tracking-tight text-black">
                      {feature.title}
                    </h3>
                    <p className="mt-1 font-poppins font-normal text-sm leading-relaxed text-neutral-600">
                      {feature.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-3.5 sm:flex-row sm:w-auto lg:justify-start">
              <Button asChild className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-7 py-3.5 text-white shadow-xs hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto">
                <Link href="/about">
                  Our story
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="w-[80%] max-w-sm rounded-xl border border-border/80 bg-secondary text-secondary-foreground hover:bg-neutral-200 hover:text-black font-heading text-xs font-bold uppercase tracking-wider h-12 px-7 sm:w-auto">
                <a href={site.phoneHref}>{site.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
