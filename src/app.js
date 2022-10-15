import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categoriesRoutes from "./routers/categories.routes"
import productsRoutes from "./routers/products.routes"

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes)
app.use("/products", productsRoutes)

export default app.listen(3333, () => {
  console.log("Server running");
  startDatabase()
});

