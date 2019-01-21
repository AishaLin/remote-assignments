/* ==========================================
  Assignment 4-1: Click to Change Text.
============================================= */
const headline = document.querySelector('.headline');
headline.addEventListener('click', () => {
  headline.textContent = "Have a Good Time!";
})

/* ==========================================
  Assignment 4-2: Click to Show/Close Menu.
============================================= */
const openNav = document.querySelector('.main-nav')
const menuIcon = document.querySelector('.menu')
const closeIcon = document.querySelector('.closebtn')

menuIcon.addEventListener('click', () =>{
  openNav.style.width = '100px';
})
closeIcon.addEventListener('click', () =>{
  openNav.style.width = '0px';
})

/* ==========================================
  Assignment 4-3: Click to Show More Content Boxes.
============================================= */
const mainFooter = document.querySelector('.mainFooter');
const hide = document.querySelector('.hide');
mainFooter.addEventListener('click', () => {
  hide.style.display = "flex";
})

/* ==========================================
  Assignment 1: Function and Array
============================================= */
function max(...theArgs){
  let compare = theArgs[0];
  for( let i = 0; i < theArgs.length; i += 1 ){
    if( compare < theArgs[i] ){
      compare = theArgs[i];
    }
  }
  return compare;
}

console.log(max(1, 2, 4, 5));
console.log(max(5, 2, 7, 1, 6));

/* ==========================================
  Assignment 2: Object
============================================= */
//way1
function calculate(args){ let result;
if(args.op==="+"){ result=args.n1+args.n2;
}else if(args.op==="-"){ result=args.n1-args.n2;
}else{
result="Not supported";
}
return result;
}
class args {
  constructor(op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
  }
};
const way1 = new args('-', 3, 4);
console.log(calculate(way1));

//way2
var op = '+',
    n1 = 3,
    n2 = 9;
var way2 = {op, n1, n2};
console.log(calculate(way2));

/* ==========================================
  Assignment 3: Function, Array, and Object
============================================= */
function avg(arr){
  let sumPrice = 0;
  let avgPrice = 0;
  for( var i = 0; i < arr.size; i += 1 ){
    sumPrice += arr.products[i].price;
  }
  avgPrice = sumPrice/arr.size;
  return avgPrice;
}
let avgList = {
  size:3,
  products:[
    {
    name:"Product 1",
    price:100 },
    {
    name:"Product 2",
    price:700 },
    {
    name:"Product 3",
    price:250 }
    ]
};

console.log(avg(avgList));
