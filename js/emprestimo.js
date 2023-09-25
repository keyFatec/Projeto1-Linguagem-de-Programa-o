function Calculate() {
    //se o botão de ciência sobre ser uma simulação não for preenchido, solta um aviso e interrompe o cálculo
    if (document.getElementById('ciente').checked==false) {
        alert("Preencha a informação de ciência sobre a simulação,\ne depois solicite o cálculo")
        return
    }
    
    // Captura valor do empréstimo na constante "amount"
    const amount = document.querySelector("#amount").value;

    //se não preencher o valor do empréstimo, ou for igual a zero, solta um aviso e interrompe o cálculo
    if (amount==null || amount==0) {
        alert("Preencha o valor do empréstimo,\ne depois solicite o cálculo")
        return
    }
    
    // Captura valor da taxa de juros na constante "rate"
    const rate = document.querySelector("#rate").value;

    //se não preencher o valor da taxa de juros, ou for igual a zero, solta um aviso e interrompe o cálculo
     if (rate==null || rate==0) {
        alert("Preencha o valor do empréstimo,\ne depois solicite o cálculo")
        return
    }
   
    //Transforma a taxa de juros em percentual (divide por 100)
    let interest = rate / 100;
    console.log(interest)

    // Verifica qual tipo de taxa (mensal ou anual) pelo atributo "checked" (caixa preenchida = true)
    const mensal = document.getElementById('meses').checked;
    const anual = document.getElementById('anos').checked;

    // Se não informar se a taxa de juros é mensal ou anual, solta um aviso e interrompe o cálculo
    if (mensal==false && anual ==false) {
        alert("Informe se a taxa de juros é mensal ou anual,\ne depois solicite o cálculo")
        return
    }
    
    //Se a taxa é anual, transforma em taxa mensal, pois as parcelas são mensais
    if(anual==true){
        interest = (1+interest)**(1/12)-1;
        console.log(interest)
    }

    // Captura quantidade de parcelas na constante "months" 
    const months = document.querySelector("#months").value;
  
    //se não preencher a quantidade de parcelas, ou for igual a zero, solta um aviso e interrompe o cálculo
    if (months==null || months==0) {
    alert("Preencha a quantidade de parcelas,\ne depois solicite o cálculo")
    return
    } 

    /* Fórmula do Coeficiente de financiamento "FC", a ser multiplicado pelo valor do empréstimo
    e que resulta no valor da prestação:
    FC = i / (1 - (1/(1 + i)**n), onde:
    i = taxa de juros, correspondente à variável "interest"
    n = número de parcelas, correspondente à constante "months" */

    const FC = interest / (1 - (1/(1+interest)**months))
    // Calcula valor da parcela, com 2 casas de arredondamento
    const parcela = (FC * amount).toFixed(2);
  
    document.querySelector("#total")
        .innerHTML = "Valor da parcela : R$" + parcela    
  
}  
