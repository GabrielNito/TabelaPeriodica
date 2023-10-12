const buttonNaoMetais = document.getElementById('nao-metais');
buttonNaoMetais.addEventListener('click', () => {
    let naoMetais = document.querySelectorAll('.nao-metais');

    if (buttonNaoMetais.style.height === '35%') {
        console.log(buttonNaoMetais);
        buttonNaoMetais.style.height = '30%';
        buttonNaoMetais.style.width = '17%';
        buttonNaoMetais.style.margin = '1.5% 1.5% 1.5% 1.5%';
        for (let i = 0; i < naoMetais.length; i++) {
            naoMetais[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonNaoMetais);
        buttonNaoMetais.style.height = '35%';
        buttonNaoMetais.style.width = '19%';
        buttonNaoMetais.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < naoMetais.length; i++) {
            naoMetais[i].style.height = '100%';
        }
    }
})

const buttonMetaisAlcalinos = document.getElementById('metais-alcalinos');
buttonMetaisAlcalinos.addEventListener('click', () => {
    let metaisAlcalinos = document.querySelectorAll('.metais-alcalinos');

    if (buttonMetaisAlcalinos.style.height === '35%') {
        console.log(buttonMetaisAlcalinos);
        buttonMetaisAlcalinos.style.height = '30%';
        buttonMetaisAlcalinos.style.width = '17%';
        buttonMetaisAlcalinos.style.margin = '1.5% 1.5% 1.5% 1.5%'
        for (let i = 0; i < metaisAlcalinos.length; i++) {
            metaisAlcalinos[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonMetaisAlcalinos);
        buttonMetaisAlcalinos.style.height = '35%';
        buttonMetaisAlcalinos.style.width = '19%';
        buttonMetaisAlcalinos.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < metaisAlcalinos.length; i++) {
            metaisAlcalinos[i].style.height = '100%';
        }
    }
})

const buttonSemimetais = document.getElementById('semimetais');
buttonSemimetais.addEventListener('click', () => {
    let semimetais = document.querySelectorAll('.semimetais');

    if (buttonSemimetais.style.height === '35%') {
        console.log(buttonSemimetais);
        buttonSemimetais.style.height = '30%';
        buttonSemimetais.style.width = '17%';
        buttonSemimetais.style.margin = '1.5% 1.5% 1.5% 1.5%';
        for (let i = 0; i < semimetais.length; i++) {
            semimetais[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonSemimetais);
        buttonSemimetais.style.height = '35%';
        buttonSemimetais.style.width = '19%';
        buttonSemimetais.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < semimetais.length; i++) {
            semimetais[i].style.height = '100%';
        }
    }
})

const buttonPosTransicao = document.getElementById('pos-transicao');
buttonPosTransicao.addEventListener('click', () => {
    let posTransicao = document.querySelectorAll('.pos-transicao');

    if (buttonPosTransicao.style.height === '35%') {
        console.log(buttonPosTransicao);
        buttonPosTransicao.style.height = '30%';
        buttonPosTransicao.style.width = '17%';
        buttonPosTransicao.style.margin = '1.5% 1.5% 1.5% 1.5%';
        for (let i = 0; i < posTransicao.length; i++) {
            posTransicao[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonPosTransicao);
        buttonPosTransicao.style.height = '35%';
        buttonPosTransicao.style.width = '19%';
        buttonPosTransicao.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < posTransicao.length; i++) {
            posTransicao[i].style.height = '100%';
        }
    }
})

const buttonLantanideos = document.getElementById('lantanideos');
buttonLantanideos.addEventListener('click', () => {
    let lantanideos = document.querySelectorAll('.lantanideos');

    if (buttonLantanideos.style.height === '35%') {
        console.log(buttonLantanideos);
        buttonLantanideos.style.height = '30%';
        buttonLantanideos.style.width = '17%';
        buttonLantanideos.style.margin = '1.5% 1.5% 1.5% 1.5%';
        for (let i = 0; i < lantanideos.length; i++) {
            lantanideos[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonLantanideos);
        buttonLantanideos.style.height = '35%';
        buttonLantanideos.style.width = '19%';
        buttonLantanideos.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < lantanideos.length; i++) {
            lantanideos[i].style.height = '100%';
        }
    }
})

