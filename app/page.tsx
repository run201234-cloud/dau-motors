import { Categories } from '@/components/categories'
import { Hero } from '@/components/hero'
import { HowToOrder } from '@/components/how-to-order'
import { OrderProvider } from '@/components/order-context'
import { OrderSection } from '@/components/order-section'
import { Products } from '@/components/products'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <OrderProvider>
          <Hero />
          <Categories />
          <Products />
          <OrderSection />
        </OrderProvider>
        <HowToOrder />
      </main>
      <SiteFooter />
    </>
  )
}
