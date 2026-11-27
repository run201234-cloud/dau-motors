import Image from 'next/image'
import { products, waLink } from '@/lib/site'

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="products-title" className="font-display text-3xl uppercase md:text-4xl">
          Новые поступления
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 lg:grid-cols-4">
          {products.map((p) => (
            <li key={p.name} className="flex flex-col">
              <div className="overflow-hidden bg-panel">
                <div className="relative aspect-square">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`${p.name} — ${p.fits}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="h-1.5 bg-charcoal" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-sm font-semibold leading-snug md:text-base">{p.name}</h3>
              <p className="text-xs text-muted-foreground md:text-sm">{p.fits}</p>
              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="rounded-xl bg-charcoal px-3 py-2 font-display text-[11px] uppercase text-charcoal-foreground shadow-md md:text-xs">
                  В наличии
                </span>
                <a
                  href={waLink(
                    `Здравствуйте! Интересует: ${p.name.toLowerCase()} (${p.fits}). Подскажите цену и наличие.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-right font-display text-[11px] uppercase leading-tight transition-colors hover:text-accent md:text-xs"
                >
                  Узнать
                  <br />
                  цену
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
