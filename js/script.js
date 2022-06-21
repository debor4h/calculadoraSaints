function calc(){
    // se colocar para converter aqui eu não consigo ver se o campo está vazio
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var operador = document.getElementById('op').value
    var res = document.getElementById('res')
    
    //convertendo
    var num1 = Number(n1)
    var num2 = Number(n2)

    if(n1.length == 0 || n2.length == 0 || operador == ' '){
            alert('[ERRO] Por favor, verifique se digitou os números e escolheu o operador.')
    }else{
        switch(operador){
            case '+':
                seletor = '+'
                calculo = (num1+num2)
                res.innerHTML = `O resultado entre ${n1} ${seletor} ${n2} é ${calculo}`
                break; 
            case '-':
                seletor = '-'
                calculo = (num1-num2)
                res.innerHTML = `O resultado entre ${n1} ${seletor} ${n2} é ${calculo}`
                break;
            case '*':
                seletor = '*'
                calculo = (num1*num2)
                res.innerHTML = `O resultado entre ${n1} ${seletor} ${n2} é ${calculo}`
                break;
            case '/':
                seletor = '/'
                calculo = (num1/num2)
                if(Number.isNaN(calculo)){
                    res.innerHTML = `Digite um valor válido`
                }else{
                res.innerHTML = `O resultado entre ${n1} ${seletor} ${n2} é ${calculo}`
                }
               break;
        } 
    }
}
function dataHora(){
    var dia = document.getElementById('data')

    data = new Date();
    hora = data.getHours().toString().padStart(2,'0')
    minutos = data.getMinutes().toString().padStart(2,'0')
    segundos = data.getSeconds().toString().padStart(2,'0')

    setTimeout('dataHora()',1000);

    dia.innerHTML = `${hora}: ${minutos}: ${segundos}`
}