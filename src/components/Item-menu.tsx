import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navigation-bar.css';

interface ItemMenuProps {
    path: string;
    icon: string;
    name: string;
    borderColor?: string;
    isSelected: boolean;
}


const ItemMenu: FunctionComponent<ItemMenuProps> = ({ path, icon, name, isSelected, borderColor = 'lime' }) => {
    const [color, setColor] = useState<string>();



    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('black');
    }

    const isSelectedItem = () => {
        return isSelected;
    }

    if (isSelectedItem()) {
       borderColor = 'red';
    }


    return (
        <div>
            <li className='item-menu' style={{ borderColor: color}} onMouseEnter={showBorder} onMouseLeave={hideBorder}><i className='material-icons col s1'>{icon}</i><Link to={path} className='col s11 center'>{name}</Link></li>
        </div>
    );
};

export default ItemMenu;