import { MessageCircle, Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE, waLink } from '@/lib/site'

const nav = [
  { href: '#top', label: 'Главная' },
  { href: '#catalog', label: 'Каталог' },
  { href: '#products', label: 'Товары' },
  { href: '#order', label: 'Заявка' },
  { href: '#how', label: 'Как заказать' },
  { href: '#contacts', label: 'Контакты' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
          <a
            href="#top"
            className="font-display text-xl tracking-wide md:text-3xl"
            aria-label="DAU MOTORS, на главную"
          >
            DAU MOTORS
          </a>
          <div className="flex items-center gap-2 md:gap-5">
            <a
              href={`tel:+${PHONE}`}
              className="hidden items-center gap-2 font-display text-sm uppercase tracking-wide text-charcoal-foreground/80 transition-colors hover:text-charcoal-foreground sm:flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <nav
        aria-label="Разделы сайта"
        className="border-b border-border bg-background/95 backdrop-blur"
      >
        <ul className="mx-auto flex max-w-6xl items-center overflow-x-auto px-4 md:px-6">
          {nav.map((item, i) => (
            <li key={item.href} className="flex shrink-0 items-center">
              {i > 0 && <span className="h-4 w-px bg-foreground/30" aria-hidden="true" />}
              <a
                href={item.href}
                className={`block px-3 py-3 font-display text-xs uppercase tracking-wider transition-colors hover:text-accent md:px-4 md:text-sm ${
                  i === 0 ? 'underline decoration-2 underline-offset-[6px]' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
