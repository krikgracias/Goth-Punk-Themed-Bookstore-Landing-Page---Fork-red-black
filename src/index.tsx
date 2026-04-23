import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './AppRouter'
import { CartProvider } from './context/CartContext'

const container = document.getElementById('root')!
createRoot(container).render(
  <CartProvider>
    <AppRouter />
  </CartProvider>
)