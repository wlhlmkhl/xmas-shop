import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prisma from "./prisma/prisma.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Hej, Samtliga produkter finns på /api/products och enstaka product finns på /api/products/id"
  );
});

app.get("/api/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.get("/api/cart/", async (req, res) => {
  const items = await prisma.cartItems.findMany();
  res.json(items);
});

app.get("/api/products/:id", async (req, res) => {
  const productId = parseInt(req.params.id);

  // Kontrollera om id är ett giltigt nummer
  if (isNaN(productId)) {
    return res.status(400).json({ error: "Ogiltigt ID" });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Produkt ej hittad" });
    }
  } catch (error) {
    console.error(error); // För att logga eventuella fel från databasen
    res.status(500).json({ error: "Något gick fel vid hämtning av produkt" });
  }
});

app.post("/api/cart", async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    if (!product_id || !quantity) {
      return res
        .status(400)
        .json({ error: "product_id och quantity är obligatoriska." });
    }
    const newCartItem = await prisma.cartItems.create({
      data: {
        product_id: product_id,
        quantity: quantity,
      },
    });
    res.status(201).json(newCartItem);
  } catch (error) {
    console.error("Fel vid skapande av CartItem:", error);
    res
      .status(500)
      .json({ error: "Ett fel inträffade vid skapandet av CartItem." });
  }
});

app.delete("/api/cart", async (req, res) => {
  try {
    const deleteCart = await prisma.cartItems.deleteMany({});
    res.status(200).json({
      message: "Alla varukorgsobjekt har raderats.",
      deletedCount: deleteCart.count,
    });
  } catch (error) {
    console.error("Fel vid radering av varukorgsobjekt:", error);
    res
      .status(500)
      .json({ error: "Det gick inte att radera varukorgsobjekt." });
  }
});
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
