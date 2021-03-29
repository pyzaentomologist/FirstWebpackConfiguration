import photo from '../assets/P1170487.jpg';
export default (tag) => {
    const img = document.createElement('img');
    img.src = photo;
    document.querySelector(tag).appendChild(img);
}