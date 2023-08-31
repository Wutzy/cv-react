import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import ProfileImage from './randy.jpg';


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
        { label: 'Portfolio', value: 'Portfolio', path: '/portfolio', icon: 'folder', isSelected: isSelectedMenu('/portfolio')},
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
                    <img src={ProfileImage} alt="" className='picture-profile' />
                </div>
                {menuItems.map(item => (
                    <div key={item.value} className={`menu-item grow ${item.isSelected ? 'selected' : ''}`} onClick={() => handleItemClick(item.value)}>
                        <i className='material-icons'>{item.icon}</i><Link to={item.path}>{item.label}</Link>
                    </div>
                ))} 
                <div className='social-media'>
                    <div>
                        <Link to={`https://github.com/Wutzy`} target="_blank">
                            <svg width="50px" height="50px" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffa31a"/></svg>    
                        </Link>
                    </div>
                    <div>
                        <Link to={`https://www.linkedin.com/in/anis-matmati-8b192986/`} target="_blank">
                            <svg width="50px" height="50px" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#ffa31a"/>
                            </svg>    
                        </Link>
                    </div>
                </div>       
            </div>
        </div>
    );
};

export default Menu;