"use client";

import { useAppSelector } from '@/store/hooks/hooks';
import React from 'react'

export default function CounterValue() {
    const count = useAppSelector((state) => state.counter.value);

    return (
        <div className='pr-1'>
            {count}
        </div>
    )
}
