import { Geral, naoMetais, metaisAlcalinos, semimetais, outrosMetais, lantanideos, gasesNobres, metaisAlcalinosTerrosos, halogenios, metaisdeTransicao, actinidios } from "./main.js";

const el1 = new Geral(1, [1, 1, "H", "Hidrogênio", 1.008, naoMetais]);
const el2 = new Geral(1, [2, 2, "He", "Hélio", 4.0026, gasesNobres]); // sla

const el3 = new Geral(2, [1, 3, "Li", "Lítio", 6.94, metaisAlcalinos]);
const el4 = new Geral(2, [2, 4, "Be", "Berílio", 9.9122, metaisAlcalinosTerrosos]);
const el5 = new Geral(2, [3, 5, "B", "Boro", 10.81, semimetais]);
const el6 = new Geral(2, [4, 6, "C", "Carbono", 12.011, naoMetais]);
const el7 = new Geral(2, [5, 7, "N", "Nitrogênio", 14.007, naoMetais]);
const el8 = new Geral(2, [6, 8, "O", "Oxigênio", 15.999, naoMetais]);
const el9 = new Geral(2, [7, 9, "F", "Flúor", 18.998, halogenios]);
const el10 = new Geral(2, [8, 10, "Ne", "Neônio", 20.18, gasesNobres]); // sla

const el11 = new Geral(3, [1, 11, "Na", "Sódio", 22.99, metaisAlcalinos]);
const el12 = new Geral(3, [2, 12, "Mg", "Magnésio", 24.305, metaisAlcalinosTerrosos]);
const el13 = new Geral(3, [3, 13, "Al", "Alumínio", 26.982, lantanideos]);
const el14 = new Geral(3, [4, 14, "Si", "Silício", 28.085, semimetais]);
const el15 = new Geral(3, [5, 15, "P", "Fósforo", 30.974, naoMetais]);
const el16 = new Geral(3, [6, 16, "S", "Enxofre", 32.06, naoMetais]);
const el17 = new Geral(3, [7, 17, "Cl", "Cloro", 35.45, halogenios]);
const el18 = new Geral(3, [8, 18, "Ar", "Argônio", 39.948, gasesNobres]); // sla

const el19 = new Geral(4, [1, 19, "K", "Potássio", 39.098, metaisAlcalinos]);
const el20 = new Geral(4, [2, 20, "Ca", "Cálcio", "40.078(4)", metaisAlcalinosTerrosos]);
const el21 = new Geral(4, [3, 21, "Sc", "Escândio", 44.956, metaisdeTransicao]);
const el22 = new Geral(4, [4, 22, "Ti", "Titânio", 47.867, metaisdeTransicao]);
const el23 = new Geral(4, [5, 23, "V", "Vanádio", 50.942, metaisdeTransicao]);
const el24 = new Geral(4, [6, 24, "Cr", "Crômio", 51.996, metaisdeTransicao]);
const el25 = new Geral(4, [7, 25, "Mn", "Manganês", 54.938, metaisdeTransicao]);
const el26 = new Geral(4, [8, 26, "Fe", "Ferro", "55.845(2)", metaisdeTransicao]);
const el27 = new Geral(4, [9, 27, "Co", "Cobalto", 58.933, metaisdeTransicao]);
const el28 = new Geral(4, [10, 28, "Ni", "Níquel", 58.693, metaisdeTransicao]);
const el29 = new Geral(4, [11, 29, "Cu", "Cobre", "63.546(3)", metaisdeTransicao]);
const el30 = new Geral(4, [12, 30, "Zn", "Zinco", "65,38(2)", metaisdeTransicao]);
const el31 = new Geral(4, [13, 31, "Ga", "Gálio", 69.723, lantanideos]);
const el32 = new Geral(4, [14, 32, "Ge", "Germânio", "72.630(8)", semimetais]);
const el33 = new Geral(4, [15, 33, "As", "Arsênio", 74.922, semimetais]);
const el34 = new Geral(4, [16, 34, "Se", "Selênio", "78.971(8)", naoMetais]);
const el35 = new Geral(4, [17, 35, "Br", "Bromo", 79.904, halogenios]);
const el36 = new Geral(4, [18, 36, "Kr", "Criptônio", "83.798(2)", gasesNobres]); // sla

const el37 = new Geral(5, [1, 37, "Rb", "Rubídio", 85.468, metaisAlcalinos]);
const el38 = new Geral(5, [2, 38, "Sr", "Estrôncio", 87.62, metaisAlcalinosTerrosos]);
const el39 = new Geral(5, [3, 39, "Y", "Ítrio", 88.906, metaisdeTransicao]);
const el40 = new Geral(5, [4, 40, "Zr", "Zircônio", "91.224(2)", metaisdeTransicao]);
const el41 = new Geral(5, [5, 41, "Nb", "Nióbio", 92.906, metaisdeTransicao]);
const el42 = new Geral(5, [6, 42, "Mo", "Molibdênio", 95.95, metaisdeTransicao]);
const el43 = new Geral(5, [7, 43, "Tc", "Tecnécio", "[93]", metaisdeTransicao]);
const el44 = new Geral(5, [8, 44, "Ru", "Rutênio", "101.07(2)", metaisdeTransicao]);
const el45 = new Geral(5, [9, 45, "Rh", "Ródio", 106.42, metaisdeTransicao]);
const el46 = new Geral(5, [10, 46, "Pd", "Paládio", 106.42, metaisdeTransicao]);
const el47 = new Geral(5, [11, 47, "Ag", "Prata", 107.87, metaisdeTransicao]);
const el48 = new Geral(5, [12, 48, "Cd", "Cádmio", 112.41, metaisdeTransicao]);
const el49 = new Geral(5, [13, 49, "In", "Índio", 114.82, lantanideos]);
const el50 = new Geral(5, [14, 50, "Sn", "Estanho", 118.71, lantanideos]);
const el51 = new Geral(5, [15, 51, "Sb", "Antimônio", 121.76, semimetais]);
const el52 = new Geral(5, [16, 52, "Te", "Telúrio", "127.60(3)", semimetais]);
const el53 = new Geral(5, [17, 53, "I", "Iodo", 126.9, halogenios]);
const el54 = new Geral(5, [18, 54, "Xe", "Xenônio", 131.29, gasesNobres]); // sla
