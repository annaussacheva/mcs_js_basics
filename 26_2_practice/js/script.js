const divs = document.querySelectorAll('div');


let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

let max = 0;

const pixel = 800;

for(let i = 0; i<divs.length; i++) {

    if(max < crypto[i].price){
        max = crypto[i].price
    }

    divs[i].style.width = crypto[i].price / max * pixel + 'px';
}

console.log(crypto[0].price)


    /*divs[i].style.backgroundImage = 'linear-gradient('+(45+i*5)+'deg, lightblue, violet)'*/

