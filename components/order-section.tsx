'use client'

import { useState } from 'react'
import { MapPin, MessageCircle } from 'lucide-react'
import { ADDRESS, PHONE_DISPLAY, categories, waLink } from '@/lib/site'
import { useOrder } from './order-context'

const fieldClass =
  'w-full min-h-12 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-base text-charcoal-foreground placeholder:text-charcoal-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60'

export function OrderSection() {
  const { categoryId, model, setCategory, setModel } = useOrder()
  const [name, setName] = useState('')
  const [note, setNote] = useState('')

  const category = categories.find((c) => c.id === categoryId) ?? categories[0]

  let message = `Здравствуйте! Меня интересует: ${category.orderLabel.toLowerCase()} на ${model}.`
  if (note.trim()) message += `\nУточнение: ${note.trim()}`
  if (name.trim()) message += `\nМеня зовут ${name.trim()}.`
  message += '\n(заявка с сайта DAU MOTORS)'

  return (
    <section id="order" aria-labelledby="order-title" className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:px-6 md:py-20">
        <div>
          <h2 id="order-title" className="font-display text-3xl uppercase md:text-4xl">
            Заявка на запчасть
          </h2>
          <p className="mt-3 max-w-lg text-charcoal-foreground/70">
            Заполните поля — откроется WhatsApp с готовым сообщением. Останется нажать «Отправить».
          </p>
          <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <label className="grid gap-2 text-sm font-medium">
              Что нужно
              <select
                className={fieldClass}
                value={categoryId}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id} className="text-foreground">
                    {c.orderLabel}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Автомобиль
              <select className={fieldClass} value={model} onChange={(e) => setModel(e.target.value)}>
                {category.models.map((m) => (
                  <option key={m} value={m} className="text-foreground">
                    {m}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">
              Ваше имя
              <input
                type="text"
                autoComplete="name"
                placeholder="Например, Алмас"
                className={fieldClass}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">
              Уточнение
              <textarea
                rows={3}
                placeholder="Год выпуска, объём двигателя, какая деталь нужна"
                className={`${fieldClass} resize-y`}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-whatsapp px-6 font-semibold text-white transition hover:brightness-110"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Отправить в WhatsApp
              </a>
              <p className="text-sm text-charcoal-foreground/60">Сообщение уйдёт на номер {PHONE_DISPLAY}</p>
            </div>
          </form>
        </div>

        <aside
          id="contacts"
          aria-label="Контакты"
          className="h-fit rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
        >
          <h3 className="font-display text-xl uppercase">Контактное лицо</h3>
          <p className="mt-1 text-sm text-charcoal-foreground/60">Пишите в WhatsApp — отвечаем по запчастям</p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block font-display text-2xl tracking-wide transition-colors hover:text-whatsapp md:text-3xl"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink('Здравствуйте! Пишу с сайта DAU MOTORS.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-card px-5 font-display text-sm uppercase text-foreground transition hover:-translate-y-0.5"
          >
            Открыть чат
          </a>
          <ul className="mt-6 grid gap-3 border-t border-white/10 pt-6 text-sm text-charcoal-foreground/80">
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
              {ADDRESS}
            </li>
            <li className="flex items-center gap-3">
              <span className="size-2 shrink-0 -skew-x-12 bg-accent" aria-hidden="true" />
              Двигатели Kia, Hyundai, Chevrolet
            </li>
            <li className="flex items-center gap-3">
              <span className="size-2 shrink-0 -skew-x-12 bg-accent" aria-hidden="true" />
              Кузовные детали и пороги Jetour
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
