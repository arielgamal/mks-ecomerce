import api from "@/app/services/api";
import { useQuery } from "@tanstack/react-query";

export default function useRequest() {
  const { data: products, isLoading, error } = useQuery({ queryKey:["Products"], queryFn: async() => {
    try {
      const response = await api.get('/products?page=1&rows=20&sortBy=name&orderBy=DESC')
      return response.data
    } catch (err) {
      console.error(err)
    }
  }})
  return {
    products,
    isLoading,
    error
  }
}