const buttonGasesNobres = document.getElementById('gases-nobres');
buttonGasesNobres.addEventListener('click', () => {
    let gasesNobres = document.querySelectorAll('.gases-nobres');

    if (buttonGasesNobres.style.height === '35%') {
        console.log(buttonGasesNobres);
        buttonGasesNobres.style.height = '30%';
        buttonGasesNobres.style.width = '17%';
        buttonGasesNobres.style.margin = '1.5% 1.5% 1.5% 1.5%';
        for (let i = 0; i < gasesNobres.length; i++) {
            gasesNobres[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonGasesNobres);
        buttonGasesNobres.style.height = '35%';
        buttonGasesNobres.style.width = '19%';
        buttonGasesNobres.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < gasesNobres.length; i++) {
            gasesNobres[i].style.height = '100%';
        }
    }
})

const buttonMetaisAlcalinosTerrosos = document.getElementById('metais-alcalinos-terrosos');
buttonMetaisAlcalinosTerrosos.addEventListener('click', () => {
    let metaisAlcalinosTerrosos = document.querySelectorAll('.metais-alcalinos-terrosos');

    if (buttonMetaisAlcalinosTerrosos.style.height === '35%') {
        console.log(buttonMetaisAlcalinosTerrosos);
        buttonMetaisAlcalinosTerrosos.style.height = '30%';
        buttonMetaisAlcalinosTerrosos.style.width = '17%';
        buttonMetaisAlcalinosTerrosos.style.margin = '1.5% 1.5% 1.5% 1.5%';
        for (let i = 0; i < metaisAlcalinosTerrosos.length; i++) {
            metaisAlcalinosTerrosos[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonMetaisAlcalinosTerrosos);
        buttonMetaisAlcalinosTerrosos.style.height = '35%';
        buttonMetaisAlcalinosTerrosos.style.width = '19%';
        buttonMetaisAlcalinosTerrosos.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < metaisAlcalinosTerrosos.length; i++) {
            metaisAlcalinosTerrosos[i].style.height = '100%';
        }
    }
})

const buttonPropriedadesDesconhecidas = document.getElementById('propriedades-desconhecidas');
buttonPropriedadesDesconhecidas.addEventListener('click', () => {
    let propriedadesDesconhecidas = document.querySelectorAll('.propriedades-desconhecidas');

    if (buttonPropriedadesDesconhecidas.style.height === '35%') {
        console.log(buttonPropriedadesDesconhecidas);
        buttonPropriedadesDesconhecidas.style.height = '30%';
        buttonPropriedadesDesconhecidas.style.width = '17%';
        buttonPropriedadesDesconhecidas.style.margin = '1.5% 1.5% 1.5% 1.5%';
        for (let i = 0; i < propriedadesDesconhecidas.length; i++) {
            propriedadesDesconhecidas[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonPropriedadesDesconhecidas);
        buttonPropriedadesDesconhecidas.style.height = '35%';
        buttonPropriedadesDesconhecidas.style.width = '19%';
        buttonPropriedadesDesconhecidas.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < propriedadesDesconhecidas.length; i++) {
            propriedadesDesconhecidas[i].style.height = '100%';
        }
    }
})

const buttonMetaisDeTransicao = document.getElementById('metais-de-transicao');
buttonMetaisDeTransicao.addEventListener('click', () => {
    let metaisDeTransicao = document.querySelectorAll('.metais-de-transicao');

    if (buttonMetaisDeTransicao.style.height === '35%') {
        console.log(buttonMetaisDeTransicao);
        buttonMetaisDeTransicao.style.height = '30%';
        buttonMetaisDeTransicao.style.width = '17%';
        buttonMetaisDeTransicao.style.margin = '1.5% 1.5% 1.5% 1.5%';
        for (let i = 0; i < metaisDeTransicao.length; i++) {
            metaisDeTransicao[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonMetaisDeTransicao);
        buttonMetaisDeTransicao.style.height = '35%';
        buttonMetaisDeTransicao.style.width = '19%';
        buttonMetaisDeTransicao.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < metaisDeTransicao.length; i++) {
            metaisDeTransicao[i].style.height = '100%';
        }
    }
})

const buttonactinidios = document.getElementById('actinidios');
buttonactinidios.addEventListener('click', () => {
    let actinidios = document.querySelectorAll('.actinidios');

    if (buttonactinidios.style.height === '35%') {
        console.log(buttonactinidios);
        buttonactinidios.style.height = '30%';
        buttonactinidios.style.width = '17%';
        buttonactinidios.style.margin = '1.5% 1.5% 1.5% 1.5%';
        for (let i = 0; i < actinidios.length; i++) {
            actinidios[i].style.height = '10%';
        }
    }
    else {
        console.log(buttonactinidios);
        buttonactinidios.style.height = '35%';
        buttonactinidios.style.width = '19%';
        buttonactinidios.style.margin = '.5% .5% .5% .5%';
        for (let i = 0; i < actinidios.length; i++) {
            actinidios[i].style.height = '100%';
        }
    }
})
