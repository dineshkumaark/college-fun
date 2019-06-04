const li = document.querySelectorAll('.down-nav .container ul li');
const card = document.querySelectorAll('.gallery .container .card');
const img = document.querySelectorAll('.card img');

const loadJSON = () =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.json',true);
    xhr.onreadystatechange = ()=>{
        if(this.readyState == 4 && this.status == "200"){
            console.log(this.responseText);
        }
    }
    xhr.send();
}
loadJSON();
const nature = ['https://picsum.photos/id/1015/200','https://picsum.photos/id/1011/200',
'https://picsum.photos/id/1008/200','https://picsum.photos/id/1018/200','https://picsum.photos/id/1037/200',
'https://picsum.photos/id/1039/200','https://picsum.photos/id/1043/200','https://picsum.photos/id/1058/200',
'https://picsum.photos/id/1072/200'];
li.forEach((e)=>{
    e.addEventListener('click',()=>{
        updateUI(e.innerHTML);
    });    
});
const updateUI = (string)=>{
    switch(string){
        case 'All Products':
        img.forEach((e,i)=>{
            e.src = allProducts[i];
            console.log(allProducts[i]);
        });
        break;
        case 'Nature':
        img.forEach((e)=>{
            e.src = "https://placeimg.com/200/200/Nature";
        });
       break;
       default:
    }
   
   console.log(string);
};