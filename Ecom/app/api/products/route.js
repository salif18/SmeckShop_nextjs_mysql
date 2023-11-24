import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const {
    nom,
    photo,
    details,
    categories,
    type,
    prix_vente,
    prix_achat,
    stocks,
  } = await req.json();
  const articles = {
    nom,
    photo,
    details,
    categories,
    type,
    prix_vente,
    prix_achat,
    stocks,
  };
  const sql = "INSERT INTO articles SET ?";
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(sql, [articles], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return NextResponse.json(
      { message: "article ajouté", results },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Erreur", error: err },
      { status: 500 }
    );
  }
};

export const GET = async (req, res) => {
  const sql = "SELECT * FROM articles ORDER BY timestamps DESC ";
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
      { message: "articles valables", results },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Erreur", error: err },
      { status: 500 }
    );
  }
};
