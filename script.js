const inpt = document.querySelector('.jj')
const btn = document.querySelector('.btn')




btn.addEventListener('click', function(){
    if(inpt.value == 'Oybek'|| inpt.value == 'oybek'){
        myFunctionTrue()
    }else {
        // alert('xato kiritingiz ' + inpt.value)
        myFunctionFalse()
        // location.reload()

    }
})

function myFunctionTrue() {
    const h2 = document.querySelector("body");
    let html = `
    <div class="tag">
    <a href="https://sardor336.github.io/Avatar-cinema/" class="dot">Kirishngiz mumkun (ustiga bosing)</a>
    </div>
    
    `;
    h2.insertAdjacentHTML("afterend", html);
  }
function myFunctionFalse() {
    const h2 = document.querySelector("body");
    let html = `
    <div class="tag">
    <a href=""class="dag">password notogri ${inpt.value} </a>
    </div>
    
    `;
    h2.insertAdjacentHTML("afterend", html);
  }

