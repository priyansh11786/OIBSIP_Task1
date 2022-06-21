let output = document.getElementById('output-screen');
buttons = document.querySelectorAll('button')
let outputValue = '';

for(item of buttons){
    item.addEventListener('click' , (e) => {
        buttonText = e.target.innerText;
        console.log('clicked button', buttonText)
        if(buttonText == '='){
            output.value = eval(outputValue)
            console.log(eval(outputValue));
        }
        else if(buttonText == 'X'){
            buttonText = '*'
            outputValue += buttonText
            console.log(outputValue);
            output.value = outputValue;
        }
        else if(buttonText == 'C'){
            outputValue = " ";
            output.value = outputValue;
        }
        else{
            outputValue += buttonText
            console.log(outputValue);
            output.value = outputValue;   
        }
    })  
}