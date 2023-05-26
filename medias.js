

function notas(){
    let nome = document.getElementById('nome').value
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)
    let n3 = parseInt(document.getElementById('n3').value)
    
    media = (n1+n2+n3)/3

    if(media >= 6){
    document.getElementById('valor').innerHTML = `${nome}, sua média foi ${+ media}, você foi Aprovado!`
    }
   else{
   document.getElementById('valor').innerHTML = `${nome}, sua média foi ${+ media}, você foi Reprovado!` 
   }

}

