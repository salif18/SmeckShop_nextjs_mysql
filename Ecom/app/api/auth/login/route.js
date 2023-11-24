import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config();


export const POST = async (req, res) => {
  try {
    const { contacts, password } = await req.json();
    const selectSQL = "SELECT * FROM clients WHERE email = ? OR numero = ?";

    const resultSelect = await new Promise((resolve, reject) => {
      db.query(selectSQL, [contacts, contacts], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    const user = resultSelect[0];

    if (!user) {
      console.log("Utilisateur non trouvé");
      return NextResponse.json(
        { message: "Votre numéro est incorrect ou n'existe pas" },
        { status: 401 }
      );
    } else {
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return NextResponse.json(
          { message: "Votre mot de passe est incorrect" },
          { status: 401 }
        );
      } else {
        const userId = user.id;
        const token = jwt.sign({ userId }, process.env.KEY_TOKEN, {
          expiresIn: "24h",
        });
        return NextResponse.json({ userId, token }, { status: 200 });
      }
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur lors de la connexion de l'utilisateur", error },
      { status: 500 }
    );
  }
};

