"use client";
import Notfound from "@/app/not-found";
import Tablebody from "@/components/Tablebody";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Articles = () => {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);
  const [initial, setInitial] = useState(0);
  const [valueSlice, setValueSlice] = useState(10);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const res = await axios.get("/api/products");
        if (res) {
          const { results } = res.data;
          setArticles(results);
        } else {
          Notfound();
        }
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  const resultSearch = articles.filter(
    (item) =>
      item.nom.toLowerCase().includes(searchText.toLowerCase()) ||
      item.stocks === Number(searchText)
  );

  const deleteBtn = (id) => {
    axios
      .delete("http://localhost:4000/products/" + id)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  const handleview1 = () => {
    setInitial(0);
    setValueSlice(10);
    setStep(1);
  };
  const handleview2 = () => {
    setInitial(10);
    setValueSlice(20);
    setStep(2);
  };
  const handleview3 = () => {
    setInitial(20);
    setValueSlice(30);
    setStep(3);
  };
  const handleview4 = () => {
    setInitial(30);
    setValueSlice(40);
    setStep(4);
  };
  const handleview5 = () => {
    setInitial(40);
    setValueSlice(50);
    setStep(5);
  };
  const handleview6 = () => {
    setInitial(50);
    setValueSlice(60);
    setStep(6);
  };
  const handleview7 = () => {
    setInitial(60);
    setValueSlice(70);
    setStep(7);
  };
  const handleview8 = () => {
    setInitial(70);
    setValueSlice(80);
    setStep(8);
  };
  const handleview9 = () => {
    setInitial(80);
    setValueSlice(90);
    setStep(9);
  };
  const handleview10 = () => {
    setInitial(90);
    setValueSlice(100);
    setStep(10);
  };

  return (
    <main>
      <section className="header">
        <h2>Nos articles</h2>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Recherche rapide...."
        />
      </section>

      <table className="table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Nom</th>
            <th>Categories</th>
            <th>Type</th>
            <th>Prix</th>
            <th>Stocks</th>
            <th>Actions</th>
          </tr>
        </thead>
        {resultSearch.slice(initial, valueSlice).map((article) => (
          <Tablebody
            article={article}
            key={article.id}
            deleteBtn={deleteBtn}
          />
        ))}
        <tfoot></tfoot>
      </table>
      <section className="nextprevious">
        <button
          className="btn"
          style={{
            background: step === 1 && "teal",
            color: step === 1 && "#fff",
          }}
          onClick={handleview1}
        >
          1
        </button>
        <button
          className="btn"
          style={{
            background: step === 2 && "teal",
            color: step === 2 && "#fff",
          }}
          onClick={handleview2}
        >
          2
        </button>
        <button
          className="btn"
          style={{
            background: step === 3 && "teal",
            color: step === 3 && "#fff",
          }}
          onClick={handleview3}
        >
          3
        </button>
        <button
          className="btn"
          style={{
            background: step === 4 && "teal",
            color: step === 4 && "#fff",
          }}
          onClick={handleview4}
        >
          4
        </button>
        <button
          className="btn"
          style={{
            background: step === 5 && "teal",
            color: step === 5 && "#fff",
          }}
          onClick={handleview5}
        >
          5
        </button>
        <button
          className="btn"
          style={{
            background: step === 6 && "teal",
            color: step === 6 && "#fff",
          }}
          onClick={handleview6}
        >
          6
        </button>
        <button
          className="btn"
          style={{
            background: step === 7 && "teal",
            color: step === 7 && "#fff",
          }}
          onClick={handleview7}
        >
          7
        </button>
        <button
          className="btn"
          style={{
            background: step === 8 && "teal",
            color: step === 8 && "#fff",
          }}
          onClick={handleview8}
        >
          8
        </button>
        <button
          className="btn"
          style={{
            background: step === 9 && "teal",
            color: step === 9 && "#fff",
          }}
          onClick={handleview9}
        >
          9
        </button>
        <button
          className="btn"
          style={{
            background: step === 10 && "teal",
            color: step === 10 && "#fff",
          }}
          onClick={handleview10}
        >
          10
        </button>
      </section>
    </main>
  );
};

export default Articles;
