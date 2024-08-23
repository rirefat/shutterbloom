'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-center text-2xl'>Something went wrong!</h2>
            <button 
            onClick={() => reset()}
            className='hover:underline'
             >
                Try again
            </button>
        </div>
    )
}