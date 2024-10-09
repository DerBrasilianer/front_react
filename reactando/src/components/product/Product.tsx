import { Product } from "@/interfaces/product";

interface ProductComponentProps {

    product: Product

}

const ProductComponent = ({ product }: ProductComponentProps) => {

    return (

        <div key={product.id}>

            <h2>{product.title}</h2>
            <p>{product.price}</p>

        </div>

    )

}

export default ProductComponent