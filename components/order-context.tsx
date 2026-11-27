'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { categories } from '@/lib/site'

type OrderState = {
  categoryId: string
  model: string
  setCategory: (id: string) => void
  setModel: (model: string) => void
  pick: (categoryId: string, model: string) => void
}

const OrderContext = createContext<OrderState | null>(null)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [categoryId, setCategoryId] = useState(categories[0].id)
  const [model, setModel] = useState(categories[0].models[0])

  const setCategory = useCallback((id: string) => {
    const cat = categories.find((c) => c.id === id) ?? categories[0]
    setCategoryId(cat.id)
    setModel(cat.models[0])
  }, [])

  const pick = useCallback((id: string, m: string) => {
    setCategoryId(id)
    setModel(m)
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const value = useMemo(
    () => ({ categoryId, model, setCategory, setModel, pick }),
    [categoryId, model, setCategory, pick],
  )

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export function useOrder() {
  const ctx = useContext(OrderContext)
  if (!ctx) throw new Error('useOrder must be used within OrderProvider')
  return ctx
}
