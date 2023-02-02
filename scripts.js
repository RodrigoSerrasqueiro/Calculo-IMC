function calcular(){
  let altura = document.getElementById('altura')
  let peso = document.querySelector('input#peso')
  let metros = altura.value
  let kg = peso.value
  let imc = (kg / (metros*metros)).toFixed(2).replace(',','.')
  let resultado = document.getElementById('resultado')
  let img = document.createElement('img')
  img.setAttribute('id','foto')
  let sexo = document.getElementsByName('rad-sex')

  if(metros == 0 || metros > 3 || kg == 0 || kg > 600){ //verifica se os dados são válidos ou se há campos em branco.
    alert('Dados inválidos. Verifique-os e tente novamente.')
    location.reload()
  }else{
    if(sexo[0].checked){ //caso o usuário informe MASCULINO, será executado esse bloco.
      if(imc < 18.5){ //Para cada resultado IMC é dado um feedback ao usuário.
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>ABAIXO DO PESO</strong></p>`
        img.setAttribute('src', 'AbaixoDoPesoHomem.jpg')
      }
      else if(imc >= 18.5 && imc < 25){
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>PESO NORMAL</strong></p>`
        img.setAttribute('src', 'PesoNormalHomem.jpg')
      }
      else if(imc >= 25 && imc < 30){
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>SOBREPESO</strong></p>`
        img.setAttribute('src', 'SobrepesoHomem.jpg')
      }
      else if(imc >= 30 && imc < 35){
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>OBESIDADE I</strong></p>`
        img.setAttribute('src', 'Obesidade1Homem.jpg')
      }
      else if(imc >= 35 && imc < 40){
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>OBESIDADE II</strong></p>`
        img.setAttribute('src', 'Obesidade2Homem.jpg')
      }
      else{
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>OBESIDADE III</strong></p>`
        img.setAttribute('src', 'Obesidade3Homem.jpg')
      }
    }
    else{ //caso o usuário informe FEMININO, será executado esse bloco.
      if(imc < 18.5){
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>ABAIXO DO PESO</strong></p>`
        img.setAttribute('src', 'AbaixoDoPesoMulher.jpg')
      }
      else if(imc >= 18.5 && imc < 25){
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>PESO NORMAL</strong></p>`
        img.setAttribute('src', 'PesoNormalMulher.jpg')
      }
      else if(imc >= 25 && imc < 30){
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>SOBREPESO</strong></p>`
        img.setAttribute('src', 'SobrepesoMulher.jpg')
      }
      else if(imc >= 30 && imc < 35){
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>OBESIDADE I</strong></p>`
        img.setAttribute('src', 'Obesidade1Mulher.jpg')
      }
      else if(imc >= 35 && imc < 40){
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>OBESIDADE II</strong></p>`
        img.setAttribute('src', 'Obesidade2Mulher.jpg')
      }
      else{
        resultado.innerHTML=`<p>IMC Calculado: <strong>${imc}</strong></p>
        <p>Resultado: <strong>OBESIDADE III</strong></p>`
        img.setAttribute('src', 'Obesidade3Mulher.jpg')
      }
    }
    resultado.appendChild(img) //para cada gênero e resultado IMC é apresentada uma imagem correspondente.
  }
}  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*if((sexo[0].checked)){
      if(imc < 18.5){
        resultado.innerHTML=`<p>IMC calculado: ${imc}</p><p>Resultado: <strong>ABAIXO DO PESO.</strong></p>`
        img.setAttribute('src','AbaixoDoPesoHomem.jpg')
      }else if(imc >=18.5 && imc <25){
        resultado.innerHTML=`<p>IMC calculado: ${imc}</p><p>Resultado: <strong>PESO NORMAL.</strong></p>`
        img.setAttribute('src','PesoNormalHomem.jpg')
      }else if(imc >=25 && imc <30){
        resultado.innerHTML=`<p>IMC calculado: ${imc}</p><p>Resultado: <strong>SOBREPESO</strong></p>`
        img.setAttribute('src','SobrepesoHomem.jpg')
      }else if(imc >=30 && imc <35){
        resultado.innerHTML=`<p>IMC calculado: ${imc}</p><p>Resultado: <strong>OBESIDADE I</strong></p>`
        img.setAttribute('src','Obesidade1Homem.jpg')
      }else if(imc >=35 && imc <40){
        resultado.innerHTML=`<p>IMC calculado: ${imc}</p><p>Resultado: <strong>OBESIDADE II</strong></p>`
        img.setAttribute('src','Obesidade2Homem.jpg')
      }else{
        resultado.innerHTML=`<p>IMC calculado: ${imc}</p><p>Resultado: <strong>OBESIDADE III</strong></p>`
        img.setAttribute('src','Obesidade3Homem.jpg')
      }
    }else{
      if(imc < 18.5){
        resultado.innerHTML=`<p>IMC calculado: ${imc}</p><p>Resultado: <strong>ABAIXO DO PESO.</strong></p>`
        img.setAttribute('src','AbaixoDoPesoMulher.jpg')
      }else if(imc >= 18.5 && imc<25){
        resultado.innerHTML=`<p>IMC calculado: ${imc}</p><p>Resultado: <strong>PESO NORMAL.</strong></p>`
        img.setAttribute('src','PesoNormalMulher.jpg')
      }
    }
    image.appendChild(img)
  }
}*/