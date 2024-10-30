
let incrementar=document. querySelector('.incrementar');
let disminuir=document.querySelector('.disminuir');
let reset=document.querySelector(' .reset');
let text=document.querySelector('.text');
let contador=0;

incrementar.addEventListener('click',()=>{
contador = contador + 2; 
text. textContent=contador;});


disminuir.addEventListener( 'click', ()=>{
contador = contador - 2;
text.textContent = contador;});

reset.addEventListener('click', () =>{
contador=0; 
text.textContent = contador;
})