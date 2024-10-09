import { Product } from "@/interfaces/product";
import { GenericListResponse } from "@/interfaces/response";

async function getData() {

    try {

        const request = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
        const response: GenericListResponse<'products', Array<Product>> = await request.json()

        return response.products

    } catch (error) {

        console.error(`Error fetching products: ${error}`)
        return []

    }

}

const ProductsListPage = async () => {

    const data = await getData()

    return (

        <div>

            <h1>Products List Page</h1>

            {

                data?.map((product) => (

                    <div key={product.id}>

                        <h2>{product.title}</h2>

                        <p>{product.price}</p>

                    </div>

                ))

            }

            {

                data.length === 0 && <p>No products found</p>

            }

        </div>

    )

}

export default ProductsListPage