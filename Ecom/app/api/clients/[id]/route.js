import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    const clientId = await req.url.split('clients/')[1];
    const sql = "SELECT * FROM clients WHERE id =?";
    console.log(clientId)
    try {
      const results = await new Promise((resolve, reject) => {
        db.query(sql,[clientId], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
      return NextResponse.json(
        { message: "client ok", results },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { message: "Erreur", error: err },
        { status: 500 }
      );
    }
  };