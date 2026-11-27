import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { waLink } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
      <div className="relative overflow-hidden bg-panel">
        <div className="grid items-center md:grid-cols-[1.05fr_1fr]">
          <div className="relative z-10 px-6 pb-4 pt-10 md:px-10 md:py-16">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-charcoal px-3 py-1 text-xs font-semibold uppercase tracking-widest text-charcoal-foreground">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              В наличии
            </p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] text-foreground sm:text-6xl lg:text-8xl">
              Новые
              <br />
              двигатели
            </h1>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
              Автозапчасти для Kia, Hyundai, Chevrolet и Jetour. Напишите марку и модель — подберём
              деталь и подскажем срок.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={waLink('Здравствуйте! Пишу с сайта DAU MOTORS.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 rounded-2xl bg-card py-2 pl-5 pr-2 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5"
              >
                <span className="font-display text-sm uppercase leading-tight">
                  Купить
                  <br />
                  сейчас
                </span>
                <span className="grid size-11 place-items-center rounded-xl bg-secondary transition group-hover:bg-whatsapp group-hover:text-white">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-3 py-3 font-display text-sm uppercase tracking-wide hover:text-accent"
              >
                Каталог
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[460px]">
            <Image
              src="/images/hero-engine.png"
              alt="Двигатель в сборе"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="scale-125 object-cover object-center md:scale-[1.35]"
            />
          </div>
        </div>
        <div className="h-2 bg-charcoal" aria-hidden="true" />
      </div>
    </section>
  )
}
