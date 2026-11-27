export const PHONE = '77067292088'
export const PHONE_DISPLAY = '8 706 729 20 88'
export const ADDRESS = 'Квартал, д. 15'

export function waLink(text?: string) {
  const base = `https://wa.me/${PHONE}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

export type Category = {
  id: string
  title: string
  orderLabel: string
  description: string
  image: string
  models: string[]
}

export const categories: Category[] = [
  {
    id: 'engines',
    title: 'Двигатели',
    orderLabel: 'Двигатель',
    description: 'Для Kia, Hyundai и Chevrolet',
    image: '/images/cat-engine.png',
    models: ['Kia', 'Hyundai', 'Chevrolet'],
  },
  {
    id: 'body',
    title: 'Кузовные детали',
    orderLabel: 'Кузовные детали',
    description: 'Для кроссоверов Jetour',
    image: '/images/cat-body.png',
    models: ['Jetour X70', 'Jetour X70 Plus', 'Jetour X90'],
  },
  {
    id: 'steps',
    title: 'Пороги',
    orderLabel: 'Пороги',
    description: 'Для автомобилей Jetour',
    image: '/images/cat-steps.png',
    models: ['Jetour'],
  },
]

export type Product = {
  name: string
  fits: string
  image: string
}

export const products: Product[] = [
  { name: 'Двигатель в сборе', fits: 'Kia / Hyundai', image: '/images/hero-engine.png' },
  { name: 'Передний бампер', fits: 'Jetour X70 Plus', image: '/images/cat-body.png' },
  { name: 'Пороги боковые', fits: 'Jetour X70 / X90', image: '/images/cat-steps.png' },
  { name: 'Головка блока', fits: 'Chevrolet', image: '/images/cat-engine.png' },
  { name: 'Фара LED', fits: 'Jetour X90', image: '/images/p-headlight.png' },
  { name: 'Турбина и коллектор', fits: 'Hyundai', image: '/images/p-gearbox.png' },
  { name: 'Боковое зеркало', fits: 'Jetour X70', image: '/images/p-mirror.png' },
  { name: 'Капот', fits: 'Jetour X70 Plus', image: '/images/p-hood.png' },
]
