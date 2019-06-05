const li = document.querySelectorAll('.down-nav .container ul li');
const card = document.querySelectorAll('.gallery .container .card');
const img = document.querySelectorAll('.card img');
const lmore = document.querySelector('.lmore');
const gal = document.querySelector('.gallery .container');
let loaded = document.querySelector('.gallery  .loaded');
// Getting Data from Json
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
li.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        updateUI(e.innerHTML);
        li[i].classList.add('active');
        li.forEach((_,index)=>{
            (i !== index) ? li[index].classList.remove('active') : "";
        });
    });    

});
//updating UI
const updateUI = (string)=>{
    console.log(string);
    const {allProducts, seasons,photo} = data;
    lmore.style = "display: block";
    loaded.innerHTML = "";
    switch(string){
        case 'All Products':
        img.forEach((e,i)=>{
            e.src = allProducts[i];
            console.log(allProducts[i]);
        });
        break;
        case 'Seasons':
        img.forEach((e,i)=>{
            e.src = seasons[i];
            console.log(seasons[i]);
        });
        break;
        case 'Photo':
        img.forEach((e,i)=>{
            e.src = photo[i];
            console.log(photo[i]);
        });
       break;
       default:
    }
   
   console.log(string);
};
//Load More Button 
lmore.addEventListener('click',()=>{
   lmore.style = "display: none";
   card.forEach((e,i)=>{
       const newCard = card[i].cloneNode();
       const newImg = img[i].cloneNode();
       console.log(newCard.appendChild(newImg));
      loaded.appendChild(newCard);
      newCard.appendChild(newImg);
   });
});