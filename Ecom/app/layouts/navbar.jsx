"use client"
import Link from "next/link";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useContext } from "react";
import { Store } from "@/context/store";

export default function Navbar() {
  const { panier,islogin, logout } = useContext(Store)
  return (
    <nav className="navbar">
      <section className="logo">
        <h2>
          <span className="primary-span">Smeck</span>
          <span className="secondary-span">Shop</span>
        </h2>
      </section>
      <ul className="navlink">
        <li>
          <Link className="lien" href="/">
            Acceuil
          </Link>
        </li>
        <li>
          <Link className="lien" href="/products">
            Produits
          </Link>
        </li>
        <li>
          <Link className="lien" href="/contacts">
            Contacts
          </Link>
        </li>
        <li>
          <Link className="lien" href="/about">
            A propos
          </Link>
        </li>
        <li>
        <Link className="lien" href="/admin">
           administrateur
        </Link>
      </li>
        <div className="group">
          {!islogin ? <Link className="linkconnect" href="/connexion">
            S'identifier
          </Link> :
          <button onClick={logout} className="btn-log">Se deconnecter</button>
        }
          <Link className="linkcart" href="/panier">
            <LocalMallIcon className="icon"/>
            {panier.length > 0 && <span>{panier.length}</span>}
          </Link>
        </div>
      </ul>
    </nav>
  );
}
