"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useAppSelector } from '@/store/hooks/hooks'

export default function Header() {

    const totalItems = useAppSelector((state) => state.cart.totalItems);
    
    return (
        <nav className="flex items-center justify-between px-16 py-4 bg-background border-b">
            <h2 className="font-bold text-xl">Pick Up Your Coffee</h2>
            <div className="relative">
            <Link href="/cart">
                View Cart
                <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Shopping cart</span>
                </Button>
            </Link>
                {totalItems > 0 && (
                    <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1 text-xs">
                        {totalItems}
                    </Badge>
                )}
            </div>
        </nav>
    )
}
