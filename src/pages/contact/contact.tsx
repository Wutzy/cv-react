import { FunctionComponent } from 'react';
import ContactCard from '../../components/contact-card/contact-card';

const Contact: FunctionComponent = () => {
    return (
        <div className='row center'>
           <ContactCard
            phone='06 ** ** ** 10'
            address="Marseille"
            email="matmati.anis@gmail.com"
           />
        </div>
    );
};

export default Contact;