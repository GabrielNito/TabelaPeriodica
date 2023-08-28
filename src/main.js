export function Geral(lineNum, [elNum, numAtom, simAtom, nome, pesoAtom, c]) {
        let numAtomico = document.createElement('div');
        let elemento1 = document.getElementById(`el${elNum}-line${lineNum}`);
        numAtomico.classList.add(`n-atom`);
        elemento1.appendChild(numAtomico);
        numAtomico.innerHTML = numAtom;

        let simAtomico = document.createElement('div');
        let elemento2 = document.getElementById(`el${elNum}-line${lineNum}`);
        simAtomico.classList.add(`s-atom`);
        elemento2.appendChild(simAtomico);
        simAtomico.innerHTML = simAtom;

        let nomeAtomo = document.createElement('div');
        let elemento3 = document.getElementById(`el${elNum}-line${lineNum}`);
        nomeAtomo.classList.add('nome');
        elemento3.appendChild(nomeAtomo);
        nomeAtomo.innerHTML = nome;

        let pesoAtomo = document.createElement('div');
        let elemento4 = document.getElementById(`el${elNum}-line${lineNum}`);
        pesoAtomo.classList.add('p-atom');
        elemento4.appendChild(pesoAtomo);
        pesoAtomo.innerHTML = pesoAtom;

        let elemento5 = document.getElementById(`el${elNum}-line${lineNum}`);
        elemento5.style.backgroundColor = c;
}

export const naoMetais = 'rgb(169, 217, 91)';
export const metaisAlcalinos = 'rgb(240, 194, 88)';
export const semimetais = 'rgb(117, 200, 184)';
export const outrosMetais = 'rgb(165, 202, 214)';
export const lantanideos = 'rgb(161, 219, 222)';
export const gasesNobres = 'rgb(119, 178, 228)';
export const metaisAlcalinosTerrosos = 'rgb(231, 229, 84)';
export const halogenios = 'rgb(181, 225, 241)';
export const metaisdeTransicao = 'rgb(238, 158, 173)';
export const actinidios = 'rgb(226, 175, 213)';
