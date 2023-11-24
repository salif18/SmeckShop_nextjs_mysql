import Details from "@/components/Details";
import { notFound } from "next/navigation";
import React from "react";

const getProduct = async (id) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!res.ok) {
      notFound();
    } else {
      const { results } = await res.json();
      return results[0];
    }
  } catch (err) {
    console.error(err);
  }
};

const Page = async ({ params }) => {
  const article = await getProduct(params.id);

  return (
    <main className="singleprod">
      <Details article={article} />
    </main>
  );
};

export default Page;
