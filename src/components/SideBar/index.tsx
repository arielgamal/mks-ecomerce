import { products } from "@/app/services/types/types";
import { ButtonDecrease, ButtonIncrease, ButtonRemoveTextX, BuyButton, BuyCart, EmptyCart, ImageContainer, InsideItemCart, ItemCart, PriceCountWrapper, ProductName, ProductPrice, QuantityContainer, QuantityText, QuantityTitle, RemoveCardX, SidebarCart, SidebarHeader, TotalContainer } from "./style";
import Image from "next/image";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";


interface Props {
  showMenu: React.SetStateAction<Boolean>
  setShowMenu: React.Dispatch<React.SetStateAction<Boolean>>
  cartList: products[]
  setCartList: React.Dispatch<React.SetStateAction<products[]>>
}

export default function Sidebar({showMenu, setShowMenu, cartList, setCartList} : Props) {
  const removeItemCart = (id: number) => {
    let cartItems = JSON.parse(localStorage.getItem("products") as string)
    cartItems = cartItems.filter((element: products) => element.id !== id)
    localStorage.setItem("products", JSON.stringify(cartItems))
    setCartList(cartItems)
  }

  function increaseItem(id: number) {
    let cartItems = JSON.parse(localStorage.getItem("products") as string)
    cartItems.find((element: products) => element.id === id).qty++
    localStorage.setItem("products", JSON.stringify(cartItems))
    setCartList(cartItems)
  }

  function decreaseItem(id: number) {
    let cartItems = JSON.parse(localStorage.getItem("products") as string)
    let data = cartItems.find((element: products) => element.id === id)
    if (data.qty === 1) {
      return
    }

    data.qty--
    localStorage.setItem("products", JSON.stringify(cartItems))
    setCartList(cartItems)
  }

  function totalPrice() {
    let total = 0;
    cartList.forEach((element: products) => {
      total += parseFloat(element.price) * element.qty
    })
    return total
  } 

  // const removeAll = () => {
  //   localStorage.removeItem("products")
  // }

    return (
        <SidebarCart data-testid="sidebar">
            <SidebarHeader>
              <p>Carrinho de Compras</p>
              <button onClick={() => setShowMenu(!showMenu)}>X</button>
            </SidebarHeader>

            <BuyCart>
              { !cartList.length && <EmptyCart>Voce não possui nenhum item no carrinho</EmptyCart> }
              {cartList?.map((element : products) => (
                <ItemCart key={element.id}>
                  <RemoveCardX onClick={() => removeItemCart(element.id)}>
                    <ButtonRemoveTextX>X</ButtonRemoveTextX>
                  </RemoveCardX>

                  <InsideItemCart>
                    <ImageContainer>
                      <Image src={element.photo} alt={element.name} width={50} height={50} layout='responsive' />
                    </ImageContainer>
                    
                    <ProductName>{element.name}</ProductName>
                    
                    <PriceCountWrapper>
                      <div>
                        <QuantityTitle>Qtd:</QuantityTitle>
                        <QuantityContainer>
                          <ButtonIncrease onClick={() => decreaseItem(element.id)}>-</ButtonIncrease>
                          <QuantityText>{element.qty}</QuantityText>
                          <ButtonDecrease onClick={() => increaseItem(element.id)}>+</ButtonDecrease>
                        </QuantityContainer>
                      </div>
                      <ProductPrice>R${element.price}</ProductPrice>
                    </PriceCountWrapper>
                  </InsideItemCart>
                </ItemCart>
              ))}

              {/* <RemoveButtonContainer>
                <button datatest-id="removeAll" onClick={() => removeAll()}>Esvaziar carrinho</button>
              </RemoveButtonContainer> */}


            </BuyCart>

            <TotalContainer>
              <p>Total</p>
              <p datatest-id="totalInCart">R$ {totalPrice()}</p>
            </TotalContainer>
            <BuyButton>
              <button datatest-id="buyAll" onClick={() => console.log("funcao de comprar")}>Finalizar compra</button>
            </BuyButton>
        </SidebarCart>
    )
  }
  