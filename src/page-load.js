const loadPage = () => {
    const d = document;
    const content = d.querySelector('#content');
    //create headline
    const headline = d.createElement('h1');
    headline.innerHTML = "The Name of this Restaraunt";
    //create image
    const img = d.createElement('img');
    img.src = "./restaraunt.jpg";
    img.style = "width:500px;height:600px;";
    //create copy
    const copy = d.createElement('p');
    copy.innerHTML = "some ol bs some ol bs some ol bs";
    //append it all
    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(copy);
}

export default loadPage;