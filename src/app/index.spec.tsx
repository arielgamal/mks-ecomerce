
import Header from '@/components/Header'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Home from './page'


describe("Testes do componente header", () => {
    it("Testa se tem texto LOJA", () => {
      render(<Header />)
      const element = screen.getByText("LOJA")
      expect(element).toBeInTheDocument()
    })

    it("Testa se tem texto SISTEMAS", () => {
      render(<Header />)
      const element = screen.getByText("SISTEMAS")
      expect(element).toBeInTheDocument()
    })

    it("Testa se tem um botão", () => {
      render(<Header />)
      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()
    })

    it("Se no botão há um ícone e um texto.", () => {
      render(<Header />)
      const button = screen.getByRole("button");
      expect(button.getElementsByTagName("i"));
      expect(button.getElementsByTagName("p"));
    })
  })

  it("Testa se ao clicar no botão abre o componente sidebar", () => {
    render(<Header />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  })
  // describe("Testes do card",() => {
  //   it("", async () => {
  //     const { getByText } = render(<Home />)
  
  //     // Simula a requisição à API
  //     const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=20&sortBy=name&orderBy=DESC")
  //     await response.json()
  //     await waitFor(() => getByText("Comprar"))
  
  //     // Verifica se o botão está visível
  //     expect(getByText("Comprar")).toBeVisible()
  //   })

  // })