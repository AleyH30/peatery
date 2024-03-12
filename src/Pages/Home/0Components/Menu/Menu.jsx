import React, {useState} from "react";
import './Menu.css';

const Menu = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <div className="menu-container">
            <button className="menu-visibility-btn" type="button" onClick={() => setMenuVisible(!menuVisible)}>
                {menuVisible ? 'Hide Full Menu' : 'View Full Menu'}</button>
            {!menuVisible ? null :
            <div className="menu-items-container">
            <p className="menu-sect">Brunch</p>
                <div className="col-2">
                    <div className="menu-item">
                        <p>Pancakes & Sausage</p>
                        <p>$50</p>
                    </div>
                    <div className="menu-item">
                        <p>Bacon-Wrapped Zucchini</p>
                        <p>$35</p>
                    </div>
                    <div className="menu-item">
                        <p>Chicken & Waffles</p>
                        <p>$40</p>
                    </div>
                    <div className="menu-item">
                        <p>Brunch Elite Spread</p>
                        <p>$35</p>
                    </div>
                    <div className="menu-item">
                        <p>Avocado Toast</p>
                        <p>$15</p>
                    </div>
                    <div className="menu-item">
                        <p>Vegan Spread</p>
                        <p>$25</p>
                    </div>
                </div>
            <p className="menu-sect">Dinner</p>
                <div className="col-2">
                    <div className="menu-item">
                        <p>Filet Mignon Au Poivre</p>
                        <p>$50</p>
                    </div>
                    <div className="menu-item">
                        <p>Roasted Shishito Peppers</p>
                        <p>$20</p>
                    </div>
                    <div className="menu-item">
                        <p>Oscar Style</p>
                        <p>$35</p>
                    </div>
                    <div className="menu-item">
                        <p>Pan Roasted Salmon</p>
                        <p>$40</p>
                    </div>
                    <div className="menu-item">
                        <p>Stuffed Bread</p>
                        <p>$20</p>
                    </div>
                    <div className="menu-item">
                        <p>Steak & Potatoes</p>
                        <p>$30</p>
                    </div>
                    <div className="menu-item">
                        <p>Surf & Turf</p>
                        <p>$35</p>
                    </div>
                    <div className="menu-item">
                        <p>Avocado Toast</p>
                        <p>$15</p>
                    </div>
                    <div className="menu-item">
                        <p>Spaghetti & Meatballs</p>
                        <p>$35</p>
                    </div>
                    <div className="menu-item">
                        <p>Vegan Spread</p>
                        <p>$25</p>
                    </div>
                    <div className="menu-item">
                        <p>Alfredo Pasta</p>
                        <p>$30</p>
                    </div>
                    <div className="menu-item">
                        <p>Toasted Chicken Chips</p>
                        <p>$30</p>
                    </div>
                </div>
                
        </div>}
        </div>
    )
}

export default Menu