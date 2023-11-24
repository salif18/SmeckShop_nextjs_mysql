import React from "react";
import Articles from "./Articles";
import Navbaradmin from "@/app/layouts/navbaradmin";

const Page = async () => {
  return (
    <>
      <Navbaradmin />
      <main className="adminproducts">
        <Articles />
      </main>
    </>
  );
};

export default Page;
