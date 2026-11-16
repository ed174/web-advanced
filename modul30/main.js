var age = 18;

var answer=document.getElementById('pergjigje')
 
if(age>=18){
    answer.innerHTML = 'ti ke drejt vote'
}
else{
    answer.innerHTML = 'ti ske drejt vote'

}



var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');


button.onclock = function()
{

    if (input.value > 10)
    {
        text.innerHTML = "input value is greater than10";
    }
    else if(input.value < 10)
    {
        text.innerHTML = "input value is less than 10";

    }
    else
    {
        text.innerHTML = "input value is equal to 10";

    }
    
}