
"use client"
import Link from "next/link";


const MoreNews = () => {
  return (
    <div className="relative z-10 mb-2">
        <Link href="/news" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
            font-medium rounded-xl text-2xl px-10 py-3 me-2 opacity-100 
            dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            More News
        </Link>
    </div>
  )
}

export default MoreNews





