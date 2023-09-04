import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
interface MenuItem {
    label: string;
    value: string;
    path: string;
    icon: string;
    isSelected: boolean;
}

const MenuBurger: FunctionComponent = () => {

    const isSelectedMenu = (path: string) => {
        return window.location.href.endsWith(path) ? true : false;
    }

    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        { label: 'Accueil', value: 'Accueil', path: '/', icon: 'home', isSelected: isSelectedMenu('/') },
        { label: 'Experiences', value: 'Experiences', path: '/knowledges', icon: 'dataset', isSelected: isSelectedMenu('/knowledges')},
        { label: 'Portfolio', value: 'Portfolio', path: '/portfolio', icon: 'folder', isSelected: isSelectedMenu('/portfolio')},
        { label: 'Contact', value: 'Contact', path: '/contact', icon: 'contacts', isSelected: isSelectedMenu('/contact')}
    ]);

    const handleItemClick = (value: string) => {
        const updatedItems = menuItems.map(item => ({...item,
        isSelected: item.value === value
     }));
     setMenuItems(updatedItems);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <div className='menu-burger'>
            <div className= {`menu-burger-closed ${isMenuOpen ? 'hidden' : ''}`} onClick={openMenu}>
                <i className="material-icons">menu</i>
            </div>
            <div className={`menu-burger-open ${isMenuOpen ? '' : 'hidden'}`}>
                <div className='close-icon' onClick={closeMenu}>
                    <i className="material-icons ">close</i>
                </div>

                {menuItems.map(item => (
                    <div key={item.value} className={`menu-item ${item.isSelected ? 'selected' : ''}`} onClick={() => handleItemClick(item.value)}>
                        <Link to={item.path}>{item.label}</Link>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default MenuBurger;