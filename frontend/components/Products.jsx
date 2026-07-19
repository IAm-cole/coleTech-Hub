import { ProductsData, ProductsData2 } from "../src/data/NavbarData"
import { ProductCard } from "./ProductCard"
import { Heading } from "./Shared/Heading"


export const Products = () => {
  return (
    <div>
        <div className="mx-8 mb-8">
            <Heading title="Our Products" subtitle="Explore Our Products" />

            <ProductCard data={ProductsData} />
            <ProductCard data={ProductsData2} />

        </div>
    </div>
  )
}
