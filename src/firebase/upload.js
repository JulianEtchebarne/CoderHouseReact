import DATA_BEBIDAS_RECOM from "../data/DATA_BEBIDAS_RECOM.json" assert { type: "json" };
import { db } from "./config.js";
import { addDoc, collection } from "firebase/firestore";

const data = DATA_BEBIDAS_RECOM.map((item) => {
  delete item.id;
  return item;
});

const productosRef = collection(db, "productos_recomendados");

data.forEach((item) => {
  addDoc(productosRef, item);
});
