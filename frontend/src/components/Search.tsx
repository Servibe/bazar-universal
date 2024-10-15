import { useEffect, useState } from "react";
import { Data } from "../types";
import { searchData } from "../services/search";
import { ProductList } from "./ProductList";
import { ProductDetails } from "./ProductDetail";

export const Search = ({ initialData }: { initialData: Data }) => {
  const [data, setData] = useState<Data>(initialData);
  const [search, setSearch] = useState<string>(() => {
    const searchParams = new URLSearchParams(window.location.search);

    return searchParams.get("search") ?? "";
  });
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const input = elements.namedItem("search");
    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input === null) {
      return;
    }

    setSearch(input.value);
    setHasSearched(true);
  };

  useEffect(() => {
    const newPathname =
      search === "" ? window.location.pathname : `/items?search=${search}`;

    window.history.pushState({}, "", newPathname);
  }, [search]);

  useEffect(() => {
    if (hasSearched) {
      searchData(search).then((response) => {
        const [err, newData] = response;

        if (err) {
          return;
        }

        if (newData) {
          setData(newData);
        }
      });
    }
  }, [search, initialData]);

  const handleProductClick = (id: number) => {
    setSelectedProductId(id);
  };

  const goBack = () => {
    setSelectedProductId(null);
  };

  return (
    <div>
      <h1>Bazar online</h1>
      {!selectedProductId ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              placeholder="Laptos, smartphones, etc"
              defaultValue={search}
            />
            <button type="submit">Buscar</button>
          </form>
          <ProductList items={data} handleClick={handleProductClick} />
        </>
      ) : (
        <ProductDetails productId={selectedProductId} goBack={goBack} />
      )}
    </div>
  );
};
