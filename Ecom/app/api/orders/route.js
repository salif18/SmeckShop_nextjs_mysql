import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { clientId, panier, total, ville, quartier, rue, porte, log } = await req.json();
    const commandes = { clientId, total, ville, quartier, rue, porte, log };

    // Insérer la commande
    const [insertOrderResult] = await new Promise((resolve, reject) => {
      db.query("INSERT INTO commandes SET ?", [commandes], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const orderId = insertOrderResult[0].insertId;
  
    // Insérer les lignes de commande pour les produits
    for (const article of panier) {
      const ligneCommande = {
        orderId: orderId,
        articleId: article.id,
        tailles: article.tailles,
        qty: article.qty,
        prix: article.prix,
      };
      await new Promise((resolve, reject) => {
        db.query(
          "INSERT INTO ligneCommande SET ?",
          [ligneCommande],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
    }

    return NextResponse.json(
      { message: "Commande envoyée", orderId },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Erreur", error: err },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM commandes ",
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
