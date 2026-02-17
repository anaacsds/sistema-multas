function ver() { //função que vai verificar velocidade
    var res = document.getElementById('res') //variavel 'res' recebe o elemento do html que tem id 'res'
    var ver = document.getElementById('vel') // varivel 'ver' recebe o elemento do html que tem id 'vel'
    vel = (ver.value) // 'vel' recebe apenas o valor que ta na caixa de texto 'ver' 
    res.innerHTML = `Sua velocidade atual é de <strong>${vel}</strong> Km/h` //o que vai ser escrito dentro da div 'res'
    if (vel >= 60) {
        res.innerHTML = `Você está <strong>MULTADO</strong> por excesso de velocidade!`
    }
    else
        res.innerHTML = `Está tudo certo, continue dirigindo com atenção ao trânsito!`
}