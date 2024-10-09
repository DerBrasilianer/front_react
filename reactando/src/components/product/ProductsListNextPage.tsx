'use client'

import ProductsListPage from "@/app/dashboard/products/page"
import { Product } from "@/interfaces/product"
import { useState } from "react"

interface ProductsListProps {

    perPage?: number

}

const ProductsListNextPageComponent = ({ perPage = 12 }: ProductsListProps) => {

    const [data, setData] = useState<Product[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    return (

        <>
        
            <footer className="container mx-auto p-4 mt-8 text-center col-span-full">

                {

                    hasMore && (

                        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-58 cursor-not-allowed' : ''}`}>

                            {loading ? 'loading...' : 'Load More'}

                        </button>

                    )

                }

                {

                    !hasMore && <p className="text-gray-600">No more products to load</p>

                }

            </footer>

        </>

    )

}

export default ProductsListNextPageComponent