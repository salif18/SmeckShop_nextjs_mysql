import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config();

export const POST = async (req) => {
  try {
    const { resetToken, password } = await req.json();
    console.log(resetToken,password)
    const selectSQL = "SELECT * FROM clients WHERE id =?";
    const updateSQL =
      "UPDATE clients SET password =?, resetToken = NULL WHERE id =?";

    jwt.verify(resetToken, process.env.KEY_TOKEN, async (err, decoded) => {
      if (err) {
        return NextResponse.json({ message: "Token expiré" }, { status: 401 });
      } else {
        const userId = decoded.userId;
        const user = await new Promise((resolve, reject) => {
          db.query(selectSQL, [userId], (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result[0]);
            }
          });
        });

        if (!user) {
          return NextResponse.json(
            { message: "Cet utilisateur n'existe pas" },
            { status: 404 }
          );
        } else {
          const passwordHash = await bcrypt.hash(password, 10);
          user.password = passwordHash;
          await new Promise((resolve, reject) => {
            db.query(updateSQL, [user.password, user.id], (err, result) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            });
          });
        }
      }
    }); 
    return NextResponse.json(
            { message: "Votre mot de passe a été réinitialisé avec succès!!" },
            { status: 200 }
          );
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};
