const li = document.querySelectorAll('.down-nav .container ul li');
const card = document.querySelectorAll('.gallery .container .card');
const img = document.querySelectorAll('.card img');
const lmore = document.querySelector('.lmore');
const gal = document.querySelector('.gallery .container');
let loaded;
window.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.json',true);
    xhr.onreadystatechange = () =>{
        if(xhr.readyState == 4 && xhr.status == "200"){
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
}
li.forEach((e)=>{
    e.addEventListener('click',()=>{
        updateUI(e.innerHTML);
    });    

});
const updateUI = (string)=>{
    console.log(string);
    const {allProducts, nature} = data;
    lmore.style = "display: block";
    loaded.innerHTML = "";
    switch(string){
        case 'All Products':
        img.forEach((e,i)=>{
            e.src = allProducts[i];
            console.log(allProducts[i]);
        });
        break;
        case 'Nature':
        img.forEach((e,i)=>{
            e.src = nature[i];
            console.log(nature[i]);
        });
       break;
       default:
    }
   
   console.log(string);
};
lmore.addEventListener('click',()=>{
    loaded = document.querySelector('.gallery  .loaded');
   lmore.style = "display: none";
   card.forEach((e,i)=>{
       const newCard = card[i].cloneNode();
       const newImg = img[i].cloneNode();
       console.log(newCard.appendChild(newImg));
      loaded.appendChild(newCard);
      newCard.appendChild(newImg);
   });
});