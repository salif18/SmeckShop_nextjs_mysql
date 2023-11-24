import db from "@/lib/db";
import { NextResponse } from "next/server";

  export const GET = async (req, res) => {
    const sql = "SELECT * FROM clients ORDER BY created_at DESC ";
    try {
      const results = await new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
      return NextResponse.json(
        { message: "client ok ", results },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { message: "Erreur", error: err },
        { status: 500 }
      );
    }
  };