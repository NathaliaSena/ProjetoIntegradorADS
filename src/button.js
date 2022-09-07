import React from "react";

export const Button = () => {
    const handleClick = () => {
        alert("Compra efetuada com sucesso!!")
    }
    return <button className="button" onClick={handleClick}>Clique Aqui</button>
}