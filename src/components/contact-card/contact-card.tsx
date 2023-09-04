
import { FunctionComponent } from "react";
import './contact-card.css'

interface Props {
    prenom: string;
    nom: string;
    titre: string;
    adresse: string;
    telephone: string;
    email: string;
}

const ContactCard: FunctionComponent<Props> = ({ prenom, nom, titre, adresse, telephone, email }) => {
    return (
        <div className="contact-card">
            <h4>{prenom} {nom}</h4>
            <p><i className="material-icons">location_on</i>{adresse}</p>
            <p><i className="material-icons">phone_in_talk</i>{telephone}</p>
            <p><i className="material-icons">mail</i>{email}</p>
        </div>
    )
}

export default ContactCard;