import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

interface MenuItem {
    label: string;
    value: string;
    path: string;
    icon: string;
    isSelected: boolean;
}

const Menu: FunctionComponent = () => {

    const isSelectedMenu = (path: string) => {
        return window.location.href.endsWith(path) ? true : false; 
    }

    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        { label: 'Accueil', value: 'Accueil', path: '/', icon: 'home', isSelected: isSelectedMenu('/') },
        { label: 'Experiences', value: 'Experiences', path: '/knowledges', icon: 'dataset', isSelected: isSelectedMenu('/knowledges')},
        { label: 'Portfolio', value: 'Portfolio', path: '/Portfolio', icon: 'folder', isSelected: isSelectedMenu('/Portfolio')},
        { label: 'Contact', value: 'Contact', path: '/contact', icon: 'contacts', isSelected: isSelectedMenu('/contact')}
    ]);

    const handleItemClick = (value: string) => {
        const updatedItems = menuItems.map(item => ({...item,
        isSelected: item.value === value
     }));
     setMenuItems(updatedItems);
    };



    return (
        <div className='col s3 m3'>
            <div className='menu-burger'>
                <div className='menu-burger-open'>
                    {menuItems.map(item => (
                        <div key={item.value} className={`menu-item ${item.isSelected ? 'selected' : ''}`} onClick={() => handleItemClick(item.value)}>
                            <Link to={item.path}>{item.label}</Link>
                        </div>
                    ))}
                </div>
                <div className='menu-burger-closed'>
                    <i className="material-icons">menu</i>
                </div>
            </div>
            <div className='menu'>
                <div className='profil-picture'>
                    <img src="https://etudestech.com/wp-content/uploads/2023/02/les-10-plus-grands-hackers-de-lhistoire-1536x1024.jpeg" alt="hacker" className='picture-profile' />
                </div>
                {menuItems.map(item => (
                    <div key={item.value} className={`menu-item ${item.isSelected ? 'selected' : ''}`} onClick={() => handleItemClick(item.value)}>
                        <i className='material-icons'>{item.icon}</i><Link to={item.path}>{item.label}</Link>
                    </div>
                ))}        
            </div>

        </div>
    );
};

export default Menu;