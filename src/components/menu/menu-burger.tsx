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
        { label: 'Accueil', value: 'Accueil', path: '/cv-react/', icon: 'home', isSelected: isSelectedMenu('/cv-react/') },
        { label: 'Experiences', value: 'Experiences', path: '/knowledges', icon: 'dataset', isSelected: isSelectedMenu('/knowledges')},
        { label: 'Portfolio', value: 'Portfolio', path: '/portfolio', icon: 'folder', isSelected: isSelectedMenu('/portfolio')},
        { label: 'Contact', value: 'Contact', path: '/contact', icon: 'contacts', isSelected: isSelectedMenu('/contact')}
    ]);

    const handleItemClick = (value: string) => {
        const updatedItems = menuItems.map(item => ({...item,
        isSelected: item.value === value
     }));
     closeMenuBurger();
     setMenuItems(updatedItems);
    };

    const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false);

    const openMenuBurger = () => {
        setIsMenuBurgerOpen(true);
    }
    const closeMenuBurger = () => {
        setIsMenuBurgerOpen(false);
    }

    return (
        <div className='menu-burger'>
            <div className= {`menu-burger-closed ${isMenuBurgerOpen ? 'hidden' : ''}`} onClick={openMenuBurger}>
                <i className="material-icons">menu</i>
            </div>
            <div className={`menu-burger-open ${isMenuBurgerOpen ? '' : 'hidden'}`}>
                <div className='close-icon' onClick={closeMenuBurger}>
                    <i className="material-icons ">close</i>
                </div>

                {menuItems.map(item => (
                    <div key={item.value} className={`menu-item ${item.isSelected ? 'selected' : ''}`} onClick={() => handleItemClick(item.value)}>
                        <Link to={item.path}><i className='material-icons'>{item.icon}</i>{item.label}</Link>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default MenuBurger;