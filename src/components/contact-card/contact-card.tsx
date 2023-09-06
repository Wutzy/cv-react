
import { FunctionComponent } from "react";
import './contact-card.css'

interface Props {
    firstName?: string;
    lastName?: string;
    title?: string;
    address?: string;
    phone?: string;
    email?: string;
}

const ContactCard: FunctionComponent<Props> = ({ firstName, lastName, title, address, phone, email }) => {
    return (
        <div className="contact-card">
            <h4>{firstName} {lastName}</h4>
            <p>{title}</p>
            <p><i className="material-icons">location_on</i>{address}</p>
            <p><i className="material-icons">phone_in_talk</i>{phone}</p>
            <p><i className="material-icons">mail</i>{email}</p>
        </div>
    )
}

export default ContactCard;