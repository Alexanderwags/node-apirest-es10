"use strict";

import { Router } from "express";
import { connect } from "../database";
import { ObjectID } from "mongodb";
const router = Router();

//Database connection

router.get("/", async (req, res) => {
  try {
    const db = await connect();
    const result = await db.collection("tasks").find({}).toArray();
    console.log(result);
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});
router.post("/", async (req, res) => {
  const db = await connect();
  const task = {
    title: req.body.title,
    description: req.body.description,
  };
  const result = await db.collection("tasks").insert(task);
  res.json(result.ops[0]);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db.collection("tasks").findOne({ _id: ObjectID(id) });
  res.json(result);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = db.collection("tasks").remove({ _id: ObjectID(id) });
  res.json({ messaje: `Task ${id} deleted`, result });
});
export default router;
