//add element 
//compteur ajout +1 

let plusBtn = document.getElementsByClassName('btn-plus');

console.log(plusBtn);

for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
    totalprice()
  });

}


//diminuer 

let minusBtn = document.getElementsByClassName('btn-moins');
for(let minus of minusBtn){

minus.addEventListener('click', function (){

if ( minus.nextElementSibling.innerText >0 ){
    minus.nextElementSibling.innerText--;
}
totalprice()
})

};


let deletebtn = document.querySelectorAll('.btn-delete');

for (let i=0 ; i < deletebtn.length ;i++){
    deletebtn[i].addEventListener('click', function(){
        deletebtn[i].parentElement.parentElement.remove();
        totalprice()

    })
 
}
let hearts=document.getElementsByClassName('fa-heart');
console.log(hearts,"hearts") 
for (let i of hearts) {
  i.addEventListener("click",function(){
    if(i.style.color==="grey"){
      i.style.color="red"
      
    }else{
      i.style.color="grey"
    }
  })
}
// totalprice
function totalprice(){
  var prixproduit = document.getElementsByClassName("prx")
  var quantity = document.getElementsByClassName("quantity")
  let some = 0 
  for(let i = 0; i < prixproduit.length;i++) {
    some += quantity[i].innerText *prixproduit[i].innerText
  }
  document.getElementById('prix-total').innerText = some
}
