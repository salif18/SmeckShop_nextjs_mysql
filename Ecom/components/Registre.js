import { Store } from "@/context/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const Registre = () => {
  const router = useRouter()
  const { login ,  setStep , step} = useContext(Store);

  const [infosUser, setInfosUser] = useState({
    prenom: "",
    nom: "",
    email: "",
    numero: "",
    password: "",
  });

  const { prenom, nom, email, numero, password } = infosUser;
  //error
  const [errorForm, setErrorForm] = useState("");

  //recuperation des valeurs des champsde formulaires
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfosUser({ ...infosUser, [name]: value });
  };

  //envoie de formulaire dans la base
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      prenom.length > 0 &&
      nom.length > 0 &&
      email.length > 0 &&
      numero.length > 0 &&
      password.length > 0
    ) {
      axios
        .post("http://localhost:3000/api/auth/signup", infosUser)
        .then((res) => {
          if (res) {
            const { userId, token } = res.data;
            login(userId, token);
            router.push('/')
          }
        })
        .catch((err) => console.error(err));
      setInfosUser({
        prenom: "",
        nom: "",
        email: "",
        numero: "",
        password: "",
      });
      setStep(null);
      localStorage.setItem('step',step)
    } else {
      setErrorForm("Veuillez bien remplir ce champs");
    }
  };

  //naviguer vers le component login
  const handleMoveLogin = () => {
    setStep(null);
    localStorage.setItem('step',step)
  };

  setTimeout(() => {
    setErrorForm("");
  }, 3000);

  return (
    <form className="form-registre" onSubmit={handleSubmit}>
      <label>
        <span>{prenom.length <= 0 && errorForm}</span>
        <input
          type="text"
          name="prenom"
          value={prenom}
          onChange={handleChange}
          placeholder="Prenom:"
        />
      </label>
      <label>
        <span>{nom.length <= 0 && errorForm}</span>
        <input
          type="text"
          name="nom"
          value={nom}
          onChange={handleChange}
          placeholder="Nom:"
        />
      </label>
      <label>
        <span>{email.length <= 0 && errorForm}</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email:"
        />
      </label>

      <label>
        <span>{numero.length <= 0 && errorForm}</span>
        <input
          type="number"
          name="numero"
          value={numero}
          onChange={handleChange}
          placeholder="Numero:"
        />
      </label>
      <label>
        <span>{password.length <= 0 && errorForm}</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Mot de passe:"
        />
      </label>
      <button className="btn-signup" type="submit">
        S'enregistrer
      </button>
      <section className="ligne-ou">
        <section className="barre"></section>
        <h2>Ou</h2>
        <section className="barre"></section>
      </section>
      <button className="btn-login" onClick={handleMoveLogin}>
        Se connecter
      </button>
    </form>
  );
};

export default Registre;
