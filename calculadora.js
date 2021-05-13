function calculadora(){
    var num=Number(prompt("Digite um numero "))
    var operador=Number(prompt("1-Somar \n 2-subtrair \n 3-Multiplicar \n 4-Dividir"))
    var num2=Number(prompt("Digite um numero "))
    switch(operador){
        case 1:
            alert((num)+"+"+(num2)+"= "+(num+num2))
            break;
        case 2:
            alert((num)+"-"+(num2)+"= "+(num-num2))
            break;
        case 3:
            alert((num)+"*"+(num2)+"= "+(num*num2))
            break;
        case 4:
            if(num!=0 || num2!=0){
            alert(num+"/"+num2+"= "+(num/num2))
            }
            else{
                console.log("Seu resultado e "+0)
        }
            break;
        default:alert("opcão invalida ")
                calculadora()
                break;
        

    }
    function reset(){

    var reiniciar=Number(prompt("Calcular novamente? \n 1-Para reiniciar \n 2- para sair "))
    switch(reiniciar){
        case 1:
            calculadora()
            break;
        case 2:
            alert("Ate mais...")
            break;   
        default: 
            alert("Opção Invalida")
            reset()
                
    }
}
    
}
calculadora()