import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
import React from 'react'

export default function page() {
  return (
    <div className='bg-blue-50 py-8 px-8 min-h-screen'>
        <Header />
        <ProductList />
    </div>
  )
}
