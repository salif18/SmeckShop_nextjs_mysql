import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import jwt from "jsonwebtoken";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config();

export const POST = async (req, next) => {
  try {
    const { prenom, nom, email, numero, password } = await req.json();

    const selectSQL = "SELECT * FROM clients WHERE email = ? OR numero = ?";
    const insertSQL = "INSERT INTO clients SET ? ";

    const resultSelect = await new Promise((resolve, reject)=>{
      db.query(selectSQL, [email, numero], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      })
    }) 

    const user = resultSelect[0];

    if (user) {
      return NextResponse.json(
        { message: "Ce compte existe déjà" },
        { status: 400 }
      );
    } else {
      const hash = await bcrypt.hash(password, 10);
      const clients = {id: uuidv4(), prenom, nom, email, numero, password: hash };

      const resultInsert = await new Promise((resolve,reject) =>{
        db.query(insertSQL, [clients], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      })
    });
      const userId = resultInsert.insertId;

      const token = jwt.sign({ userId }, process.env.KEY_TOKEN, {
        expiresIn: "24h",
      });

      return NextResponse.json({ userId, token }, { status: 201 });
    }
  } catch (err) {
    console.error("Erreur lors de l'inscription :", err);
    return NextResponse.json(
      {
        message:
          "Inscription non prise en charge. Une erreur est survenue lors de votre inscription.",
      },
      { status: 500 }
    );
  }
};

