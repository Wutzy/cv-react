import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

interface MenuItem {
    label: string;
    value: string;
    path: string;
    isSelected: boolean;
}

const Menu: FunctionComponent = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        { label: 'Accueil', value: 'Accueil', path: '/', isSelected: true },
        { label: 'Experiences', value: 'Experiences', path: '/knowledges', isSelected: false },
        { label: 'Portfolio', value: 'Portfolio', path: '/Portfolio', isSelected: false },
        { label: 'Contact', value: 'Contact', path: '/contact', isSelected: false}
    ]);

    const handleItemClick = (value: string) => {
        const updatedItems = menuItems.map(item => ({...item,
        isSelected: item.value === value
     }));
     setMenuItems(updatedItems);
    };

    return (
        <div className='menu col s3 m3'>
            <div className='profil-picture'>
                <img src="https://etudestech.com/wp-content/uploads/2023/02/les-10-plus-grands-hackers-de-lhistoire-1536x1024.jpeg" alt="hacker" className='picture-profile' />
            </div>
            {menuItems.map(item => (
                <div key={item.value} className={`menu-item ${item.isSelected ? 'selected' : ''}`} onClick={() => handleItemClick(item.value)}>
                    <Link to={item.path}>{item.label}</Link>
                </div>
            ))}
        </div>
    );
};

export default Menu;