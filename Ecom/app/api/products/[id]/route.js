import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    const id = await req.url.split('products/')[1];
    
    const sql = "SELECT * FROM articles WHERE id =?";
    try {
      const results = await new Promise((resolve, reject) => {
        db.query(sql,[id], (err, result) => {
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

   //modifier le produit
   export const PUT = async (req, res) => {
    const id = await req.url.split('products/')[1];
    const { nom, photo, details, categories, type, prix_achat, prix_vente, stocks } = await req.json();

    const sql = `UPDATE articles 
                SET nom = ?, photo =?, details =?, categories = ?, type=?, prix_achat = ?, prix_vente = ?, stocks = ? 
                WHERE id = ?`;
    const newValue = [ nom, photo, details, categories, type, prix_achat, prix_vente, stocks, id ];
      
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(sql, newValue, (err, results) => {
        if (err) {
          console.error(err)
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    return NextResponse.json({message:'Produit a été modifié avec succès !!',results},{status:201});
  } catch (err) {
    return NextResponse.json({ message: err.message },{status:500});
  }
};
  

//supprimer le produit
export const DELETE = async (req, res) => {
  const id = await req.url.split('products/')[1];
  const sql = `DELETE FROM articles WHERE id = ?`;
    
try {
  const results = await new Promise((resolve, reject) => {
    db.query(sql,[id], (err, results) => {
      if (err) {
        console.error(err)
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
  return NextResponse.json({message:'Produit supprimer avec succès !!',results},{status:201});
} catch (err) {
  return NextResponse.json({ message: err.message },{status:500});
}
};