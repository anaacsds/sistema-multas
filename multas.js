function ver() { //função que vai verificar velocidade
    var res = document.getElementById('res') //variavel 'res' recebe o elemento do html que tem id 'res'
    var ver = document.getElementById('vel') // varivel 'ver' recebe o elemento do html que tem id 'vel'
    vel = (ver.value).trim() // 'vel' recebe apenas o valor que ta na caixa de texto 'ver' 
                            // .trim() remove espaços em branco
    res.innerHTML = `Sua velocidade atual é de <strong>${vel}</strong> Km/h` //o que vai ser escrito dentro da div 'res'
    if (vel >= 60) {
        res.innerHTML += `, você está <strong>MULTADO</strong> por excesso de velocidade!`
    }
    else if (vel === "")
        res.innerHTML = `Digite sua velocidade atual!`
    else if (vel < 60)
    res.innerHTML += `, está tudo certo, continue dirigindo com atenção ao trânsito!`
}