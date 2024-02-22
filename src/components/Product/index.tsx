import { product } from "../../entities/product.entity";
import AddCartButton from "../button/AddCartButton";
import { ContainerProduct, ContainerProductDetail, ContainerProductDetailImageTitle, ProductTitle, ProductPrice } from "./styles";


interface ProductProps {
  product: product
}

export default function Product(props: ProductProps) {
  const { product } = props


  return <ContainerProduct>
    <ContainerProductDetail>
      <ContainerProductDetailImageTitle>
        <img src={product.image} width={150} alt="" srcset="" />
        <ProductTitle>{product.title}</ProductTitle>
      </ContainerProductDetailImageTitle>
      <ProductPrice>R$ {product.price}</ProductPrice>
    </ContainerProductDetail>
    <AddCartButton />
  </ContainerProduct>
}