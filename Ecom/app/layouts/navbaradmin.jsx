import Link from "next/link";
import React from "react";

const Navbaradmin = () => {
  return (
    <nav className="navbaradmin">
      <ul>
        <li>
          <Link className="link" href="/admin/add">
            Ajouter des articles
          </Link>
        </li>
        <li>
          <Link className="link" href="/admin/products">
            Les articles
          </Link>
        </li>
        <li>
          <Link className="link" href="/admin/categories">
            categories
          </Link>
          </li>
        <li>
        <Link className="link" href="/admin/clients">
          Les clients
        </Link>
      </li>
        <li>
          <Link className="link" href="/admin/orders">
            Commandes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbaradmin;
