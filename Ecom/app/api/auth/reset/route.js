import jwt from "jsonwebtoken";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import nodemailer from 'nodemailer';
dotenv.config();

export const POST = async (req) => {
  try {
    const { email, numero } = await req.json();
    const selectSQL = "SELECT * FROM clients WHERE email = ? OR numero = ?";
    const updateSQL = "UPDATE clients SET resetToken = ? WHERE id = ?";

    
    const user = await new Promise((resolve, reject) => {
      db.query(selectSQL, [email, numero], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0]);
        }
      });
    });

    if (!user) {
      return NextResponse.json(
        { message: "Ce compte n'existe pas " },
        { status: 404 }
      );
    } else {
      const resetToken = jwt.sign({ userId: user.id }, process.env.KEY_TOKEN, {
        expiresIn: "24h",
      });

      await new Promise((resolve, reject) => {
        db.query(updateSQL, [resetToken, user.id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });

      console.log(resetToken)
      
    //lien de confirmation
    const linkConfirm = `http://localhost:3000/confirmation/${resetToken}`
    // envoyer le token de renitialisation a user par son mail ou numero ou automatiquement vers le front
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: "465",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOption = {
      from: "SmeckShop",
      to: email,
      subject: "Code de reinitialisation de mot de passe",
      text: `Merci de cliquez sur ce lien pour réinitialiser votre mot de passe : ${linkConfirm}`,
    };
 
    transporter.sendMail(mailOption); 

      return NextResponse.json(
        {
          message:
            "Un code a été envoyé sur votre email pour la réinitialisation",
          resetToken,
        },
        { status: 200 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
