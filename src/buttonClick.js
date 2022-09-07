import {React, useState} from "react";


export const ButtonClick = () => {
  const [ativo, setAtivo] = useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return <button onClick={handleClick}>{ativo ? "Sim" : "Não"}</button>
}