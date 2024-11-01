import React from 'react';

// Menü öğesi tipini tanımlayın
interface MenuItem {
    name: string;
    url: string;
}

// MenuItems bileşeni
const MenuItems: React.FC<{ mn: MenuItem }> = ({ mn }) => {
    return (
        <a href={mn.url} className=' hover:underline'>
            {mn.name}
        </a>
    );
};

export default MenuItems;
