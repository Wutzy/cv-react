import { FunctionComponent } from 'react';
import Carte from '../components/Contact-card';

const Contact: FunctionComponent = () => {
    return (
        <div className='center'>
           <Carte 
            titre="Developpeur FRONT-END"
            nom="Matmati"
            prenom="Anis"
            telephone='0627322110'
            adresse="76, rue de la loubière"
            email="matmati.anis@gmail.com"
           />
        </div>
    );
};

export default Contact;