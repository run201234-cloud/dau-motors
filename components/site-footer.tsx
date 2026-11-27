import { MessageCircle } from 'lucide-react'
import { ADDRESS, PHONE_DISPLAY, waLink } from '@/lib/site'

export function SiteFooter() {
  return (
    <>
      <footer className="bg-charcoal text-charcoal-foreground/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="font-display text-2xl text-charcoal-foreground">DAU MOTORS</p>
          <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-8">
            <span>{ADDRESS}</span>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-charcoal-foreground">
              {PHONE_DISPLAY}
            </a>
            <span>© {new Date().getFullYear()} DAU MOTORS</span>
          </div>
        </div>
      </footer>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>
    </>
  )
}
