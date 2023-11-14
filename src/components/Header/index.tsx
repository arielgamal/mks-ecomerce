"use client"
import Image from "next/image";
import { CartButton, CartIcon, CartNumber, HeaderComponent, MKSLogo, Paragraph } from "./style";
import { useState } from "react";
import Sidebar from "../SideBar";
import { products } from "@/app/services/types/types";

interface Props {
  cartList: products[]
  setCartList: React.Dispatch<React.SetStateAction<products[]>>
}

export default function Header({cartList, setCartList} : Props) {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  return (
    <HeaderComponent>
      <div style={ { display: "flex", gap: "5px" } }>
        <MKSLogo>MKS</MKSLogo>
        <Paragraph>SISTEMAS</Paragraph>
      </div>

      <div>
        <CartButton onClick={() => setShowMenu(!showMenu)}>
          <CartIcon as={Image} src={"/cartIcon.svg"} alt="icon" width={12} height={11} />
          <CartNumber>{cartList?.length}</CartNumber>
        </CartButton>
      </div>

      {
        showMenu 
        &&
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} cartList={cartList} setCartList={setCartList} />
      }
    </HeaderComponent>
  )
}