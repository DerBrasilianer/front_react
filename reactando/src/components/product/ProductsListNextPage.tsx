'use client'

import { Product } from "@/interfaces/product"
import { GenericListResponse } from "@/interfaces/response"
import { useState } from "react"

interface ProductsListProps {

    perPage?: number

}

const ProductsListNextPageComponent = ({ perPage = 12 }: ProductsListProps) => {

    const [data, setData] = useState<Product[]>([])
    const [page, setPage] = useState<number>(1)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)

    const getData = async () => {

        if (!hasMore || loading) {

            return

        }

        try {

            setLoading(true)
            setPage(page + 1)

            const request = await fetch(`https://dummyjson.com/products?limit=12&skip=${page * perPage}&select=title,price`)

            const response: GenericListResponse<'products', Array<Product>> = await request.json()

            setData([...data, ...response.products])

            if (response.products.length === 0) {

                setHasMore(false)

            }

        } catch (error) {

            setHasMore(false)
            console.error(`Error fetching products: ${error}`)

        } finally {

            setLoading(false)

        }

    }

    return (

        <>
        
            <footer className="container mx-auto p-4 mt-8 text-center col-span-full">

                {

                    hasMore && (

                        <button onClick={getData} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-58 cursor-not-allowed' : ''}`}>

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