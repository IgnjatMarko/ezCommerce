"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import {
    addProductToCart,
    removeProductFromCart,
} from "@/store/slices/cartSlice";
import toast from "react-hot-toast";

interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
}

interface ProductProps {
    product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const [existing, setExisting] = useState(false);
    const cartItems = useAppSelector((state) => state.cart.cartItems);

    useEffect(() => {
        // Check if the product already exists in the cart
        const isExisting = cartItems.some((item) => item.id === product.id);
        setExisting(isExisting);
    }, [cartItems, product.id]);

    const dispatch = useAppDispatch();
    function handleAdd() {
        const newCartItem = {
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
        };
        dispatch(addProductToCart(newCartItem));
        localStorage.setItem("cart", JSON.stringify([...cartItems, newCartItem]));
        toast.success("Item added successfully");
    }
    const handleRemove = (productId: number) => {
        dispatch(removeProductFromCart(productId));
        localStorage.setItem(
            "cart",
            JSON.stringify(cartItems.filter((product) => product.id !== productId))
        );
    };

    return (
        <div className='flex flex-col items-center justify-evenly pb-3'>
            <Image
                className='h-36 w-36 object-cover rounded'
                src={product.image}
                width={225}
                height={225}
                alt={product.name}
                priority
            />
            <h3 className='font-semibold text-xl'>{product.name} 
                <br />
                <span className='text-base font-medium'>{product.description}</span>
            </h3>
            <p className='font-semibold text-sm py-2'>${product.price}</p>
            {existing ? (
                <Button
                    variant={"destructive"}
                    onClick={() => handleRemove(product.id)}
                >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    <span> Remove from</span>
                </Button>
            ) : (
                <Button onClick={handleAdd}>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    <span> Add to Cart</span>
                </Button>
            )}
        </div>
    );
};

export default Product;
