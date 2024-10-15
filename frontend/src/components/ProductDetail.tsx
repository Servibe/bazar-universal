import { useEffect, useState } from "react";
import { ProductItem } from "../types";
import { productDetail } from "../services/product";

export const ProductDetails = ({
  productId,
  goBack,
}: {
  productId: number;
  goBack: () => void;
}) => {
  const [product, setProduct] = useState<ProductItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const newPathname =
      productId.toString() === ""
        ? window.location.pathname
        : `/items/${productId}`;

    window.history.pushState({}, "", newPathname);
  }, [productId]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const [err, data] = await productDetail(productId);

        if (err) {
          setError(err.message);

          return;
        }

        if (data) {
          setProduct(data);
        }
      } catch (error) {
        setError("Error al obtener el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>No se encontró el producto</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <button onClick={goBack}>Volver</button>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <b>{product.price}&nbsp;&euro;</b>
      <b>{product.rating}</b>
      <div>
        <p>Stock disponible: {product.stock}</p>
      </div>
    </div>
  );
};
