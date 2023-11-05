import { Product } from "@/app/other/product";
import { randomDelay } from "@/app/other/utils";
import { useEffect, useState } from "react";

export default function useSearchProducts(searchInput: string) {
  const [products, setProducts] = useState<Product[]>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    setError(false);

    let ignore = false;

    async function searchProducts() {
      try {
        const products = await fetchProducts(searchInput);
        if (!ignore) {
          setProducts(products);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (!ignore) {
          setError(true);
          setLoading(false);
        }
      }
    }

    if (searchInput) {
      searchProducts();
    } else {
      setProducts(undefined);
      setLoading(false);
    }

    return () => {
      ignore = true;
    };
  }, [searchInput]);

  return { products, loading, error };
}

async function fetchProducts(searchQuery: string): Promise<Product[]> {
  await randomDelay();
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchQuery}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.products;
}
