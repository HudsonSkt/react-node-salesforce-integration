import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  describeObject,
  selectById,
  updateObject,
  createObject,
  deleteObject,
  conn,
  select,
  deletes,
} from "./salesforce-service";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Salesforce Login Once
(async () => {
  try {
    await conn.login(
      process.env.SF_USERNAME ?? "",
      process.env.SF_PASSWORD ?? "",
    );
    console.log("Logged into Salesforce");
  } catch (err) {
    console.error("Login failed:", err);
  }
})();
app.get("/get/:objectName", async (req, res) => {
  const { objectName } = req.params;
  const result = await describeObject(objectName);
  res.json(result);
});

app.post("/describe", async (req, res) => {
  const { objectName } = req.body;
  const result = await describeObject(objectName);
  res.json(result);
});

app.post("/select", async (req, res) => {
  const { objectName } = req.body;
  const result = await select(objectName);
  res.json(result);
});

app.post("/find", async (req, res) => {
  const { objectName, dataId } = req.body;
  const result = await selectById(objectName, dataId);
  console.log(objectName, dataId);
  res.json(result);
});

app.post("/update", async (req, res) => {
  const { objectName, id, LastName, Name } = req.body;
  const result = await updateObject(objectName, id, LastName, Name );//fields
  res.json(result);
});

app.post("/create", async (req, res) => {
  const { objectName, fields } = req.body;
  const result = await createObject(objectName, fields);
  res.json(result);
});

app.post("/delete", async (req, res) => {
  const { objectName, id } = req.body;
  const result = await deleteObject(objectName, id);
  res.json(result);
});
///////
app.post("/deletes", async (req, res) => {
  const { objectName, id } = req.body;
  const result = await deletes(objectName, id);
  res.json(result);
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
