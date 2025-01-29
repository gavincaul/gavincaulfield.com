import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AccoladesPage.css";
import accoladesData from "../data/pages.json";
import NavBar from "../components/NavBar.tsx";

function AccoladeCard({ title, details }) {
  return (
    <div className="accoladeCard">
      <h3>{title}</h3>
      {typeof details === "object" ? (
        <ul>
          {Object.entries(details).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      ) : (
        <p>{details}</p>
      )}
    </div>
  );
}

export default function AccoladesPage() {
  const navigate = useNavigate();
  const [accolades, setAccolades] = useState({});

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  useEffect(() => {
    const accolades = accoladesData.accolades;
    if (accolades) {
      setAccolades(accolades);
    } else {
      navigate("/experience/accolades");
    }
  }, [navigate]);

  return (
    <div className="accoladesBackground">
      <NavBar />
      <div className="accoladesContainer">
        {Object.entries(accolades).map(([key, details]) => (
          <AccoladeCard key={key} title={key} details={details} />
        ))}
      </div>
    </div>
  );
}
