'use client'

import ProductsListPage from "@/app/dashboard/products/page"

interface ProductsListProps {

    perPage?: number

}

const ProductsListNextPageComponent = ({ perPage = 12 }: ProductsListProps) => {

    return (

        <>
        
            <footer className="container mx-auto p-4 mt-8 text-center col-span-full">

                {

                    (

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                            Load More

                        </button>

                    )

                }

            </footer>

        </>

    )

}

export default ProductsListNextPageComponent