import { blank, asyncCall, naoMetais, metaisAlcalinos, semimetais, outrosMetais, lantanideos, gasesNobres, metaisAlcalinosTerrosos, halogenios, metaisdeTransicao, actinidios, posTransicao, propriedadesDesconhecidas, loadingScreen } from "./main.js";

// conferir posTransicao

const el1 = asyncCall(1, 1, 1, "H", "Hidrogênio", 1.008, naoMetais, "https://pt.wikipedia.org/wiki/Hidrog%C3%A9nio");
const blank1 = blank(1,)
const el2 = asyncCall(1, 2, 2, "He", "Hélio", 4.0026, gasesNobres, "https://pt.wikipedia.org/wiki/H%C3%A9lio");

const el3 = asyncCall(2, 1, 3, "Li", "Lítio", 6.94, metaisAlcalinos, "https://pt.wikipedia.org/wiki/L%C3%ADtio");
const el4 = asyncCall(2, 2, 4, "Be", "Berílio", 9.9122, metaisAlcalinosTerrosos, "https://pt.wikipedia.org/wiki/Ber%C3%ADlio");
const blank2 = blank(2)
const el5 = asyncCall(2, 3, 5, "B", "Boro", 10.81, semimetais, "https://pt.wikipedia.org/wiki/Boro");
const el6 = asyncCall(2, 4, 6, "C", "Carbono", 12.011, naoMetais, "https://pt.wikipedia.org/wiki/Carbono");
const el7 = asyncCall(2, 5, 7, "N", "Nitrogênio", 14.007, naoMetais, "https://pt.wikipedia.org/wiki/Azoto");
const el8 = asyncCall(2, 6, 8, "O", "Oxigênio", 15.999, naoMetais, "https://pt.wikipedia.org/wiki/Oxig%C3%A9nio");
const el9 = asyncCall(2, 7, 9, "F", "Flúor", 18.998, naoMetais, "https://pt.wikipedia.org/wiki/Fl%C3%BAor");
const el10 = asyncCall(2, 8, 10, "Ne", "Neônio", 20.18, gasesNobres, "https://pt.wikipedia.org/wiki/N%C3%A9on");

const el11 = asyncCall(3, 1, 11, "Na", "Sódio", 22.99, metaisAlcalinos, "https://pt.wikipedia.org/wiki/S%C3%B3dio");
const el12 = asyncCall(3, 2, 12, "Mg", "Magnésio", 24.305, metaisAlcalinosTerrosos, "https://pt.wikipedia.org/wiki/Magn%C3%A9sio");
const blank3 = blank(3)
const el13 = asyncCall(3, 3, 13, "Al", "Alumínio", 26.982, posTransicao, "https://pt.wikipedia.org/wiki/Alum%C3%ADnio");
const el14 = asyncCall(3, 4, 14, "Si", "Silício", 28.085, semimetais, "https://pt.wikipedia.org/wiki/Sil%C3%ADcio");
const el15 = asyncCall(3, 5, 15, "P", "Fósforo", 30.974, naoMetais, "https://pt.wikipedia.org/wiki/F%C3%B3sforo");
const el16 = asyncCall(3, 6, 16, "S", "Enxofre", 32.06, naoMetais, "https://pt.wikipedia.org/wiki/Enxofre");
const el17 = asyncCall(3, 7, 17, "Cl", "Cloro", 35.45, naoMetais, "https://pt.wikipedia.org/wiki/Cloro");
const el18 = asyncCall(3, 8, 18, "Ar", "Argônio", 39.948, gasesNobres, "https://pt.wikipedia.org/wiki/%C3%81rgon");

