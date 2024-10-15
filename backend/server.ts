import express from "express";
import cors from "cors";
import data from "./data/products.json";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/items", async (req, res) => {
  const { search: param } = req.query;

  if (!param) {
    return res.status(500).json({
      message: "El parametro 'search' es necesario",
    });
  }

  if (Array.isArray(param)) {
    return res.status(500).json({
      message: "El parametro debe de ser un string",
    });
  }

  const search = param.toString().toLowerCase();
  const filteredData = data.products.filter((item) => {
    return item.category.toLowerCase().includes(search);
  });

  return res.status(200).json({
    data: filteredData,
  });
});

app.get("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  const productId = parseInt(id, 10);

  if (isNaN(productId)) {
    return res.status(500).json({
      message: "El parametro 'id' es necesario",
    });
  }

  const product = data.products.find((item) => item.id === productId);

  if (!product) {
    return res.status(500).json({
      message: "No se encontró el producto",
    });
  }

  return res.status(200).json({
    data: product,
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
