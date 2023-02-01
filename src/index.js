import loadPage from './page-load';
import loadMenu from './menu-load';
import loadContactPage from './contact-load';

const d = document;
const body = d.querySelector('body');
///create navigation tabs
const tabDiv = d.createElement('div');
const home = d.createElement('button');
const menu = d.createElement('button');
const contact = d.createElement('button');
home.innerHTML = 'Home';
menu.innerHTML = 'Menu';
contact.innerHTML = 'Contact';
tabDiv.appendChild(home);
tabDiv.appendChild(menu);
tabDiv.appendChild(contact);
body.appendChild(tabDiv);

loadPage();

home.addEventListener("click", () => {
  const oldContent = d.getElementById("content");
  console.log(oldContent.firstChild);
  while (oldContent.firstChild) {
    console.log('here')
    oldContent.removeChild(oldContent.lastChild);
  }
  loadPage();
} );

menu.addEventListener("click", () => {
    const oldContent = d.getElementById("content");
  console.log(oldContent.firstChild);
  while (oldContent.firstChild) {
    console.log('here')
    oldContent.removeChild(oldContent.lastChild);
  }
  loadMenu().menu1();
});

contact.addEventListener("click", () => {
    const oldContent = d.getElementById("content");
  console.log(oldContent.firstChild);
  while (oldContent.firstChild) {
    console.log('here')
    oldContent.removeChild(oldContent.lastChild);
  }
  loadContactPage().contacts();
}); 

