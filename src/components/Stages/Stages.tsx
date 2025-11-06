import React from "react";
import s from "./Stages.module.css";

const Stages = () => {
  return (
    <div>
      <h3>Етапи співпраці</h3>
      <h2>
        7 потоків, через які ми проводимо кожен проєкт — від першої розмови до
        запуску
      </h2>
      <ul className={s.list}>
        {[...Array(7)].map((_, i) => (
          <li key={i} className={s.item}>
            <div className={s.element}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stages;
