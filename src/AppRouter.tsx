import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { App } from "./App"
import { BooksPage } from "./pages/BooksPage"
import { BookDetailPage } from "./pages/BookDetailPage"
import { AdminPage } from "./pages/AdminPage"
import { CartPage } from "./pages/CartPage"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}