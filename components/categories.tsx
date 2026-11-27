'use client'

import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react'
import { categories } from '@/lib/site'
import { useOrder } from './order-context'

export function Categories() {
  const { pick } = useOrder()

  return (
    <section id="catalog" aria-labelledby="catalog-title" className="mt-10 bg-secondary/60 py-10 md:mt-14 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="catalog-title" className="sr-only">
          Каталог
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <article key={cat.id} className="group flex flex-col overflow-hidden bg-panel">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-[4/5]">
                <Image
                  src={cat.image || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-1">
                <div>
                  <h3 className="font-display text-2xl uppercase md:text-3xl">{cat.title}</h3>
                  <p className="mt-1 text-sm text-foreground/75">{cat.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2" aria-label={`Модели: ${cat.title}`}>
                  {cat.models.map((m) => (
                    <li key={m}>
                      <button
                        type="button"
                        onClick={() => pick(cat.id, m)}
                        className="min-h-10 rounded-full border border-foreground/25 bg-background/70 px-3 text-sm font-medium transition hover:border-foreground hover:bg-background"
                      >
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => pick(cat.id, cat.models[0])}
                  className="mt-auto inline-flex w-fit items-center gap-4 rounded-2xl bg-card py-2 pl-4 pr-2 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5"
                >
                  <span className="text-left font-display text-xs uppercase leading-tight">
                    Оставить
                    <br />
                    заявку
                  </span>
                  <span className="grid size-10 place-items-center rounded-xl bg-secondary">
                    <ArrowDownRight className="size-5" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="h-2 bg-charcoal" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
