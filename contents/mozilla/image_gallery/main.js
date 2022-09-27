const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = ['eye', 'cloud', 'flower', 'egyptian picture', 'butterfly'];

/* Looping through images */
for (i = 0; i < imgs.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imgs[i]}`);
  newImage.setAttribute('alt', `${alts[i]}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', () => {
    const imgPath = newImage.getAttribute('src');
    displayedImage.setAttribute('src', imgPath);
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {

});
