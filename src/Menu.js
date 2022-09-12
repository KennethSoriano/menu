import React from 'react';

const Menu = ({id, title, price, img, desc}) => {
  return (
    <div className="section-center">
        {items.map((items) => {
            return (
                <section key={id}>
                    <img src={img} alt={title} />
                    <h2>{title}</h2>
                    <h2>{price}</h2>
                    <p>{desc}</p>
                </section>
            )
        })}
    </div>
  );
};

export default Menu;