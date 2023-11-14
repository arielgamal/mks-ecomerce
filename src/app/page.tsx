"use client"
import useRequest from '@/hooks/api/useRequest';
import { BagIcon, BuyButton, CardProduct, ImageContainer, MainPage, ProductDescription, ProductInformationContainer, ProductName, ProductPrice, ProductWrapper } from './style';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import SkeletonCard from '@/components/SkeletonCard';
import { products } from './services/types/types';
import Header from '@/components/Header';
import { useState } from 'react';


export default function Home() {
  const { products, isLoading } = useRequest()
  let localCartList = JSON.parse(localStorage.getItem("products") as string)
  const [cartList, setCartList] = useState(localCartList);
  const array = new Array(8).fill(null)
  const notify = () => toast.error('Voce já possui esse item no seu carrinho.', {
    position: "top-center",
    autoClose: 2000,
    closeOnClick: true,
    draggable: true,
    theme: "colored",
    });;

  console.log(products?.products)
  
  function buyItem(item: any) {
    const product = {
      id: item.id,
      name: item.name,
      photo: item.photo,
      price: item.price,
      qty: 1
    }
    if (!localStorage.getItem("products")) {
      const array = []
      setCartList([product])
      array.push(product)
      localStorage.setItem("products", JSON.stringify(array))
      return
    }

    let cartItems = JSON.parse(localStorage.getItem("products") as string)
    if (cartItems.some((element: products) => element.id === item.id)) {
      notify()
      return
    }
    cartItems.push(product)
    setCartList([...cartList, product])
    localStorage.setItem("products", JSON.stringify(cartItems))
    }

  return (
    <>
      <Header cartList={cartList} setCartList={setCartList} />
      <MainPage>
        {isLoading && array.map(() => <SkeletonCard key={array.length} />)}
        {
          products?.products?.map((produto: products) => (
            <CardProduct key={produto.id}>
              <ProductInformationContainer>
                <ImageContainer>
                  <Image src={produto.photo} alt={produto.name} width={50} height={50} layout='responsive' />
                </ImageContainer>

                <ProductWrapper>
                  <ProductName>{produto.name}</ProductName>
                  <ProductPrice>R${produto.price}</ProductPrice>
                </ProductWrapper>

                <ProductDescription>{produto.description}</ProductDescription>
              </ProductInformationContainer>
              
              <BuyButton onClick={() => buyItem(produto)}>
                <BagIcon as={Image} src={"/shopIcon.svg"} alt="icon" width={12} height={11} />
                <p>Comprar</p>
              </BuyButton>
            </CardProduct>
          ))
        }
        <ToastContainer/>
      </MainPage>
    </>
  )
}
