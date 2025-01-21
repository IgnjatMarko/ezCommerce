import React from 'react'
import { data } from '@/lib/data'
import Product from './Product'
import Link from 'next/link'

export default function ProductList() {
    return (
        <div>
            <h2 className='px-16 font-bold text-xl'>Pick Up Your Coffee ({data.length})</h2>
            <Link href="/cart">View Cart</Link>
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
