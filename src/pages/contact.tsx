import { FunctionComponent } from 'react';
import ContactCard from '../components/contact-card/contact-card';

const Contact: FunctionComponent = () => {
    return (
        <div className='row center'>
           <ContactCard
            titre="Developpeur FRONT-END"
            nom="Matmati"
            prenom="Anis"
            telephone='06 ** ** ** 10'
            adresse="Marseille"
            email="matmati.anis@gmail.com"
           />
        </div>
    );
};

export default Contact;