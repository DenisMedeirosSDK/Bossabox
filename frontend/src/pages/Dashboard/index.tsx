import React, { useEffect, useState } from "react";
import { FiLink, FiHash } from "react-icons/fi";

import api from "../../services/api";
import addTool from '../../components/addTool';

// import Card from "../../components/card";
import "./styles.css";

interface ITool {
  _id: string;
  title: string;
  description: string;
  link: string;
  tags: string;
}

const Dashboard: React.FC = () => {
  const [tools, setTools] = useState<ITool[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal(): void {
    setModalIsOpen(true);
  }

  function closeModal(): void {
    setModalIsOpen(false);
  }

  useEffect(() => {
    api.get("tools").then((response) => {
      setTools(response.data);
    });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Very Useful Tools to Remember</h1>
      </header>

      <nav>
        <div className="group-nav">
          <div className="search">
            <input type="text" placeholder="Pesquise uma ferramenta" />
          </div>
          <div className="add-tool">
            <button onClick={openModal}>Adicionar ferramenta</button>
          </div>
        </div>
      </nav>

      <addTool />

      <main>
        <ul className="group-card">
          {tools.map((tool) => (
            <li key={tool._id}>
              <h1>{tool.title}</h1>
              <p>{tool.description}</p>
              <a href={tool.link}>
                {" "}
                <FiLink color="#43B1F7" /> {tool.title}
              </a>
              <p>
                <FiHash />
                {tool.tags}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Dashboard;
