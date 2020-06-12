import React, { useEffect, useState } from "react";
import { FiLink, FiHash, FiSearch } from 'react-icons/fi';

import api from "../../services/api";

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

  useEffect(() => {
      api.get('tools').then(response => {

      setTools(response.data);
      })
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
            <button>Adicionar ferramenta</button>
          </div>
        </div>
      </nav>
      <main>
        <ul className="group-card">
          {tools.map(tool => (
            <li key={tool._id}>
              <h1>{tool.title}</h1>
              <p>{tool.description}</p>
              <a href={tool.link}> <FiLink color="#43B1F7" /> {tool.title}</a>
              <p><FiHash />{tool.tags}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Dashboard;
