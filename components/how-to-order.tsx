import { ADDRESS } from '@/lib/site'

const steps = [
  { n: '01', title: 'Напишите', text: 'Марка, модель, год и нужная деталь. Можно приложить фото.' },
  { n: '02', title: 'Подтвердим', text: 'Проверим наличие и назовём цену и срок.' },
  { n: '03', title: 'Заберите', text: `Приезжайте по адресу: ${ADDRESS}.` },
]

export function HowToOrder() {
  return (
    <section id="how" aria-labelledby="how-title" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="how-title" className="font-display text-3xl uppercase md:text-4xl">
          Как заказать
        </h2>
        <p className="mt-3 text-muted-foreground">Три шага, без звонков и ожидания в очереди.</p>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col bg-panel/60">
              <div className="flex-1 p-6">
                <span className="font-display text-5xl text-foreground/25">{s.n}</span>
                <h3 className="mt-4 font-display text-xl uppercase">{s.title}</h3>
                <p className="mt-2 text-foreground/75">{s.text}</p>
              </div>
              <div className="h-2 bg-charcoal" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
