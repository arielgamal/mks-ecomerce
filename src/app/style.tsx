"use client"
import styled from "styled-components";

export const MainPage = styled.div`
  width: full;
  padding-top: 30px;
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: white;
  
  @media (min-width: 376px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    padding-top: 50px;
    padding-left: 300px;
    background-color: white;
    padding-right: 300px;
  }
`

export const CardProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 251px;
    height: 330px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px #00000022;
    
    @media (min-width: 376px) {
  }
`

export const ProductInformationContainer = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  @media (min-width: 376px) {
  }
`

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: auto;

    @media (min-width: 376px) {
  }
`

export const ProductWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
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
    font-size: 15px;
    width: 94px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #373737;
    font-weight: 700px;
    color: white;
    @media (min-width: 376px) {
  }
`

export const ProductDescription = styled.p`
    font-size: 10px;
    font-weight: 300px;
    color: #2C2C2C;
    @media (min-width: 376px) {
  }
`

export const BuyButton = styled.button`
    width: 100%;
    height: 37px;
    border: none;
    background-color: #0F52BA;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    cursor: pointer;
    border-radius: 0px 0px 10px 10px;
    
    & p {
      font-weight: 600;
      font-size: 20px;
      color: white;
    }
    
    @media (min-width: 376px) {
  }
`

export const BagIcon = styled.img`
  width: 20px;
  height: 20px;
  font-weight: 700;
  @media (min-width: 376px) {
  }
`