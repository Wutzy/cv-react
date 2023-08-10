
import React from "react";

interface CarteProps {
    prenom: string;
    nom: string;
    titre: string;
    age: number;
    adresse: string;
    telephone: string;
    email: string;
}

const Carte: React.FunctionComponent<CarteProps> = ({ prenom, nom, titre, adresse, telephone, email }) => {
    return (
        <div className="carte">
            <h2>{prenom} {nom}</h2>
            <p>{titre}</p>
            <p>{adresse}</p>
            <p>Tèl: {telephone}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default Carte;