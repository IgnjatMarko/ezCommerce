import React from 'react'
import { data } from '@/lib/data'
import Product from './Product'
import Header from './Header'

export default function ProductList() {
    return (
        <div>
            <Header />
            <div className='py-8 grid grid-cols-2 md:grid-cols-4'>
                {data.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}
