// Another JS Code //

let string="";
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',function(e){
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('.screen').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string=""
            document.querySelector('.screen').value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,-1);
            document.querySelector('.screen').value=string;
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('.screen').value=string;
        }
    })
})

// https://www.youtube.com/watch?v=TXCj39dGLlY

// -*-**-**-*-*-*-*-*-*-*-------------*-*-*--*-*---------*--*-*-

/*(function () {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  let del = document.querySelector('.btn-del');
  
  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });
  equal.addEventListener('click', function (e) {

    if(screen.value === '') {
      screen.value = "Please Enter";
    } 
    else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })
  clear.addEventListener('click', function (e) {
    screen.value = "";
  })
  del.addEventListener('click', function (e) {
    screen.value = screen.value.slice(0,-1);
  })
})();

*/
// https://www.youtube.com/watch?v=HQCLzqhiT2w&list=PL9bD98LkBR7P16BndaNtP4x6Wf5Ib85Hm&index=2

