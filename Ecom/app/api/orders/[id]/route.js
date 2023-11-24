import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  
  //recuperer id de la commande
    const id = await req.url.split('orders/')[1];
    
    try {
      //recuperer la commande par son id
      const [resultSelect] = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM commandes WHERE id =?",[id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });

      //extraire orderId dans la commande et recuperer la ligne de commsnde
      const orderId = id
      const LigneCommande = await new Promise((resolve, reject) => {
        db.query(
          "SELECT * FROM lignecommande WHERE orderId =?",[orderId],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });

      const productsCommande = LigneCommande.map(async(item)=>{
       return await new Promise((resolve, reject) => {
        db.query(
          "SELECT * FROM articles WHERE id =?",[item.articleId],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
    })
      return NextResponse.json(
        { message: "articles valables",
          orders:resultSelect , 
          productBuys:productsCommande
        },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { message: "Erreur", error: err },
        { status: 500 }
      );
    }
  };