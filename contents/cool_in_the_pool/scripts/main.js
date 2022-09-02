function imgCycler (mySrc) {
  if (mySrc === 'images/template.jpeg') {
    myImage.setAttribute('src','images/template-color-inverted.jpeg');
    myImage.setAttribute('title','a puppie NOT cool in the pool')
  };
  
  if (mySrc === 'images/template-color-inverted.jpeg') {
    myImage.setAttribute('src','images/template-upside-down.jpeg');
    myImage.setAttribute('title','a cool puppie?')
  };

  if (mySrc === 'images/template-upside-down.jpeg') {
    myImage.setAttribute('src','images/template.jpeg');
    myImage.setAttribute('title','puppie cool in the pool')
  };
}

const myImage = document.getElementById('banner');

// call arrow function on click
myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  imgCycler(mySrc);
}

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//   const myName = prompt('Please enter your name.');
//   if (!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', myName);
//     myHeading.textContent = `Are you cool in the pool, ${storedName}?`;
//   }
// }

// if (!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   const storedName = localStorage.getItem('name');
//   myHeading.textContent = `Are you cool in the pool, ${storedName}?`;
// }

// myButton.onclick = () => {
//   setUserName();
// }