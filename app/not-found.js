import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
      <h2>Not Found</h2>
      <p className='my-6 text-2xl'>Could not find requested resource</p>
      <Link href="/" className='bg-slate-800 hover:bg-slate-950 text-gray-200 px-6 py-3 rounded-lg'>Return Home</Link>
    </div>
  )
}