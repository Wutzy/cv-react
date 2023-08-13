import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navigation-bar.css';

interface ItemMenuProps {
    path: string;
    icon: string;
    name: string;
    borderColor?: string
}


const ItemMenu: FunctionComponent<ItemMenuProps> = ({ path, icon, name, borderColor = 'lime' }) => {
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('black');
    }

    return (
        <div>
            <li className='item-menu' style={{ borderColor: color}} onMouseEnter={showBorder} onMouseLeave={hideBorder}><i className='material-icons col s1'>{icon}</i><Link to={path} className='col s11 center'>{name}</Link></li>
        </div>
    );
};

export default ItemMenu;