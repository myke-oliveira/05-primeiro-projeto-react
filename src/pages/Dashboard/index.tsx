import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GithubExplorer"/>
      <Title>Explore repositorios no Github.</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/29512437?s=460&u=dc8ef0d6f9268a74b9a81eaa51ad65538d61bf54&v=4"
            alt="Myke Oliveira"
          />
          <div>
            <strong>gostack-mobile</strong>
            <p>Aplicação desenvolvida GoStack</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/29512437?s=460&u=dc8ef0d6f9268a74b9a81eaa51ad65538d61bf54&v=4"
            alt="Myke Oliveira"
          />
          <div>
            <strong>gostack-mobile</strong>
            <p>Aplicação desenvolvida GoStack</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/29512437?s=460&u=dc8ef0d6f9268a74b9a81eaa51ad65538d61bf54&v=4"
            alt="Myke Oliveira"
          />
          <div>
            <strong>gostack-mobile</strong>
            <p>Aplicação desenvolvida GoStack</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
