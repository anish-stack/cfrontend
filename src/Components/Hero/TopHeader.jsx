import './topHeader.css'
import { Link } from 'react-router-dom'

 const TopHeader = () => {

    const dropdown = [
        {
            id: 1,
            name: 'AGRICULTURE',
            ref: '/home',
            class : 'ri-tree-fill'
        },
        {
            id: 2,
            name: 'APPAREL AND FASHION ACCESSORIES',
            ref : '/home',
            class : 'ri-t-shirt-fill'
        },
        {
            id: 3,
            name: 'CONSTRUCTION & REAL ESTATE',
            ref : '/home',
            class : 'ri-building-4-fill'
        },
        {
            id: 4,
            name: 'ELECTRONIC & ELECTRICAL',
            ref : '/home',
            class :'ri-lightbulb-fill',
        },
        {
            id: 5,
            name: 'FOOD & BEVERAGES',
            ref : '/home',
            class : 'ri-restaurant-2-line'
        },
        {
            id: 6,
            name: 'HOME FURNISHING & SUPPLIES',
            ref : '/home',
            class : 'ri-home-3-fill'
        },
        {
            id: 7,
            name: 'INDUSTRIAL GOODS & CHEMICAL',
            ref : '/home',
            class : 'ri-building-3-fill'
        },
        {
            id: 8,
            name: 'SPORTS',
            ref : '/home',
            class : 'ri-basketball-line'
        },
        {
            id: 9,
            name: 'ALL PRODUCTS',
            ref : '/home',
            class : 'ri-gallery-view'
        }
    ];

    return (
        <div>
            <div className="top-header-section">
                {dropdown && dropdown.map((item,index)=>(
                    <ul key={index}>
                        <Link to={item.ref}><i className={item.class}></i>{item.name}</Link>
                    </ul>
                ))
                }
            </div>
        </div>
    )
} 

 

export default TopHeader