export const naoMetais = 'var(--nao-metais)';
export const metaisAlcalinos = 'var(--metais-alcalinos)';
export const semimetais = 'var(--semimetais)';
export const outrosMetais = 'var(--outros-metais)';
export const lantanideos = 'var(--lantanideos)';
export const gasesNobres = 'var(--gases-nobres)';
export const metaisAlcalinosTerrosos = 'var(--metais-alcalinos-terrosos)';
export const halogenios = 'var(--halogenios)';
export const metaisdeTransicao = 'var(--metais-de-transicao)';
export const actinidios = 'var(--actinidios)';
export const posTransicao = 'var(--pos-transicao)';
export const propriedadesDesconhecidas = 'var(--propriedades-desconhecidas)';

export function criaLI(lineNum, elNum, numAtom, simAtom, nome, pesoAtom, c, link, callback) {
        let li = document.createElement('li')
        let parentTag = document.getElementsByClassName(`line${lineNum}`)
        let nomeElemento = c.replace(")", "");
        li.classList.add(nomeElemento.split("var(--").pop());
        li.setAttribute("id", `el${elNum}-line${lineNum}`)
        parentTag[0].appendChild(li);

        callback(lineNum, elNum, numAtom, simAtom, nome, pesoAtom, c, link)
}

export function geral(lineNum, elNum, numAtom, simAtom, nome, pesoAtom, c, link, callback) {
        let elemento = document.getElementById(`el${elNum}-line${lineNum}`);

        let numAtomico = document.createElement('div');
        numAtomico.classList.add(`n-atom`);
        elemento.appendChild(numAtomico);
        numAtomico.innerHTML = numAtom;

        let simAtomico = document.createElement('div');
        simAtomico.classList.add(`s-atom`);
        elemento.appendChild(simAtomico);
        simAtomico.innerHTML = simAtom;

        let nomeAtomo = document.createElement('div');
        nomeAtomo.classList.add('nome');
        elemento.appendChild(nomeAtomo);
        nomeAtomo.innerHTML = nome;

        let pesoAtomo = document.createElement('div');
        pesoAtomo.classList.add('p-atom');
        elemento.appendChild(pesoAtomo);
        pesoAtomo.innerHTML = pesoAtom;

        let linkElemento = document.createElement('a')
        linkElemento.classList.add('link')
        linkElemento.setAttribute('target', '_blank');
        elemento.appendChild(linkElemento)
        linkElemento.href = link;

        elemento.style.backgroundColor = c;
}

export function blank(lineNum) {
        let blank = document.createElement('div')
        let parentTag = document.getElementsByClassName(`line${lineNum}`)
        blank.classList.add(`blank-${lineNum}`);
        parentTag[0].appendChild(blank);
}

export function asyncCall(lineNum, elNum, numAtom, simAtom, nome, pesoAtom, c, link) {
        criaLI(lineNum, elNum, numAtom, simAtom, nome, pesoAtom, c, link, geral);
};

export function loadingScreen() {
        const screen = document.getElementById('loading-screen')

        setTimeout(() => {
                console.log('eitah')
                document.body.style.overflowY = 'auto'
                screen.style.opacity = '0'
        }, 1000)

}