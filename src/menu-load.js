const loadMenu = () => {
    const d = document;
    const content = d.querySelector('#content');
    const createItem = (title, description, price) => {
        const item = d.createElement('div');
        const itemTitle = d.createElement('h2');
        itemTitle.innerHTML = title;
        const itemDescription = d.createElement('p');
        itemDescription.innerHTML = description;
        const itemPrice = d.createElement('h3');
        itemPrice.innerHTML = price;
        item.appendChild(itemTitle)
        item.appendChild(itemDescription)
        item.appendChild(itemPrice)
        content.appendChild(item);
    };
    const menu1 = () => {createItem('carrot', 'carroty description', '1$');}
    return { menu1 };
};
export default loadMenu;