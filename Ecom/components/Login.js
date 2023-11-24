import { Store } from "@/context/store";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";


const Login = () => {
  const router  = useRouter()
  const { login, step, setStep } = useContext(Store);
  const [infosUser, setInfosUser] = useState({
    password: "",
    contacts: "",
  });
  const { contacts, password } = infosUser;
  //error
  const [errorForm, setErrorForm] = useState("");
  const [errorAuth, setErrorAuth] = useState("");

  //recuperation des valeurs des champsde formulaires
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfosUser({ ...infosUser, [name]: value });
  };

  //envoie de formulaire dans la base
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (contacts.length > 0 && password.length > 0) {
        const res = await axios.post(
          "http://localhost:3000/api/auth/login",
          infosUser
        );
        if (res) {
          const { userId, token } = res.data;
          login(userId, token);
          router.push('/')
        }
        setInfosUser({ password: "", contacts: "" });
      } else {
        setErrorForm("Veuillez bien remplir ce champs");
      }
    } catch (err) {
      console.error(err);
      setErrorAuth(err.message);
    }
  };
  //naviguer vers le component de creation compte
  const handleMoveSignup = () => {
    setStep(!step);
    localStorage.setItem("step", step);
  };

  setTimeout(() => {
    setErrorForm("");
  }, 3000);

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <label>
        <span>{contacts.length <= 0 && errorForm}</span>
        <input
          type="text"
          name="contacts"
          value={contacts}
          onChange={handleChange}
          placeholder="Numero:"
        />
        <span>{errorAuth && errorAuth}</span>
      </label>
      <label>
        <span>{password.length <= 0 && errorForm}</span>
        <input
          type="password"
          name="password"
          value={infosUser.password}
          onChange={handleChange}
          placeholder="Mot de passe:"
        />
        <span>{errorAuth && errorAuth}</span>
      </label>
      <Link href='/reinitialisation' className='link' >Mot de passe oublie ?</Link>
      <button className="btn-login" type="submit">
        Se connecter
      </button>
      <section className="ligne-ou">
        <section className="barre"></section>
        <h2>Ou</h2>
        <section className="barre"></section>
      </section>
      <button className="btn-signup" onClick={handleMoveSignup}>
        S'enregistrer
      </button>
    </form>
  );
};

export default Login;
