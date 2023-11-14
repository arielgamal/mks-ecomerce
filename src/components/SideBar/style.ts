"use client"
import styled from "styled-components";

export const SidebarCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #0F52BA;
  width: 330px;
  right: 0;
  height: 100vh;
  top: 0;

  @media (min-width: 376px) {
    width: 486px;
    overflow-y: auto;
  }
`

export const SidebarHeader = styled.div`
  font-size: 27px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  align-items: center;
  width: 100%;
  height: 155px;

  & p {
    width: 200px;
  }

  & button {
    color: white;
    background: black;
    width: 38px;
    height: 38px;
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`

export const BuyCart = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 10px;
  overflow-y: auto;
  padding: 20px 0px;
  height: 100%;
  width: 100%;
  justify-content: center;

  @media (min-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
  }
`

export const EmptyCart = styled.p`
  font-weight: bold;
  color: white;
  font-size: 18px;
`

export const ItemCart = styled.div`
  position: relative;
  background-color: white;
  width: 250px;
  height: 250px;
  border-radius: 8px;

  @media (min-width: 376px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 375px;
    height: 105px;
    padding: 0px 10px;
    margin-bottom: 30px;
  }
`

export const InsideItemCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 376px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`

export const ImageContainer = styled.div`
  width: 120px;
  margin: auto;

  @media (min-width: 376px) {
    width: 80px;
    margin-left: 20px;
  }
`

  export const ProductName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400px;
  color: #2C2C2C;
  @media (min-width: 376px) {
}
`

export const ProductPrice = styled.p`
  font-size: 14px;
  width: 84px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #373737;
  font-weight: 700px;
  color: white;
  
  @media (min-width: 376px) {
    background-color: white;
    color: black;
    font-weight: 700;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (min-width: 376px) {

  }
`

export const RemoveButtonContainer = styled.div`
  & button {
    width: 30px;
    height: 30px;
    background-color: red;
  }

  @media (min-width: 376px) {
}
`

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  margin-Bottom: 20px;

  & p {
    color: white;
    font-weight: 700;
    font-size: 27px;
  }

  @media (min-width: 376px) {
    
  }
`

export const BuyButton = styled.div`
  width: 100%;
  
  & button {
    width: 100%;
    height: 100px;
    border: none;
    font-weight: 600;
    background-color: black;
    color: white;
    font-size: 27px;
  }

  @media (min-width: 376px) {

  }
`

export const PriceCountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 376px) {

  }
`

export const RemoveCardX = styled.button`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  background-color: white;
  border: none;

  @media (min-width: 376px) {
    width: auto;
    position: absolute;
    padding-right: 0px;
    border-radius: 50%;
    right: -10px;
    top: -20px
  }
`

export const ButtonRemoveTextX = styled.p`
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 376px) {
    color: white;
    font-size: 16px;
    padding: 5px 7px;
    border-radius: 50%;
    background-color: black;
  }
`

export const ButtonIncrease = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 5px 0px 0px 5px;
  font-size: 16px;

  @media (min-width: 376px) {

  }
`

export const QuantityText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  /* border: solid lightgray; */
  color: gray;

  @media (min-width: 376px) {

  }
`

export const ButtonDecrease = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 0px 5px 5px 0px;
  font-size: 16px;

  @media (min-width: 376px) {

  }
`

export const QuantityTitle = styled.p`
  display: hidden;

  @media (min-width: 376px) {
    font-size: 12px;
  } 
`