import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Menu = () => {
    const items = [
        {
            name: '应急能力检测',
            link: '/emergency',
        },
        // {
        //     name: '偿债能力检测',
        //     link: '/solvency',
        // },
        {
            name: '储蓄能力检测',
            link: '/saving',
        },
        {
            name: '资产生息能力检测',
            link: '/interest',
        },
        {
            name: '我的体检报告',
            link: '/report',
        },
    ];

    return (
        <div className="Menu">
            {items.map((item, index) => (
                <li key={index} data-testid="item">
                    <Link to={item.link}>{item.name}</Link>
                </li>
            ))}
        </div>
    );
};

export default Menu;
