import { FunctionComponent } from 'react';
import './navigation-bar.css';
import ItemMenu from './Item-menu';

const NavBar: FunctionComponent = () => {

    return (
        <div className='navbar col s5 m4'>
            <div className='profil-picture'>
                <img src="https://etudestech.com/wp-content/uploads/2023/02/les-10-plus-grands-hackers-de-lhistoire-1536x1024.jpeg" alt="hacker" className='picture-profile' />
            </div>
            <ul className='menu row'>
                <ItemMenu path="/" icon="home" name="Accueil" />
                <ItemMenu path="/knowledges" icon="folder" name="Experiences" />
                <ItemMenu path="/portfolio" icon="folder" name="Portfolio" />
                <ItemMenu path="/contact" icon="contacts" name="Contact" />
            </ul>
        </div>
    );
};

export default NavBar;