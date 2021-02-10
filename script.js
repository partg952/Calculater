var input = document.getElementById('result')
var buttontext=''

var buttons = document.querySelectorAll('button')

for(items of buttons){
items.addEventListener('click' , (e)=>{
buttontext = e.target.innerText
    console.log(e.target.innerText)
    if(buttontext!='='){
        input.value += e.target.innerText
    }
    
    switch(e.target.innerText){
        case '=':
          var res = eval(input.value)
            input.value = res
            break;
        case 'C':
            input.value = ''
            break    

    }

})
}