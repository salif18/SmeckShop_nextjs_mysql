import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const id = await req.url.split('articles_buys/')[1];
      const results = await new Promise((resolve, reject) => {
        db.query(
          "SELECT * FROM articles_buys WHERE orderId =?",[id],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
  
      return NextResponse.json(
        { message: "Commandes disponibles", results },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { message: "Erreur", error: err },
        { status: 500 }
      );
    }
  };