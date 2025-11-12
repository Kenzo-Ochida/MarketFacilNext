"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  const router = useRouter();

  const validarEmail = (valor) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  };

  const handleEmailChange = (e) => {
    const valor = e.target.value;
    setEmail(valor);
    if (validarEmail(valor) || valor === "") {
      setErroEmail("");
    } else {
      setErroEmail("Por favor, insira um e-mail válido.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (erroEmail) {
      alert("Corrija o e-mail antes de continuar.");
      return;
    }

    router.push("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Cadastro</h1>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={styles.input}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        style={{
          ...styles.input,
          borderColor: erroEmail ? "red" : "#ccc",
        }}
      />
      {erroEmail && <p style={styles.erro}>{erroEmail}</p>}

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        style={styles.input}
      />

      <button
        onClick={handleSubmit}
        style={{
          ...styles.botao,
          backgroundColor: erroEmail ? "gray" : "#0070f3",
        }}
      >
        Entrar
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
  },
  titulo: {
    marginBottom: "20px",
  },
  input: {
    width: "250px",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  erro: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
  botao: {
    backgroundColor: "#0070f3",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center",
    marginTop: "10px",
    border: "none",
    cursor: "pointer",
  },
};