const el19 = asyncCall(4, 1, 19, "K", "Potássio", 39.098, metaisAlcalinos, "https://pt.wikipedia.org/wiki/Pot%C3%A1ssio");
const el20 = asyncCall(4, 2, 20, "Ca", "Cálcio", "40.078(4)", metaisAlcalinosTerrosos, "https://pt.wikipedia.org/wiki/C%C3%A1lcio");
const el21 = asyncCall(4, 3, 21, "Sc", "Escândio", 44.956, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Esc%C3%A2ndio");
const el22 = asyncCall(4, 4, 22, "Ti", "Titânio", 47.867, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Tit%C3%A2nio");
const el23 = asyncCall(4, 5, 23, "V", "Vanádio", 50.942, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Van%C3%A1dio");
const el24 = asyncCall(4, 6, 24, "Cr", "Crômio", 51.996, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Cromo");
const el25 = asyncCall(4, 7, 25, "Mn", "Manganês", 54.938, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Mangan%C3%AAs");
const el26 = asyncCall(4, 8, 26, "Fe", "Ferro", "55.845(2)", metaisdeTransicao, "https://pt.wikipedia.org/wiki/Ferro");
const el27 = asyncCall(4, 9, 27, "Co", "Cobalto", 58.933, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Cobalto");
const el28 = asyncCall(4, 10, 28, "Ni", "Níquel", 58.693, metaisdeTransicao, "https://pt.wikipedia.org/wiki/N%C3%ADquel");
const el29 = asyncCall(4, 11, 29, "Cu", "Cobre", "63.546(3)", metaisdeTransicao, "https://pt.wikipedia.org/wiki/Cobre");
const el30 = asyncCall(4, 12, 30, "Zn", "Zinco", "65,38(2)", metaisdeTransicao, "https://pt.wikipedia.org/wiki/Zinco");
const el31 = asyncCall(4, 13, 31, "Ga", "Gálio", 69.723, posTransicao, "https://pt.wikipedia.org/wiki/G%C3%A1lio");
const el32 = asyncCall(4, 14, 32, "Ge", "Germânio", "72.630(8)", semimetais, "https://pt.wikipedia.org/wiki/Germ%C3%A2nio");
const el33 = asyncCall(4, 15, 33, "As", "Arsênio", 74.922, semimetais, "https://pt.wikipedia.org/wiki/Ars%C3%AAnio");
const el34 = asyncCall(4, 16, 34, "Se", "Selênio", "78.971(8)", naoMetais, "https://pt.wikipedia.org/wiki/Sel%C3%AAnio");
const el35 = asyncCall(4, 17, 35, "Br", "Bromo", 79.904, naoMetais, "https://pt.wikipedia.org/wiki/Bromo");
const el36 = asyncCall(4, 18, 36, "Kr", "Criptônio", "83.798(2)", gasesNobres, "https://pt.wikipedia.org/wiki/Cr%C3%ADpton");

const el37 = asyncCall(5, 1, 37, "Rb", "Rubídio", 85.468, metaisAlcalinos, "https://pt.wikipedia.org/wiki/Rub%C3%ADdio");
const el38 = asyncCall(5, 2, 38, "Sr", "Estrôncio", 87.62, metaisAlcalinosTerrosos, "https://pt.wikipedia.org/wiki/Estr%C3%B4ncio");
const el39 = asyncCall(5, 3, 39, "Y", "Ítrio", 88.906, metaisdeTransicao, "https://pt.wikipedia.org/wiki/%C3%8Dtrio");
const el40 = asyncCall(5, 4, 40, "Zr", "Zircônio", "91.224(2)", metaisdeTransicao, "https://pt.wikipedia.org/wiki/Zirc%C3%B4nio");
const el41 = asyncCall(5, 5, 41, "Nb", "Nióbio", 92.906, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Ni%C3%B3bio");
const el42 = asyncCall(5, 6, 42, "Mo", "Molibdênio", 95.95, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Molibd%C3%AAnio");
const el43 = asyncCall(5, 7, 43, "Tc", "Tecnécio", "[93]", metaisdeTransicao, "https://pt.wikipedia.org/wiki/Tecn%C3%A9cio");
const el44 = asyncCall(5, 8, 44, "Ru", "Rutênio", "101.07(2)", metaisdeTransicao, "https://pt.wikipedia.org/wiki/Rut%C3%AAnio");
const el45 = asyncCall(5, 9, 45, "Rh", "Ródio", 106.42, metaisdeTransicao, "https://pt.wikipedia.org/wiki/R%C3%B3dio");
const el46 = asyncCall(5, 10, 46, "Pd", "Paládio", 106.42, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Pal%C3%A1dio");
const el47 = asyncCall(5, 11, 47, "Ag", "Prata", 107.87, metaisdeTransicao, "https://pt.wikipedia.org/wiki/Prata");
const el48 = asyncCall(5, 12, 48, "Cd", "Cádmio", 112.41, metaisdeTransicao, "https://pt.wikipedia.org/wiki/C%C3%A1dmio");
const el49 = asyncCall(5, 13, 49, "In", "Índio", 114.82, posTransicao, "https://pt.wikipedia.org/wiki/%C3%8Dndio_(elemento_qu%C3%ADmico)");
const el50 = asyncCall(5, 14, 50, "Sn", "Estanho", 118.71, posTransicao, "https://pt.wikipedia.org/wiki/Estanho");
const el51 = asyncCall(5, 15, 51, "Sb", "Antimônio", 121.76, semimetais, "https://pt.wikipedia.org/wiki/Antim%C3%B4nio");
const el52 = asyncCall(5, 16, 52, "Te", "Telúrio", "127.60(3)", semimetais, "https://pt.wikipedia.org/wiki/Tel%C3%BArio");
const el53 = asyncCall(5, 17, 53, "I", "Iodo", 126.9, naoMetais, "https://pt.wikipedia.org/wiki/Iodo");
const el54 = asyncCall(5, 18, 54, "Xe", "Xenônio", 131.29, gasesNobres, "https://pt.wikipedia.org/wiki/Xen%C3%B4nio");

////////////////////////////////////////////////////////////////////////////////

const el55 = asyncCall(6, 1, 55, "Cs", "Césio", 132.91, metaisAlcalinos);
const el56 = asyncCall(6, 2, 56, "Ba", "Bário", 137.33, metaisAlcalinosTerrosos);
const el57 = asyncCall(6, 3, 57, "La", "Lantânio", 138.91, lantanideos);
const el58 = asyncCall(6, 4, 72, "Hf", "Háfnio", "178.49(2)", metaisdeTransicao);
const el59 = asyncCall(6, 5, 73, "Ta", "Tântalo", 180.95, metaisdeTransicao);
const el60 = asyncCall(6, 6, 74, "W", "Tungstênio", 183.84, metaisdeTransicao);
const el61 = asyncCall(6, 7, 75, "Re", "Rênio", 186.21, metaisdeTransicao);
const el62 = asyncCall(6, 8, 76, "Os", "Ósmio", "190.23(3)", metaisdeTransicao);
const el63 = asyncCall(6, 9, 77, "Ir", "Irídio", 192.22, metaisdeTransicao);
const el64 = asyncCall(6, 10, 78, "Pt", "Platina", 195.08, metaisdeTransicao);
const el65 = asyncCall(6, 11, 79, "Au", "Ouro", 196.97, metaisdeTransicao);
const el66 = asyncCall(6, 12, 80, "Hg", "Mercúrio", 200.59, metaisdeTransicao);
const el67 = asyncCall(6, 13, 81, "Tl", "Tálio", 204.38, posTransicao);
const el68 = asyncCall(6, 14, 82, "Pb", "Chumbo", 207.2, posTransicao);
const el69 = asyncCall(6, 15, 83, "Bi", "Bismuto", 208.98, posTransicao);
const el70 = asyncCall(6, 16, 84, "Po", "Polônio", "[209]", posTransicao);
const el71 = asyncCall(6, 17, 85, "At", "Astato", "[210]", posTransicao);
const el72 = asyncCall(6, 18, 86, "Rn", "Radônio", "[222]", gasesNobres);

const el73 = asyncCall(7, 1, 87, "Fr", "Frâncio", "[223]", metaisAlcalinos);
const el74 = asyncCall(7, 2, 88, "Ra", "Rádio", "[226]", metaisAlcalinosTerrosos);
const el75 = asyncCall(7, 3, 89, "Ac", "Actínio", "[227]", actinidios);
const el76 = asyncCall(7, 4, 104, "Rf", "Rutherfórdio", "[267]", metaisdeTransicao);
const el77 = asyncCall(7, 5, 105, "Db", "Dúbnio", "[268]", metaisdeTransicao);
const el78 = asyncCall(7, 6, 106, "Sg", "Seabórgio", "[269]", metaisdeTransicao);
const el79 = asyncCall(7, 7, 107, "Bh", "Bóhrio", "[270]", metaisdeTransicao);
const el80 = asyncCall(7, 8, 108, "Hs", "Hássio", "[269]", metaisdeTransicao);
const el81 = asyncCall(7, 9, 109, "Mt", "Meitnério", "[278]", propriedadesDesconhecidas);
const el82 = asyncCall(7, 10, 110, "Ds", "Darmstádio", "[281]", propriedadesDesconhecidas);
const el83 = asyncCall(7, 11, 111, "Rg", "Roentgênio", "[281]", propriedadesDesconhecidas);
const el84 = asyncCall(7, 12, 112, "Cn", "Copernício", "[285]", propriedadesDesconhecidas);
const el85 = asyncCall(7, 13, 113, "Nh", "Nihônio", "[286]", propriedadesDesconhecidas);
const el86 = asyncCall(7, 14, 114, "Fl", "Fleróvio", "[289]", propriedadesDesconhecidas);
const el87 = asyncCall(7, 15, 115, "Mc", "Moscóvio", "[288]", propriedadesDesconhecidas);
const el88 = asyncCall(7, 16, 116, "Lv", "Livermório", "[293]", propriedadesDesconhecidas);
const el89 = asyncCall(7, 17, 117, "Ts", "Tenessino", "[294]", propriedadesDesconhecidas);
const el90 = asyncCall(7, 18, 118, "Og", "Oganesônio", "[294]", propriedadesDesconhecidas);

const blank8 = blank(8)
const el91 = asyncCall(8, 1, 58, "Ce", "Cério", 140.12, lantanideos);
const el92 = asyncCall(8, 2, 59, "Pr", "Praseodímio", 140.91, lantanideos);
const el93 = asyncCall(8, 3, 60, "Nd", "Neodímio", 144.24, lantanideos);
const el94 = asyncCall(8, 4, 61, "Pm", "Promécio", "[145]", lantanideos);
const el95 = asyncCall(8, 5, 62, "Sm", "Samário", "150.36(2)", lantanideos);
const el96 = asyncCall(8, 6, 63, "Eu", "Európio", 151.96, lantanideos);
const el97 = asyncCall(8, 7, 64, "Gd", "Gadolínio", "157.25(3)", lantanideos);
const el98 = asyncCall(8, 8, 65, "Tb", "Térbio", 158.93, lantanideos);
const el99 = asyncCall(8, 9, 66, "Dy", "Disprósio", 162.50, lantanideos);
const el100 = asyncCall(8, 10, 67, "Ho", "Hólmio", 164.93, lantanideos);
const el101 = asyncCall(8, 11, 68, "Er", "Érbio", 167.26, lantanideos);
const el102 = asyncCall(8, 12, 69, "Tm", "Túlio", 168.93, lantanideos);
const el103 = asyncCall(8, 13, 70, "Tb", "Itérbio", 173.05, lantanideos);
const el104 = asyncCall(8, 14, 71, "Lu", "Lutécio", 174.97, lantanideos);

const blank9 = blank(9)
const el105 = asyncCall(9, 1, 90, "Th", "Tório", 232.03, actinidios);
const el106 = asyncCall(9, 2, 91, "Pa", "Protactínio", 231.03, actinidios);
const el107 = asyncCall(9, 3, 92, "U", "Urânio", 238.02, actinidios);
const el108 = asyncCall(9, 4, 93, "Np", "Netúnio", "[237]", actinidios);
const el109 = asyncCall(9, 5, 94, "Pu", "Plutônio", "[244]", actinidios);
const el110 = asyncCall(9, 6, 95, "Am", "Amerício", "[243]", actinidios);
const el111 = asyncCall(9, 7, 96, "Cm", "Cúrio", "[247]", actinidios);
const el112 = asyncCall(9, 8, 97, "Bk", "Berquélio", "[247]", actinidios);
const el113 = asyncCall(9, 9, 98, "Cf", "Califórnio", "[251]", actinidios);
const el114 = asyncCall(9, 10, 99, "Es", "Einsténio", "[252]", actinidios);
const el115 = asyncCall(9, 11, 100, "Fm", "Férmio", "[257]", actinidios);
const el116 = asyncCall(9, 12, 101, "Md", "Mendelévio", "[258]", actinidios);
const el117 = asyncCall(9, 13, 102, "No", "Nobélio", "[259]", actinidios);
const el118 = asyncCall(9, 14, 103, "Lr", "Laurêncio", "[262]", actinidios);

loadingScreen()