"use client"
import styled from "styled-components";

export const HeaderComponent = styled.section`
  position: relative;
  padding-right: 20px;
  padding-left: 20px;
  height: 48px;
  background: #0F52BA; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 450px) {
    height: 101px;
  }
`

export const MKSLogo = styled.p`
  color: white;
  font-weight: 600;
  font-size: 32px;
  line-height: 19px;

  @media (min-width: 450px) {
    font-size: 40px;
  }
`

export const Paragraph = styled.p`
  color: white;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-top: 3px;
  
  @media (min-width: 450px) {
    font-size: 20px;
  }
`


export const CartButton = styled.button`
  width: 52px;
  height: 26px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: white;
  border: none;
  cursor: pointer;

  @media (min-width: 450px) {
    width: 90px;
    height: 45px;
    flex-shrink: 0;
  }
`

export const CartIcon = styled.img`
  width: 12px;
  height: 11px;

  @media (min-width: 450px) {
    width: 19px;
    height: 18px;
  }
`


export const CartNumber = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: black;

  @media (min-width: 450px) {
    font-size: 18px;
  }
`