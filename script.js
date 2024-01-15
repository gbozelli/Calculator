let a = null;
let b = null;
let op;

function add(a, b){
  return a+b;
}

function sub(a, b){
  return a-b;
}

function div(a, b){
  return a/b;
}

function mult(a, b){
  return a*b;
} 

function operate(a, b, op){
  if(op==='+'){
    return add(a,b);
  } if(op==='-'){
    return sub(a,b);
  } if(op==='/'){
    return div(a,b);
  } if(op==='*'){
    return mult(a,b);
  }
}

const number = document.querySelectorAll('.buttons > button');
for(let i=0; i<number.length-1;i++){
  number[i].addEventListener('click', () => {
    const display = document.querySelector('.display');
    if(i>=10 && i<=13){
      op = number[i].textContent;
      if(a!=null){
        b = parseInt(display.textContent.replace(`${a}${op}`,``));
        a = operate(a, b, op);
        b = 0;
      } else {
        a = parseInt(display.textContent);
      }
    }
    display.textContent =  display.textContent + number[i].textContent;
})}

const equal = document.getElementById('=');
equal.addEventListener('click', () => {
  const display = document.querySelector('.display');
  b = parseInt(display.textContent.replace(`${a}${op}`,``));
  a = operate(a, b, op);
  b = 0;
  display.textContent = a;
});

