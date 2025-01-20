"use client";
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks'
import { decrement, increment } from "@/store/slices/counterSlice"
import { Minus, Plus } from 'lucide-react'
import React from 'react'

export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    function handleIncrement() {
        dispatch(increment())
    }

    function handleDecrement() {
        dispatch(decrement())
    }
    return (
        <div className='max-w-3xl mx-auto flex flex-col items-center justify-center text-white'>
            <h2 className="scroll-m-20 border-b pb-6 text-3xl font-semibold tracking-tight first:mt-0">
                Redux Counter
            </h2>
            <div className='py-4'>
                <div className='flex items-center space-x-6'>
                    <button onClick={handleIncrement}><Plus className="w-8 h-8" /></button>
                    <p className='scroll-m-20 text-6xl font-semibold tracking-tight first:mt-0'>{count}</p>
                    <button onClick={handleDecrement}><Minus className="w-8 h-8" /></button>
                </div>
            </div>
        </div>
    )
}
