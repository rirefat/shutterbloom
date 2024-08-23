'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2 className='text-center text-2xl'>Something went wrong!</h2>
            <button onClick={() => reset()} >
                Try again
            </button>
        </div>
    )
}