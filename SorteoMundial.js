const read = require('prompt-sync')();

function main() {
    
    console.info('BIENVENIDOS AL FIXTURE DEL MUNDIAL QATAR 2022')
    console.info('   ')
    console.info('   ')
   
    do {
    var comienzo = read('Para comenzar  ingrese 1 ')
} while (validarComienzo(comienzo) === false);

    
    
    
    
    var GrupoA = [];
    var GrupoB = [];
    var GrupoC = [];
    var GrupoD = [];
    var GrupoE = [];
    var GrupoF = [];
    var GrupoG = [];
    var GrupoH = [];
    var r;
    var posicionesElegibles = [];
    // var myArray = registro();
    var myArray = RegistroAutomatico()

    paises = myArray[0]
    jugadores = myArray[1]
    var NombreDeSelecciones = selecciones(myArray)

    for (i = 0; i < NombreDeSelecciones.length; i++) posicionesElegibles[i] = i;
    GrupoA = sorteo(GrupoA, r, NombreDeSelecciones, posicionesElegibles)
    GrupoB = sorteo(GrupoB, r, NombreDeSelecciones, posicionesElegibles)
    GrupoC = sorteo(GrupoC, r, NombreDeSelecciones, posicionesElegibles)
    GrupoD = sorteo(GrupoD, r, NombreDeSelecciones, posicionesElegibles)
    GrupoE = sorteo(GrupoE, r, NombreDeSelecciones, posicionesElegibles)
    GrupoF = sorteo(GrupoF, r, NombreDeSelecciones, posicionesElegibles)
    GrupoG = sorteo(GrupoG, r, NombreDeSelecciones, posicionesElegibles)
    GrupoH = sorteo(GrupoH, r, NombreDeSelecciones, posicionesElegibles)


    console.info(' GRUPO A: ' + GrupoA.toString());
    console.info(' GRUPO B: ' + GrupoB.toString());
    console.info(' GRUPO C: ' + GrupoC.toString());
    console.info(' GRUPO D: ' + GrupoD.toString());
    console.info(' GRUPO E: ' + GrupoE.toString());
    console.info(' GRUPO F: ' + GrupoF.toString());
    console.info(' GRUPO G: ' + GrupoG.toString());
    console.info(' GRUPO H: ' + GrupoH.toString());
    console.info(' ');
    console.info(' Sorteo realizado');
    console.info(' ');
    console.info('comienzan los partidos de fase de grupo ');
    console.info(' ');
    
    var EstadisticasDeEquipos = []
    console.info('PARTIDOS DEL GRUPO A')
    var PrimerGrupo = GanadoresDeGrupo(GrupoA[0], GrupoA[1], GrupoA[2], GrupoA[3], jugadores, paises);
    EstadisticasDeEquipos.push(PrimerGrupo[2])
    EstadisticasDeEquipos.push(PrimerGrupo[3])
    myArray = PrimerGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO B');
    var SegundoGrupo = GanadoresDeGrupo(GrupoB[0], GrupoB[1], GrupoB[2], GrupoB[3], jugadores, paises);
    EstadisticasDeEquipos.push(SegundoGrupo[2])
    EstadisticasDeEquipos.push(SegundoGrupo[3])
    myArray = SegundoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO C');
    var TercerGrupo = GanadoresDeGrupo(GrupoC[0], GrupoC[1], GrupoC[2], GrupoC[3], jugadores, paises);;
    EstadisticasDeEquipos.push(TercerGrupo[2])
    EstadisticasDeEquipos.push(TercerGrupo[3])
    myArray = TercerGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO D');
    var CaurtoGrupo = GanadoresDeGrupo(GrupoD[0], GrupoD[1], GrupoD[2], GrupoD[3], jugadores, paises);
    EstadisticasDeEquipos.push(CaurtoGrupo[2])
    EstadisticasDeEquipos.push(CaurtoGrupo[3])
    myArray = CaurtoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO E');
    var QuintoGrupo = GanadoresDeGrupo(GrupoE[0], GrupoE[1], GrupoE[2], GrupoE[3], jugadores, paises);
    EstadisticasDeEquipos.push(QuintoGrupo[2])
    EstadisticasDeEquipos.push(QuintoGrupo[3])
    myArray = QuintoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO F')
    var SextoGrupo = GanadoresDeGrupo(GrupoF[0], GrupoF[1], GrupoF[2], GrupoF[3], jugadores, paises)
    EstadisticasDeEquipos.push(SextoGrupo[2])
    EstadisticasDeEquipos.push(SextoGrupo[3])
    myArray = SextoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO G');
    var SeptimoGrupo = GanadoresDeGrupo(GrupoG[0], GrupoG[1], GrupoG[2], GrupoG[3], jugadores, paises);
    EstadisticasDeEquipos.push(SeptimoGrupo[2])
    EstadisticasDeEquipos.push(SeptimoGrupo[3])
    myArray = SeptimoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO H');
    var OctavoGrupo = GanadoresDeGrupo(GrupoH[0], GrupoH[1], GrupoH[2], GrupoH[3], jugadores, paises);
    EstadisticasDeEquipos.push(OctavoGrupo[2])
    EstadisticasDeEquipos.push(OctavoGrupo[3])
    myArray = OctavoGrupo[4]
    console.info(' ');
    console.info('Fase de Grupos finalizada  ');
    console.info(' ');
    console.info('comienzan los partidos de OCTAVOS DE FINAL')
    var GanadorOctavos1 = OctavosDeFinal(PrimerGrupo, SegundoGrupo, jugadores, paises);
    EstadisticasDeEquipos.push(GanadorOctavos1[2])
    EstadisticasDeEquipos.push(GanadorOctavos1[3])
    var GanadorOctavos2 = OctavosDeFinal(TercerGrupo, CaurtoGrupo, jugadores, paises);
    EstadisticasDeEquipos.push(GanadorOctavos2[2])
    EstadisticasDeEquipos.push(GanadorOctavos2[3])
    var GanadorOctavos3 = OctavosDeFinal(QuintoGrupo, SextoGrupo, jugadores, paises);
    EstadisticasDeEquipos.push(GanadorOctavos3[2])
    EstadisticasDeEquipos.push(GanadorOctavos3[3])
    var GanadorOctavos4 = OctavosDeFinal(SeptimoGrupo, OctavoGrupo, jugadores, paises);
    EstadisticasDeEquipos.push(GanadorOctavos4[2])
    EstadisticasDeEquipos.push(GanadorOctavos4[3])
    console.info(' ');
    console.info('octavos de final terminados');
    console.info(' ');
    console.info('comienzan los CUARTOS DE FINAL');
    console.info(' ');

    var CuartosDeFinal1 = LlavesFinales(GanadorOctavos1, GanadorOctavos2, jugadores, paises);
    EstadisticasDeEquipos.push(CuartosDeFinal1[2])
    EstadisticasDeEquipos.push(CuartosDeFinal1[3])
    var CuartosDeFinal2 = LlavesFinales(GanadorOctavos3, GanadorOctavos4, jugadores, paises);
    EstadisticasDeEquipos.push(CuartosDeFinal2[2])
    EstadisticasDeEquipos.push(CuartosDeFinal2[3])
    console.info(' ');
    console.info('cuartos de final terminados  ');
    console.info(' ');
    console.info('comienzan las SEMIFINALES')
    console.info(' ');
    var semifinal = LlavesFinales(CuartosDeFinal1, CuartosDeFinal2, jugadores, paises);
    console.info(' ');
    console.info('Semifinales Terminadas ');
    console.info(' ');
    
    var final = Final(semifinal, jugadores, paises);
    EstadisticasDeEquipos.push(final[0])
    EstadisticasDeEquipos.push(final[1])
    EstadisticasDeEquipos.push(final[2])
    EstadisticasDeEquipos.push(final[3])
    Resultados(final, EstadisticasDeEquipos, final[5]);

    console.info(EstadisticasDeEquipos)
    console.info(final[5])

}

function GanadoresDeGrupo(selec1, selec2, selec3, selec4, jugadores, paises) {
    var team1 = 0
    var team2 = 0
    var team3 = 0
    var team4 = 0
    var golesteam1 = 0
    var golesteam2 = 0
    var golesteam3 = 0
    var golesteam4 = 0
    var golesrecibidosteam1 = 0
    var golesrecibidosteam2 = 0
    var golesrecibidosteam3 = 0
    var golesrecibidosteam4 = 0
    var faltasteam1 = 0
    var faltasteam2 = 0
    var faltasteam3 = 0
    var faltasteam4 = 0

    var PrimeroSegundoTerceroYCuarto = []
    console.info('fecha1');
    console.info(selec1 + ' vs ' + selec2);

    var equipos = partidos(selec1, selec2, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team1 = team1 + equipo1[0];
    golesteam1 = golesteam1 + equipo1[1];
    faltasteam1 = faltasteam1 + equipo1[2];
    golesrecibidosteam1 = golesrecibidosteam1 + equipo2[1];
    team2 = team2 + equipo2[0];
    golesteam2 = golesteam2 + equipo2[1];
    golesrecibidosteam2 = golesrecibidosteam2 + equipo1[1];
    faltasteam2 = faltasteam2 + equipo2[2];

    console.info(selec3 + ' vs ' + selec4);
    var equipos = partidos(selec3, selec4, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team3 = team3 + equipo1[0];
    golesteam3 = golesteam3 + equipo1[1];
    golesrecibidosteam3 = golesrecibidosteam3 + equipo2[1];
    faltasteam3 = faltasteam3 + equipo1[2];
    team4 = team4 + equipo2[0];
    golesteam4 = golesteam4 + equipo2[1];
    golesrecibidosteam4 = golesrecibidosteam4 + equipo1[1];
    faltasteam4 = faltasteam4 + equipo2[2];

    console.info(' TABLA DE PUNTOS');
    console.info(' ' + selec1 + ' ' + team1);
    console.info(' ' + selec2 + ' ' + team2);
    console.info(' ' + selec3 + ' ' + team3);
    console.info(' ' + selec4 + ' ' + team4);

    console.info('fecha2');
    console.info(selec1 + ' vs ' + selec3);

    var equipos = partidos(selec1, selec3, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team1 = team1 + equipo1[0];
    golesteam1 = golesteam1 + equipo1[1];
    golesrecibidosteam1 = golesrecibidosteam1 + equipo2[1];
    faltasteam1 = faltasteam1 + equipo1[2];
    team3 = team3 + equipo2[0];
    golesteam3 = golesteam3 + equipo2[1];
    golesrecibidosteam3 = golesrecibidosteam3 + equipo1[1];
    faltasteam3 = faltasteam3 + equipo2[2];
    console.info(selec2 + ' vs ' + selec4);

    var equipos = partidos(selec2, selec4, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team2 = team2 + equipo1[0];
    golesteam2 = golesteam2 + equipo1[1];
    golesrecibidosteam2 = golesrecibidosteam2 + equipo2[1];
    faltasteam2 = faltasteam2 + equipo1[2];
    team4 = team4 + equipo2[0];
    golesteam4 = golesteam4 + equipo2[1];
    golesrecibidosteam4 = golesrecibidosteam4 + equipo1[1];
    faltasteam4 = faltasteam4 + equipo2[2];

    console.info(' TABLA DE PUNTOS');
    console.info(' ' + selec1 + ' ' + team1);
    console.info(' ' + selec2 + ' ' + team2);
    console.info(' ' + selec3 + ' ' + team3);
    console.info(' ' + selec4 + ' ' + team4);

    console.info('fecha3');
    console.info(selec1 + ' vs ' + selec4);

    var equipos = partidos(selec1, selec4, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team1 = team1 + equipo1[0];
    golesteam1 = golesteam1 + equipo1[1];
    golesrecibidosteam1 = golesrecibidosteam1 + equipo2[1];
    faltasteam1 = faltasteam1 + equipo1[2];
    team4 = team4 + equipo2[0];
    golesteam4 = golesteam4 + equipo2[1];
    golesrecibidosteam4 = golesrecibidosteam4 + equipo1[1];
    faltasteam4 = faltasteam4 + equipo2[2];
    console.info(selec2 + ' vs ' + selec3);

    var equipos = partidos(selec2, selec3, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team2 = team2 + equipo1[0];
    golesteam2 = golesteam2 + equipo1[1];
    golesrecibidosteam2 = golesrecibidosteam2 + equipo2[1];
    faltasteam2 = faltasteam2 + equipo1[2];
    team3 = team3 + equipo2[0];
    golesteam3 = golesteam3 + equipo2[1];
    golesrecibidosteam3 = golesrecibidosteam3 + equipo1[1];
    faltasteam3 = faltasteam3 + equipo2[2];

    console.info(' TABLA DE PUNTOS');
    console.info(' ' + selec1 + ' ' + team1);
    console.info(' ' + selec2 + ' ' + team2);
    console.info(' ' + selec3 + ' ' + team3);
    console.info(' ' + selec4 + ' ' + team4);

    var ganadores = GanadorDeGrupo(team1, team2, golesteam1, golesteam2, faltasteam1, faltasteam2, selec1, selec2, golesrecibidosteam1, golesrecibidosteam2);
    var ganadores1 = GanadorDeGrupo(team3, team4, golesteam3, golesteam4, faltasteam3, faltasteam4, selec3, selec4, golesrecibidosteam3, golesrecibidosteam4);

    var gan1 = ganadores[0];
    var gan2 = ganadores1[0];
    var per1 = ganadores[1];
    var per2 = ganadores1[1];

    var ganadores3 = GanadorDeGrupo(gan1[0], gan2[0], gan1[2], gan2[2], gan1[3], gan2[3], gan1[1], gan2[1], gan1[4], gan2[4]);
    var gan3 = ganadores3[0];
    var per3 = ganadores3[1];

    var ganadores4 = GanadorDeGrupo(per1[0], per2[0], per1[2], per2[2], per1[3], per2[3], per1[1], per2[1], per1[4], per2[4]);
    var gan4 = ganadores4[0];
    var per4 = ganadores4[1];
    var ganadores5 = GanadorDeGrupo(per3[0], gan4[0], per3[2], gan4[2], per3[3], gan4[3], per3[1], gan4[1], per3[4], gan4[4]);
    var gan5 = ganadores5[0];
    var per5 = ganadores5[1]
    var equipo1 = {}
    equipo1['nombre'] = gan3[1]
    equipo1['goles'] = gan3[2]
    equipo1['golesencontra'] = gan3[4]
    var equipo2 = {}
    equipo2['nombre'] = gan5[1]
    equipo2['goles'] = gan5[2]
    equipo2['golesencontra'] = gan5[4]
    var equipo3 = {}
    equipo3['nombre'] = per5[1]
    equipo3['goles'] = per5[2]
    equipo3['golesencontra'] = per5[4]
    var equipo4 = {}
    equipo4['nombre'] = per4[1]
    equipo4['goles'] = per4[2]
    equipo4['golesencontra'] = per4[4]

    PrimeroSegundoTerceroYCuarto.push(equipo1);
    PrimeroSegundoTerceroYCuarto.push(equipo2);
    PrimeroSegundoTerceroYCuarto.push(equipo3);
    PrimeroSegundoTerceroYCuarto.push(equipo4);
    PrimeroSegundoTerceroYCuarto.push(equipos[2]);
    PrimeroSegundoTerceroYCuarto.push(equipos[3]);

    

    console.info(equipo1);
    console.info(equipo2);
    return PrimeroSegundoTerceroYCuarto
}
function GanadorDeGrupo(team1, team2, goles1, goles2, faltas1, faltas2, selec1, selec2, golesrecibidos1, golesrecibidos2) {
    var perdedor = [];
    var ganador = [];
    var resultado = [];

    if (team1 > team2) {
        ganador.push(team1);
        ganador.push(selec1);
        ganador.push(goles1);
        ganador.push(faltas1);
        ganador.push(golesrecibidos1);
        perdedor.push(team2);
        perdedor.push(selec2);
        perdedor.push(goles2);
        perdedor.push(faltas2);
        perdedor.push(golesrecibidos2);
        resultado.push(ganador);
        resultado.push(perdedor);
        return resultado;
    }
    else if (team2 > team1) {
        ganador.push(team2);
        ganador.push(selec2);
        ganador.push(goles2);
        ganador.push(faltas2);
        ganador.push(golesrecibidos2);
        perdedor.push(team1);
        perdedor.push(selec1);
        perdedor.push(goles1);
        perdedor.push(faltas1);
        perdedor.push(golesrecibidos1);
        resultado.push(ganador);
        resultado.push(perdedor);
        return resultado;
    }
    else if (team1 = team2) {

        if (goles1 > goles2) {
            ganador.push(team1);
            ganador.push(selec1);
            ganador.push(goles1);
            ganador.push(faltas1);
            ganador.push(golesrecibidos1);
            perdedor.push(team2);
            perdedor.push(selec2);
            perdedor.push(goles2);
            perdedor.push(faltas2);
            perdedor.push(golesrecibidos2);
            resultado.push(ganador);
            resultado.push(perdedor);
            return resultado;

        }
        else if (goles1 < goles2) {
            ganador.push(team2);
            ganador.push(selec2);
            ganador.push(goles2);
            ganador.push(faltas2);
            ganador.push(golesrecibidos2);
            perdedor.push(team1);
            perdedor.push(selec1);
            perdedor.push(goles1);
            perdedor.push(faltas1);
            perdedor.push(golesrecibidos1);
            resultado.push(ganador);
            resultado.push(perdedor);
            return resultado;

        }
        else {

            if (faltas1 < faltas2) {
                ganador.push(team1);
                ganador.push(selec1);
                ganador.push(goles1);
                ganador.push(faltas1);
                ganador.push(golesrecibidos1);
                perdedor.push(team2);
                perdedor.push(selec2);
                perdedor.push(goles2);
                perdedor.push(faltas2);
                perdedor.push(golesrecibidos2);

                resultado.push(ganador);
                resultado.push(perdedor);
                return resultado;
            }
            else if (faltas1 > faltas2) {
                ganador.push(team2);
                ganador.push(selec2);
                ganador.push(goles2);
                ganador.push(faltas2);
                ganador.push(golesrecibidos2);
                perdedor.push(team1);
                perdedor.push(selec1);
                perdedor.push(goles1);
                perdedor.push(faltas1);
                perdedor.push(golesrecibidos1);
                resultado.push(ganador);
                resultado.push(perdedor);
                return resultado;

            }
            else {
                ganador.push(team1);
                ganador.push(selec1);
                ganador.push(goles1);
                ganador.push(faltas1);
                ganador.push(golesrecibidos1);
                perdedor.push(team2);
                perdedor.push(selec2);
                perdedor.push(goles2);
                perdedor.push(faltas2);
                perdedor.push(golesrecibidos2);

                resultado.push(ganador);
                resultado.push(perdedor);
                return resultado;
            }
        }

    }

}

function validarNumero(num) {
    if (isNaN(parseInt(num)) === true || parseInt(num) < 0) {
        return false;
    }

    return true;
};
function validarNumeroDeSelecciones(num) {
    if (isNaN(parseInt(num)) === true || parseInt(num) <= 0 || parseInt(num) > 32) {
        return false;
    }

    return true;
};

function validarComienzo(num) {
    if (isNaN(parseInt(num)) === true || parseInt(num) <= 0 || parseInt(num) > 1) {
        return false;
    }

    return true;
};



function OctavosDeFinal(Lista1, Lista2, jugadores, paises) {

    var valores1 = Lista1[0];
    var valores2 = Lista2[1];
    var valores3 = Lista2[0];
    var valores4 = Lista1[1];
    var golesequipo1 = valores1.goles
    var golesequipo2 = valores2.goles
    var golesequipo3 = valores3.goles
    var golesequipo4 = valores4.goles
    var golesEncontra1 = valores1.golesencontra
    var golesEncontra2 = valores2.golesencontra
    var golesEncontra3 = valores3.golesencontra
    var golesEncontra4 = valores4.golesencontra
    var equipo1 = {}
    var equipo2 = {}
    var equipo3 = {}
    var equipo4 = {}
    var equipos = []

    console.info(valores1.nombre + ' ' + 'vs' + ' ' + valores2.nombre);
    var selec1y2 = PartidosFinales(valores1, valores2, golesequipo1, golesequipo2, golesEncontra1, golesEncontra2, jugadores, paises)

    equipo1 = selec1y2[0]
    equipo2 = selec1y2[1]

    console.info(valores4.nombre + ' ' + 'vs' + ' ' + valores3.nombre);
    var selec3y4 = PartidosFinales(valores3, valores4, golesequipo3, golesequipo4, golesEncontra3, golesEncontra4, jugadores, paises)
    equipo3 = selec3y4[0]
    equipo4 = selec3y4[1]

    equipos.push(equipo1)
    equipos.push(equipo3)
    equipos.push(equipo2)
    equipos.push(equipo4)
    equipos.push(paises)
    equipos.push(jugadores)
    console.info(jugadores)
    return equipos
}
function LlavesFinales(Lista1, Lista2, jugadores, paises) {

    var valores1 = Lista1[0]
    var valores2 = Lista1[1]
    var valores3 = Lista2[1]
    var valores4 = Lista2[0]
    var golesequipo1 = valores1.goles
    var golesequipo2 = valores2.goles
    var golesequipo3 = valores3.goles
    var golesequipo4 = valores4.goles
    var golesEncontra1 = valores1.golesencontra
    var golesEncontra2 = valores2.golesencontra
    var golesEncontra3 = valores3.golesencontra
    var golesEncontra4 = valores4.golesencontra
    var equipo1 = {}
    var equipo2 = {}
    var equipo3 = {}
    var equipo4 = {}
    var equipos = []

    console.info(valores1.nombre + ' ' + 'vs' + ' ' + valores4.nombre);
    var selec1y4 = PartidosFinales(valores1, valores4, golesequipo1, golesequipo4, golesEncontra1, golesEncontra4, jugadores, paises)

    equipo1 = selec1y4[0]
    equipo4 = selec1y4[1]
    console.info(valores2.nombre + ' ' + 'vs' + ' ' + valores3.nombre);
    var selec2y3 = PartidosFinales(valores2, valores3, golesequipo2, golesequipo3, golesEncontra2, golesEncontra3, jugadores, paises)

    equipo2 = selec2y3[0]
    equipo3 = selec2y3[1]

    equipos.push(equipo1);
    equipos.push(equipo2);
    equipos.push(equipo3);
    equipos.push(equipo4);
    equipos.push(paises);
    equipos.push(jugadores);
    console.info(jugadores)
    return equipos
}
function Final(finalista, jugadores, paises) {

    valores1 = finalista[0];
    valores2 = finalista[1];
    valores3 = finalista[2];
    valores4 = finalista[3];
    var golesequipo1 = valores1.goles
    var golesequipo2 = valores2.goles
    var golesequipo3 = valores3.goles
    var golesequipo4 = valores4.goles
    var golesEncontra1 = valores1.golesencontra
    var golesEncontra2 = valores2.golesencontra
    var golesEncontra3 = valores3.golesencontra
    var golesEncontra4 = valores4.golesencontra
    var equipo1 = {}
    var equipo2 = {}
    var equipo3 = {}
    var equipo4 = {}
    var equipos = []

    console.info('TERCER Y CUARTO PUESTO')
    console.info(' ');
    console.info(valores3.nombre + ' ' + 'vs' + ' ' + valores4.nombre);
    var selec3y4 = PartidosFinales(valores3, valores4, golesequipo3, golesequipo4, golesEncontra3, golesEncontra4, jugadores, paises)
    console.info(' ');
    equipo3 = selec3y4[0]
    equipo4 = selec3y4[1]
    console.info(' ');
    console.info('FINAL')
    console.info(' ');
    console.info(valores1.nombre + ' ' + 'vs' + ' ' + valores2.nombre);
    var selec1y2 = PartidosFinales(valores1, valores2, golesequipo1, golesequipo2, golesEncontra1, golesEncontra2, jugadores, paises)
    console.info(' ');
    equipo1 = selec1y2[0]
    equipo2 = selec1y2[1]

    equipos.push(equipo1)
    equipos.push(equipo2)
    equipos.push(equipo3)
    equipos.push(equipo4)
    equipos.push(paises)
    equipos.push(jugadores)
    return equipos
}

function crearPais(id, nombre, continente, Federacion, cantidadDeParticipaciones) {
    var nuevoPais = {};
    nuevoPais["id"] = id;
    nuevoPais["nombre"] = nombre;
    nuevoPais["continente"] = continente;
    nuevoPais["Federacion"] = Federacion;
    nuevoPais["cantidadDeParticipaciones"] = cantidadDeParticipaciones;
    return nuevoPais;
}

function crearJugador(id, nombre, edad, pais, altura, posicion) {
    var nuevoJugador = {};
    nuevoJugador["id"] = id;
    nuevoJugador["nombre"] = nombre;
    nuevoJugador["edad"] = edad;
    nuevoJugador["pais"] = pais;
    nuevoJugador["altura"] = altura;
    nuevoJugador["posicion"] = posicion;
    nuevoJugador["goles"] = 0

    return nuevoJugador;
}

function mostrarPaises(listaPaises) {
    listaPaises.forEach(pais => {
        console.info(pais["id"] + " - " + pais["nombre"]);
    });
}
function registro() {

    var retorno = [];
    var paises = [];

    for (i = 1; i <= 32; i++) {
        var nombrePais = read("Ingrese el nombre del pais: ");
        var continentePais = read("Ingrese el continente del pais: ");
        var Federacion = read("Ingrese el federacion del pais: ");
        do {
            var cantidadDeParticipaciones = parseInt(read("Ingrese participaciones del pais: "));
        } while (validarNumero(cantidadDeParticipaciones) === false);
        var nuevoPais = crearPais(i, nombrePais, continentePais, Federacion, cantidadDeParticipaciones);
        paises.push(nuevoPais);
        console.clear();
    }
    var jugadores = [];
    for (i = 1; i <= 64; i++) {
        var nombre = read("Ingrese un nombre de usuario: ");
        do {
            var edad = read("Ingrese edad del jugador : ");
        } while (validarNumero(edad) === false);
        do {
            var altura = read("Ingrese altura del jugador : ");
        } while (validarNumero(altura) === false);

        var posicion = read("Ingrese posicion del jugador : ");

        console.info("Seleccione un pais: ");
        mostrarPaises(paises);
        do {
            var pais = parseInt(read(""));
        } while (validarNumero(pais) === false);
        var nuevojugador = crearJugador(i, nombre, edad, pais, altura, posicion);
        jugadores.push(nuevojugador);
        console.clear();
    }

    retorno.push(paises);
    retorno.push(jugadores);
    return retorno
}
function selecciones(registro) {

    var nombres = [];
    var selecciones = registro[0];

    for (i = 0; i < selecciones.length; i++) {

        nombres.push((selecciones[i].nombre));
    }
    return nombres;
}
function partidos(selec1, selec2, jugadores, paises) {
    var equipo1 = [];
    var equipo2 = [];
    var equipos = [];
    var team1 = 0;
    var team2 = 0;



    do {
        var pais1 = parseInt(read(' goles de ' + selec1 + ' '));
    } while (validarNumero(pais1) === false);
    jugadores = golesdejugadores(pais1, paises, selec1, jugadores)

    do {
        var faltas1 = parseInt(read(' faltas de  ' + selec1 + ' '));
    } while (validarNumero(faltas1) === false);
    do {
        var pais2 = parseInt(read(' goles de ' + selec2 + ' '));
    } while (validarNumero(pais2) === false);
    jugadores = golesdejugadores(pais2, paises, selec2, jugadores)
    do {
        var faltas2 = parseInt(read(' faltas de  ' + selec2 + ' '));
    } while (validarNumero(faltas2) === false);

    if (pais1 > pais2) {
        team1 = team1 + 3;
        equipo1.push(team1);
        equipo1.push(pais1);
        equipo1.push(faltas1);

        team2 = team2 + 0
        equipo2.push(team2);
        equipo2.push(pais2);
        equipo2.push(faltas2);
        equipos.push(equipo1);
        equipos.push(equipo2);
    }

    else if (pais1 < pais2) {
        team2 = team2 + 3;
        equipo2.push(team2);
        equipo2.push(pais2);
        equipo2.push(faltas2);

        team1 = team1 + 0;
        equipo1.push(team1);
        equipo1.push(pais1);
        equipo1.push(faltas1);
        equipos.push(equipo1);
        equipos.push(equipo2);
    }

    else {
        team2 = team2 + 1;
        equipo2.push(team2);
        equipo2.push(pais2);
        equipo2.push(faltas2);

        team1 = team1 + 1;
        equipo1.push(team1);
        equipo1.push(pais1);
        equipo1.push(faltas1);
    }


    equipos.push(equipo1);
    equipos.push(equipo2);
    equipos.push(jugadores)
    equipos.push(paises)

    return equipos;
}
function Resultados(Finalistas, EstadisticasDeEquipos, Jugadores) {

    console.info('el campeon del mundo es ' + ':' + Finalistas[0].nombre)
    console.info('el segundo es ' + ':' + Finalistas[1].nombre)
    console.info('el tercero es ' + ':' + Finalistas[2].nombre)
    console.info('el cuarto es ' + ':' + Finalistas[3].nombre)
    var GolesEnContra = SeleccionConMasGolesRecibidos(EstadisticasDeEquipos)
    var Goles = SeleccionConMasGoles(EstadisticasDeEquipos)
    var golesaFavor = SeleccionConMasGolesAfavor(EstadisticasDeEquipos)
    var goleador = GoleadorDelCampeonato(Jugadores)

    console.info('la seleccion con mas goles realizados es ' + ' : ' + Goles.nombre + ' ' + 'con' + ' ' + Goles.goles + ' ' + 'goles')
    console.info('la seleccion con mas goles en contra es ' + ' : ' + GolesEnContra.nombre + ' ' + 'con' + ' ' + GolesEnContra.golesencontra + ' ' + 'goles')
    console.info('la seleccion con mas goles a favor es ' + ' : ' + golesaFavor[0] + ' ' + 'con' + ' ' + golesaFavor[1] + ' ' + 'goles')
    console.info('el goleador del cameponato es  ' + ' : ' + goleador.nombre + ' ' + 'con' + ' ' + goleador.goles + ' ' + 'goles')
}
function SeleccionConMasGoles(estadisticas) {
    var mayorCantidadDeGoles = 0
    var mayorIndice;

    for (i = 0; i < estadisticas.length; i++) {
        if (estadisticas[i].goles > mayorCantidadDeGoles) {
            mayorCantidadDeGoles = estadisticas[i].goles;
            mayorIndice = estadisticas[i]
        }
    }
    return mayorIndice;
}

function SeleccionConMasGolesRecibidos(estadisticas) {
    var mayorCantidadDeGoles = 0
    var mayorIndice;

    for (i = 0; i < estadisticas.length; i++) {
        if (estadisticas[i].golesencontra > mayorCantidadDeGoles) {
            mayorCantidadDeGoles = estadisticas[i].golesencontra;
            mayorIndice = estadisticas[i]
        }
    }

    return mayorIndice;
}
function SeleccionConMasGolesAfavor(estadisticas) {
    var GolesAfavor = 0
    var mayorIndice;
    var datos = []
    for (i = 0; i < estadisticas.length; i++) {

        var diferenciaDeGoles = estadisticas[i].goles - estadisticas[i].golesencontra
        if (diferenciaDeGoles > GolesAfavor) {
            GolesAfavor = diferenciaDeGoles
            mayorIndice = estadisticas[i].nombre
        }
    }
    datos.push(mayorIndice)
    datos.push(GolesAfavor)
    return datos
}

function GoleadorDelCampeonato(Jugadores) {
    var mayorCantidadDeGoles = 0
    var mayorIndice;

    for (i = 0; i < Jugadores.length; i++) {
        if (Jugadores[i].goles > mayorCantidadDeGoles) {
            mayorCantidadDeGoles = Jugadores[i].goles;
            mayorIndice = Jugadores[i]
        }
    }
    return mayorIndice;
}






function golesdejugadores(goles, paises, selec1, jugadores) {

    for (i = 1; i <= goles; i++) {

        for (e = 0; e < paises.length; e++) {

            if (paises[e].nombre === selec1) {

                jugadores.forEach(jug => {

                    if (paises[e].id === jug.pais) {
                        console.info(jug.id + ' ' + jug.nombre)
                    }
                });
                do {
                    var NombreDelJugador = parseInt(read("ingrese el numero relacionado al Jugador "));
                } while (validarNumero(NombreDelJugador) === false);

                jugadores.forEach(juga => {
                    if (NombreDelJugador === juga.id) {

                        juga.goles = juga.goles + 1


                    }

                });


         }   
        }



    }

    return jugadores
}

function sorteo(Grupo, r, NombreDeSelecciones, posicionesElegibles) {

    for (i = 0; i < 4; i++) {
        r = Math.floor(Math.random() * posicionesElegibles.length);
        Grupo.push(NombreDeSelecciones[posicionesElegibles[r]]);
        posicionesElegibles.splice(r, 1);
    }
    return Grupo
}

function PartidosFinales(valores1, valores2, golesequipo1, golesequipo2, golesEncontra1, golesEncontra2, jugadores, paises) {
    var equipo1 = {}
    var equipo2 = {}
    var equipos = []


    do {
        var golesteam1 = parseInt(read(' goles de ' + valores1.nombre + ' '));
    } while (validarNumero(golesteam1) === false);
    jugadores = golesdejugadores(golesteam1, paises, valores1.nombre, jugadores)
    do {
        var golesteam2 = parseInt(read(' goles de ' + valores2.nombre + ' '));
    } while (validarNumero(golesteam2) === false);
    jugadores = golesdejugadores(golesteam2, paises, valores2.nombre, jugadores)

    golesequipo1 = golesequipo1 + golesteam1
    golesequipo2 = golesequipo2 + golesteam2
    golesEncontra1 = golesEncontra1 + golesteam2
    golesEncontra2 = golesEncontra2 + golesteam1

    if (golesteam1 > golesteam2) {

        equipo1['nombre'] = valores1.nombre
        equipo1['goles'] = golesequipo1
        equipo1['golesencontra'] = golesEncontra1
        equipo2['nombre'] = valores2.nombre
        equipo2['goles'] = golesequipo2
        equipo2['golesencontra'] = golesEncontra2

    }
    else if (golesteam1 < golesteam2) {

        equipo1['nombre'] = valores2.nombre
        equipo1['goles'] = golesequipo2
        equipo1['golesencontra'] = golesEncontra2
        equipo2['nombre'] = valores1.nombre
        equipo2['goles'] = golesequipo1
        equipo2['golesencontra'] = golesEncontra1

    }
    else {
        do {
            do {
                var penalesteam1 = parseInt(read(' penales de ' + valores1.nombre + ' '));
            } while (validarNumero(penalesteam1) === false);
            do {
                var penalesteam2 = parseInt(read('penales de ' + valores2.nombre + ' '));
            } while (validarNumero(penalesteam2) === false);
        } while ((penalesteam1 == penalesteam2));

        if (penalesteam1 > penalesteam2) {
            equipo1['nombre'] = valores1.nombre
            equipo1['goles'] = golesequipo1
            equipo1['golesencontra'] = golesEncontra1
            equipo2['nombre'] = valores2.nombre
            equipo2['goles'] = golesequipo2
            equipo2['golesencontra'] = golesEncontra2
        }
        else if (penalesteam1 < penalesteam2) {

            equipo1['nombre'] = valores2.nombre
            equipo1['goles'] = golesequipo2
            equipo1['golesencontra'] = golesEncontra2
            equipo2['nombre'] = valores1.nombre
            equipo2['goles'] = golesequipo1
            equipo2['golesencontra'] = golesEncontra1

        }

    }
    equipos.push(equipo1)
    equipos.push(equipo2)
    equipos.push(paises)
    equipos.push(jugadores)


    return equipos
}
function RegistroAutomatico() {

    var Paisesyjugadoers = []
    var Paises = []

    var Qatar = {}
    var Ecuador = {}
    var Senegal = {}
    var PaísesBajos = {}
    var Inglaterra = {}
    var Irán = {}
    var EstadosUnidos = {}
    var Gales = {}
    var Argentina = {}
    var ArabiaSaudita = {}
    var México = {}
    var Polonia = {}
    var Ghana = {}
    var CostaRica = {}
    var Francia = {}
    var Australia = {}
    var Dinamarca = {}
    var Túnez = {}
    var España = {}
    var Serbia = {}
    var Alemania = {}
    var Japón = {}
    var Bélgica = {}
    var Canadá = {}
    var Marruecos = {}
    var Croacia = {}
    var Brasil = {}
    var CoreaDelSur = {}
    var Suiza = {}
    var Camerún = {}
    var Portugal = {}
    var Uruguay = {}


    Qatar["id"] = 1
    Qatar["nombre"] = 'Qatar'
    Qatar["continente"] = 'Asia'
    Qatar["Federacion"] = 'QFA'
    Qatar["cantidadDeParticipaciones"] = 2

    Ecuador["id"] = 2
    Ecuador["nombre"] = 'Ecuador'
    Ecuador["continente"] = 'América del Sur'
    Ecuador["Federacion"] = 'FEF'
    Ecuador["cantidadDeParticipaciones"] = 2

    Senegal["id"] = 3
    Senegal["nombre"] = 'Senegal'
    Senegal["continente"] = 'África'
    Senegal["Federacion"] = 'FSF'
    Senegal["cantidadDeParticipaciones"] = 3

    PaísesBajos["id"] = 4
    PaísesBajos["nombre"] = 'Países Bajos'
    PaísesBajos["continente"] = 'Europa'
    PaísesBajos["Federacion"] = 'KNVB'
    PaísesBajos["cantidadDeParticipaciones"] = 3

    Inglaterra["id"] = 5
    Inglaterra["nombre"] = 'Inglaterra'
    Inglaterra["continente"] = 'Europa'
    Inglaterra["Federacion"] = 'THEFA'
    Inglaterra["cantidadDeParticipaciones"] = 4

    Irán["id"] = 6
    Irán["nombre"] = 'Irán'
    Irán["continente"] = 'Asia'
    Irán["Federacion"] = 'FFIRI'
    Irán["cantidadDeParticipaciones"] = 4

    EstadosUnidos["id"] = 7
    EstadosUnidos["nombre"] = 'Estados Unidos'
    EstadosUnidos["continente"] = 'América del Norte'
    EstadosUnidos["Federacion"] = 'USSF'
    EstadosUnidos["cantidadDeParticipaciones"] = 5

    Gales["id"] = 8
    Gales["nombre"] = 'Gales'
    Gales["continente"] = 'Europa'
    Gales["Federacion"] = 'FAW'
    Gales["cantidadDeParticipaciones"] = 5

    Argentina["id"] = 9
    Argentina["nombre"] = 'Argentina'
    Argentina["continente"] = 'América del Sur'
    Argentina["Federacion"] = 'AFA'
    Argentina["cantidadDeParticipaciones"] = 6

    ArabiaSaudita["id"] = 10
    ArabiaSaudita["nombre"] = 'ArabiaSaudita'
    ArabiaSaudita["continente"] = 'Asia'
    ArabiaSaudita["Federacion"] = 'FFAS'
    ArabiaSaudita["cantidadDeParticipaciones"] = 6

    México["id"] = 11
    México["nombre"] = 'México'
    México["continente"] = 'América del Norte'
    México["Federacion"] = 'FMF'
    México["cantidadDeParticipaciones"] = 7

    Polonia["id"] = 12
    Polonia["nombre"] = 'Polonia'
    Polonia["continente"] = 'Europa'
    Polonia["Federacion"] = 'PZPN'
    Polonia["cantidadDeParticipaciones"] = 7

    Francia["id"] = 13
    Francia["nombre"] = 'Francia'
    Francia["continente"] = 'Europa'
    Francia["Federacion"] = 'FFF'
    Francia["cantidadDeParticipaciones"] = 8

    Australia["id"] = 14
    Australia["nombre"] = 'Australia'
    Australia["continente"] = 'Oceanía'
    Australia["Federacion"] = 'FFA'
    Australia["cantidadDeParticipaciones"] = 8


    Dinamarca["id"] = 15
    Dinamarca["nombre"] = 'Dinamarca'
    Dinamarca["continente"] = 'Europa'
    Dinamarca["Federacion"] = 'DBU'
    Dinamarca["cantidadDeParticipaciones"] = 9

    Túnez["id"] = 16
    Túnez["nombre"] = 'Túnez'
    Túnez["continente"] = 'África'
    Túnez["Federacion"] = 'FTF'
    Túnez["cantidadDeParticipaciones"] = 9

    España["id"] = 17
    España["nombre"] = 'España'
    España["continente"] = 'Europa'
    España["Federacion"] = 'RFEF'
    España["cantidadDeParticipaciones"] = 10

    CostaRica["id"] = 18
    CostaRica["nombre"] = 'Costa Rica'
    CostaRica["continente"] = 'Europa'
    CostaRica["Federacion"] = 'PZPN'
    CostaRica["cantidadDeParticipaciones"] = 7

    Alemania["id"] = 19
    Alemania["nombre"] = 'Alemania'
    Alemania["continente"] = 'Europa'
    Alemania["Federacion"] = 'FCRF'
    Alemania["cantidadDeParticipaciones"] = 11

    Japón["id"] = 20
    Japón["nombre"] = 'Japón'
    Japón["continente"] = 'Asia'
    Japón["Federacion"] = 'JFA'
    Japón["cantidadDeParticipaciones"] = 11

    Bélgica["id"] = 21
    Bélgica["nombre"] = 'Bélgica'
    Bélgica["continente"] = 'Europa'
    Bélgica["Federacion"] = 'KBVB / URBSFA'
    Bélgica["cantidadDeParticipaciones"] = 12

    Canadá["id"] = 22
    Canadá["nombre"] = 'Canadá'
    Canadá["continente"] = 'América del Norte'
    Canadá["Federacion"] = 'CSA'
    Canadá["cantidadDeParticipaciones"] = 12

    Marruecos["id"] = 23
    Marruecos["nombre"] = 'Marruecos'
    Marruecos["continente"] = 'África'
    Marruecos["Federacion"] = 'FRMF'
    Marruecos["cantidadDeParticipaciones"] = 13

    Croacia["id"] = 24
    Croacia["nombre"] = 'Croacia'
    Croacia["continente"] = 'Europa'
    Croacia["Federacion"] = 'HNS'
    Croacia["cantidadDeParticipaciones"] = 13

    Brasil["id"] = 25
    Brasil["nombre"] = 'Brasil'
    Brasil["continente"] = 'América del Sur'
    Brasil["Federacion"] = 'CBF'
    Brasil["cantidadDeParticipaciones"] = 14

    Serbia["id"] = 26
    Serbia["nombre"] = 'Serbia'
    Serbia["continente"] = 'América del Norte'
    Serbia["Federacion"] = 'FMF'
    Serbia["cantidadDeParticipaciones"] = 7

    Suiza["id"] = 27
    Suiza["nombre"] = 'Suiza'
    Suiza["continente"] = 'Europa'
    Suiza["Federacion"] = 'ASF - SFV'
    Suiza["cantidadDeParticipaciones"] = 15

    Camerún["id"] = 28
    Camerún["nombre"] = 'Camerún'
    Camerún["continente"] = 'África'
    Camerún["Federacion"] = 'CAF'
    Camerún["cantidadDeParticipaciones"] = 15

    Portugal["id"] = 29
    Portugal["nombre"] = 'Portugal'
    Portugal["continente"] = 'Europa'
    Portugal["Federacion"] = 'FPF'
    Portugal["cantidadDeParticipaciones"] = 16

    Ghana["id"] = 30
    Ghana["nombre"] = 'Ghana'
    Ghana["continente"] = 'América del Norte'
    Ghana["Federacion"] = 'FCRF'
    Ghana["cantidadDeParticipaciones"] = 10

    Uruguay["id"] = 31
    Uruguay["nombre"] = 'Uruguay'
    Uruguay["continente"] = 'América del Sur'
    Uruguay["Federacion"] = 'FUF'
    Uruguay["cantidadDeParticipaciones"] = 17


    CoreaDelSur["id"] = 32
    CoreaDelSur["nombre"] = 'CoreaDelSur'
    CoreaDelSur["continente"] = 'Europa'
    CoreaDelSur["Federacion"] = 'SRB'
    CoreaDelSur["cantidadDeParticipaciones"] = 14



    Paises.push(Qatar)
    Paises.push(Ecuador)
    Paises.push(Senegal)
    Paises.push(PaísesBajos)
    Paises.push(Inglaterra)
    Paises.push(Irán)
    Paises.push(EstadosUnidos)
    Paises.push(Gales)
    Paises.push(Argentina)
    Paises.push(ArabiaSaudita)
    Paises.push(México)
    Paises.push(Polonia)
    Paises.push(Francia)
    Paises.push(Australia)
    Paises.push(Dinamarca)
    Paises.push(Túnez)
    Paises.push(España)
    Paises.push(CostaRica)
    Paises.push(Alemania)
    Paises.push(Japón)
    Paises.push(Bélgica)
    Paises.push(Canadá)
    Paises.push(Marruecos)
    Paises.push(Croacia)
    Paises.push(Brasil)
    Paises.push(Serbia)
    Paises.push(Suiza)
    Paises.push(Camerún)
    Paises.push(Portugal)
    Paises.push(Ghana)
    Paises.push(Uruguay)
    Paises.push(CoreaDelSur)


    var jugadores = []

    var Almoez_Ali = {}
    var Hassan_AlHaidos = {}
    var Enner_Valencia = {}
    var Christian_Noboa = {}
    var Ibrahima_Mbaye = {}
    var Sadio_Mané = {}
    var Frenkie_de_Jong = {}
    var Marten_de_Roon = {}
    var Jarrod_Bowen = {}
    var Jordan_Henderson = {}
    var Ramin_Rezaeian = {}
    var Ahmad_Nourollahi = {}
    var Sean_Johnson = {}
    var Paul_Arriola = {}
    var Joe_Allen = {}
    var Harry_Wilson = {}
    var Lionel_Messi = {}
    var Paulo_Dybala = {}
    var Fawaz_AlQarni = {}
    var Sultan_alGhanam = {}
    var Miguel_Layún = {}
    var Rodolfo_Pizarro = {}
    var Bartosz_Salamon = {}
    var Bartosz_Bereszyński = {}
    var Kylian_Mbappé = {}
    var Aurélien_Tchouaméni = {}
    var Brad_Smith = {}
    var Adam_Federici = {}
    var Jannik_Vestergaard = {}
    var Mathias_Jørgensen = {}
    var Taha_Yassine_Khenissi = {}
    var Yassine_Chikhaoui = {}
    var Raúl_Albiol = {}
    var Dani_Ceballos = {}
    var Bryan_Oviedo = {}
    var Celso_Borges = {}
    var Ter_Stegen = {}
    var Joshua_Kimmich = {}
    var Gen_Shōji = {}
    var Ken_Matsubara = {}
    var Michy_Batshuayi = {}
    var Dennis_Praet = {}
    var Ashtone_Morgan = {}
    var Tosaint_Ricketts = {}
    var Omar_El_Kaddouri = {}
    var Manuel_da_Costa = {}
    var Ivan_Perišić = {}
    var Domagoj_Vida = {}
    var Philippe_Coutinho = {}
    var Neymar = {}
    var Branislav_Ivanović = {}
    var Nikola_Milenković = {}
    var Yann_Sommer = {}
    var Nico_Elvedi = {}
    var Karl_Toko_Ekambi = {}
    var Maxim_ChoupoMoting = {}
    var Cristiano_Ronaldo = {}
    var Bruno_Fernandes = {}
    var Afriyie_Acquah = {}
    var Andrew_Yiadom = {}
    var Diego_Forlán = {}
    var Facundo_Torres = {}
    var Nam_Taehee = {}
    var Choi_Chulsoon = {}


    //Qatar
    Almoez_Ali["id"] = 1
    Almoez_Ali["nombre"] = 'Almoez Ali'
    Almoez_Ali["edad"] = 25
    Almoez_Ali["pais"] = 1
    Almoez_Ali["altura"] = 1.80
    Almoez_Ali["posicion"] = 'Centrocampista'
    Almoez_Ali["goles"] = 0


    Hassan_AlHaidos["id"] = 2
    Hassan_AlHaidos["nombre"] = 'Hassan Al-Haidos'
    Hassan_AlHaidos["edad"] = 31
    Hassan_AlHaidos["pais"] = 1
    Hassan_AlHaidos["altura"] = 1.74
    Hassan_AlHaidos["posicion"] = 'Delantero'
    Hassan_AlHaidos["goles"] = 0

    //Ecuador
    Enner_Valencia["id"] = 3
    Enner_Valencia["nombre"] = 'Enner Valencia'
    Enner_Valencia["edad"] = 32
    Enner_Valencia["pais"] = 2
    Enner_Valencia["altura"] = 1.74
    Enner_Valencia["posicion"] = 'Delantero'
    Enner_Valencia["goles"] = 0


    Christian_Noboa["id"] = 4
    Christian_Noboa["nombre"] = 'Christian Noboa'
    Christian_Noboa["edad"] = 37
    Christian_Noboa["pais"] = 2
    Christian_Noboa["altura"] = 1.74
    Christian_Noboa["posicion"] = 'Mediocentro'
    Christian_Noboa["goles"] = 0

    //Senegal
    Ibrahima_Mbaye["id"] = 5
    Ibrahima_Mbaye["nombre"] = 'Ibrahima Mbaye'
    Ibrahima_Mbaye["edad"] = 27
    Ibrahima_Mbaye["pais"] = 3
    Ibrahima_Mbaye["altura"] = 1.88
    Ibrahima_Mbaye["posicion"] = 'Defensa'
    Ibrahima_Mbaye["goles"] = 0


    Sadio_Mané["id"] = 6
    Sadio_Mané["nombre"] = 'Sadio Mané'
    Sadio_Mané["edad"] = 30
    Sadio_Mané["pais"] = 3
    Sadio_Mané["altura"] = 1.74
    Sadio_Mané["posicion"] = 'Delantero'
    Sadio_Mané["goles"] = 0

    //Países Bajos
    Frenkie_de_Jong["id"] = 7
    Frenkie_de_Jong["nombre"] = 'Frenkie de Jong'
    Frenkie_de_Jong["edad"] = 25
    Frenkie_de_Jong["pais"] = 4
    Frenkie_de_Jong["altura"] = 1.80
    Frenkie_de_Jong["posicion"] = 'Centrocampista'
    Frenkie_de_Jong["goles"] = 0


    Marten_de_Roon["id"] = 8
    Marten_de_Roon["nombre"] = 'Marten de Roon'
    Marten_de_Roon["edad"] = 31
    Marten_de_Roon["pais"] = 4
    Marten_de_Roon["altura"] = 1.85
    Marten_de_Roon["posicion"] = 'Delantero'
    Marten_de_Roon["goles"] = 0


    //Inglaterra
    Jarrod_Bowen["id"] = 9
    Jarrod_Bowen["nombre"] = 'Jarrod Bowen'
    Jarrod_Bowen["edad"] = 25
    Jarrod_Bowen["pais"] = 5
    Jarrod_Bowen["altura"] = 1.80
    Jarrod_Bowen["posicion"] = 'Centrocampista'
    Jarrod_Bowen["goles"] = 0


    Jordan_Henderson["id"] = 10
    Jordan_Henderson["nombre"] = 'Jordan Henderson'
    Jordan_Henderson["edad"] = 32
    Jordan_Henderson["pais"] = 5
    Jordan_Henderson["altura"] = 1.82
    Jordan_Henderson["posicion"] = ' Centrocampista'
    Jordan_Henderson["goles"] = 0

    //Irán
    Ramin_Rezaeian["id"] = 11
    Ramin_Rezaeian["nombre"] = 'Ramin Rezaeian'
    Ramin_Rezaeian["edad"] = 32
    Ramin_Rezaeian["pais"] = 6
    Ramin_Rezaeian["altura"] = 1.89
    Ramin_Rezaeian["posicion"] = 'Centrocampista'
    Ramin_Rezaeian["goles"] = 0


    Ahmad_Nourollahi["id"] = 12
    Ahmad_Nourollahi["nombre"] = 'Ahmad Nourollahi'
    Ahmad_Nourollahi["edad"] = 29
    Ahmad_Nourollahi["pais"] = 6
    Ahmad_Nourollahi["altura"] = 1.87
    Ahmad_Nourollahi["posicion"] = 'Centrocampista'
    Ahmad_Nourollahi["goles"] = 0

    //Estados Unidos
    Sean_Johnson["id"] = 13
    Sean_Johnson["nombre"] = 'Sean Johnson'
    Sean_Johnson["edad"] = 33
    Sean_Johnson["pais"] = 7
    Sean_Johnson["altura"] = 1.96
    Sean_Johnson["posicion"] = 'Portero'
    Sean_Johnson["goles"] = 0


    Paul_Arriola["id"] = 14
    Paul_Arriola["nombre"] = 'Paul Arriola'
    Paul_Arriola["edad"] = 27
    Paul_Arriola["pais"] = 7
    Paul_Arriola["altura"] = 1.87
    Paul_Arriola["posicion"] = 'Mediocampista'
    Paul_Arriola["goles"] = 0

    //Gales
    Joe_Allen["id"] = 15
    Joe_Allen["nombre"] = 'Joe Allen'
    Joe_Allen["edad"] = 32
    Joe_Allen["pais"] = 8
    Joe_Allen["altura"] = 1.68
    Joe_Allen["posicion"] = 'Centrocampista'
    Joe_Allen["goles"] = 0


    Harry_Wilson["id"] = 16
    Harry_Wilson["nombre"] = ' Harry Wilson'
    Harry_Wilson["edad"] = 25
    Harry_Wilson["pais"] = 8
    Harry_Wilson["altura"] = 1.73
    Harry_Wilson["posicion"] = 'Centrocampista'
    Harry_Wilson["goles"] = 0

    //Argentina
    Lionel_Messi["id"] = 17
    Lionel_Messi["nombre"] = 'Lionel Messi'
    Lionel_Messi["edad"] = 35
    Lionel_Messi["pais"] = 9
    Lionel_Messi["altura"] = 1.70
    Lionel_Messi["posicion"] = 'Delantero'
    Lionel_Messi["goles"] = 0


    Paulo_Dybala["id"] = 18
    Paulo_Dybala["nombre"] = 'Paulo Dybala'
    Paulo_Dybala["edad"] = 28
    Paulo_Dybala["pais"] = 9
    Paulo_Dybala["altura"] = 1.77
    Paulo_Dybala["posicion"] = 'Centrocampista'
    Paulo_Dybala["goles"] = 0

    //Arabia Saudita
    Fawaz_AlQarni["id"] = 19
    Fawaz_AlQarni["nombre"] = 'Fawaz Al-Qarni'
    Fawaz_AlQarni["edad"] = 30
    Fawaz_AlQarni["pais"] = 10
    Fawaz_AlQarni["altura"] = 1.85
    Fawaz_AlQarni["posicion"] = 'Portero'
    Fawaz_AlQarni["goles"] = 0


    Sultan_alGhanam["id"] = 20
    Sultan_alGhanam["nombre"] = 'Sultan al-Ghanam'
    Sultan_alGhanam["edad"] = 28
    Sultan_alGhanam["pais"] = 10
    Sultan_alGhanam["altura"] = 1.77
    Sultan_alGhanam["posicion"] = 'Centrocampista'
    Sultan_alGhanam["goles"] = 0

    //México
    Miguel_Layún["id"] = 21
    Miguel_Layún["nombre"] = 'Miguel Layún'
    Miguel_Layún["edad"] = 34
    Miguel_Layún["pais"] = 11
    Miguel_Layún["altura"] = 1.78
    Miguel_Layún["posicion"] = 'Lateral'
    Miguel_Layún["goles"] = 0


    Rodolfo_Pizarro["id"] = 22
    Rodolfo_Pizarro["nombre"] = 'Rodolfo Pizarro'
    Rodolfo_Pizarro["edad"] = 28
    Rodolfo_Pizarro["pais"] = 11
    Rodolfo_Pizarro["altura"] = 1.78
    Rodolfo_Pizarro["posicion"] = 'Mediocampista'
    Rodolfo_Pizarro["goles"] = 0

    //Polonia
    Bartosz_Salamon["id"] = 23
    Bartosz_Salamon["nombre"] = 'Bartosz Salamon'
    Bartosz_Salamon["edad"] = 31
    Bartosz_Salamon["pais"] = 12
    Bartosz_Salamon["altura"] = 1.96
    Bartosz_Salamon["posicion"] = 'Defensa'
    Bartosz_Salamon["goles"] = 0


    Bartosz_Bereszyński["id"] = 24
    Bartosz_Bereszyński["nombre"] = 'Bartosz Bereszyński'
    Bartosz_Bereszyński["edad"] = 29
    Bartosz_Bereszyński["pais"] = 12
    Bartosz_Bereszyński["altura"] = 1.83
    Bartosz_Bereszyński["posicion"] = 'Defensa'
    Bartosz_Bereszyński["goles"] = 0

    //Francia
    Kylian_Mbappé["id"] = 25
    Kylian_Mbappé["nombre"] = 'Kylian Mbappé'
    Kylian_Mbappé["edad"] = 23
    Kylian_Mbappé["pais"] = 13
    Kylian_Mbappé["altura"] = 1.78
    Kylian_Mbappé["posicion"] = 'Delantero'
    Kylian_Mbappé["goles"] = 0


    Aurélien_Tchouaméni["id"] = 26
    Aurélien_Tchouaméni["nombre"] = ' Aurélien Tchouaméni'
    Aurélien_Tchouaméni["edad"] = 22
    Aurélien_Tchouaméni["pais"] = 13
    Aurélien_Tchouaméni["altura"] = 1.88
    Aurélien_Tchouaméni["posicion"] = 'Centrocampista'
    Aurélien_Tchouaméni["goles"] = 0

    //Australia 
    Brad_Smith["id"] = 27
    Brad_Smith["nombre"] = 'Brad Smith'
    Brad_Smith["edad"] = 28
    Brad_Smith["pais"] = 14
    Brad_Smith["altura"] = 1.78
    Brad_Smith["posicion"] = 'Defensa'
    Brad_Smith["goles"] = 0


    Adam_Federici["id"] = 28
    Adam_Federici["nombre"] = 'Adam Federici'
    Adam_Federici["edad"] = 37
    Adam_Federici["pais"] = 14
    Adam_Federici["altura"] = 1.88
    Adam_Federici["posicion"] = 'Portero'
    Adam_Federici["goles"] = 0

    //Dinamarca
    Jannik_Vestergaard["id"] = 29
    Jannik_Vestergaard["nombre"] = 'Jannik Vestergaard'
    Jannik_Vestergaard["edad"] = 29
    Jannik_Vestergaard["pais"] = 15
    Jannik_Vestergaard["altura"] = 1.99
    Jannik_Vestergaard["posicion"] = 'Defensa'
    Jannik_Vestergaard["goles"] = 0


    Mathias_Jørgensen["id"] = 30
    Mathias_Jørgensen["nombre"] = 'Mathias Jørgensen'
    Mathias_Jørgensen["edad"] = 32
    Mathias_Jørgensen["pais"] = 15
    Mathias_Jørgensen["altura"] = 1.91
    Mathias_Jørgensen["posicion"] = 'Defensa'
    Mathias_Jørgensen["goles"] = 0

    //Túnez
    Taha_Yassine_Khenissi["id"] = 31
    Taha_Yassine_Khenissi["nombre"] = 'Taha Yassine Khenissi'
    Taha_Yassine_Khenissi["edad"] = 30
    Taha_Yassine_Khenissi["pais"] = 16
    Taha_Yassine_Khenissi["altura"] = 1.83
    Taha_Yassine_Khenissi["posicion"] = 'Delantero'
    Taha_Yassine_Khenissi["goles"] = 0


    Yassine_Chikhaoui["id"] = 32
    Yassine_Chikhaoui["nombre"] = 'Yassine Chikhaoui'
    Yassine_Chikhaoui["edad"] = 35
    Yassine_Chikhaoui["pais"] = 16
    Yassine_Chikhaoui["altura"] = 1.89
    Yassine_Chikhaoui["posicion"] = 'Defensa'
    Yassine_Chikhaoui["goles"] = 0

    //España
    Raúl_Albiol["id"] = 33
    Raúl_Albiol["nombre"] = 'Raúl Albiol'
    Raúl_Albiol["edad"] = 36
    Raúl_Albiol["pais"] = 17
    Raúl_Albiol["altura"] = 1.90
    Raúl_Albiol["posicion"] = 'Defensa'
    Raúl_Albiol["goles"] = 0


    Dani_Ceballos["id"] = 34
    Dani_Ceballos["nombre"] = 'Dani Ceballos'
    Dani_Ceballos["edad"] = 25
    Dani_Ceballos["pais"] = 17
    Dani_Ceballos["altura"] = 1.79
    Dani_Ceballos["posicion"] = 'Centrocampista'
    Dani_Ceballos["goles"] = 0

    //Costa Rica
    Bryan_Oviedo["id"] = 35
    Bryan_Oviedo["nombre"] = 'Bryan Oviedo'
    Bryan_Oviedo["edad"] = 32
    Bryan_Oviedo["pais"] = 18
    Bryan_Oviedo["altura"] = 1.72
    Bryan_Oviedo["posicion"] = 'Lateral izquierdo'
    Bryan_Oviedo["goles"] = 0


    Celso_Borges["id"] = 36
    Celso_Borges["nombre"] = 'Celso Borges'
    Celso_Borges["edad"] = 34
    Celso_Borges["pais"] = 18
    Celso_Borges["altura"] = 1.83
    Celso_Borges["posicion"] = 'Centrocampista'
    Celso_Borges["goles"] = 0

    //Alemania
    Ter_Stegen["id"] = 37
    Ter_Stegen["nombre"] = 'Ter Stegen'
    Ter_Stegen["edad"] = 30
    Ter_Stegen["pais"] = 19
    Ter_Stegen["altura"] = 1.87
    Ter_Stegen["posicion"] = 'Portero'
    Ter_Stegen["goles"] = 0


    Joshua_Kimmich["id"] = 38
    Joshua_Kimmich["nombre"] = 'Joshua Kimmich'
    Joshua_Kimmich["edad"] = 27
    Joshua_Kimmich["pais"] = 19
    Joshua_Kimmich["altura"] = 1.76
    Joshua_Kimmich["posicion"] = 'Centrocampista'
    Joshua_Kimmich["goles"] = 0

    //Japón
    Gen_Shōji["id"] = 39
    Gen_Shōji["nombre"] = 'Gen Shōji'
    Gen_Shōji["edad"] = 29
    Gen_Shōji["pais"] = 20
    Gen_Shōji["altura"] = 1.82
    Gen_Shōji["posicion"] = 'Defensa'
    Gen_Shōji["goles"] = 0


    Ken_Matsubara["id"] = 40
    Ken_Matsubara["nombre"] = 'Ken Matsubara'
    Ken_Matsubara["edad"] = 29
    Ken_Matsubara["pais"] = 20
    Ken_Matsubara["altura"] = 1.80
    Ken_Matsubara["posicion"] = 'Defensa'
    Ken_Matsubara["goles"] = 0

    //Bélgica
    Michy_Batshuayi["id"] = 41
    Michy_Batshuayi["nombre"] = 'Michy Batshuayi'
    Michy_Batshuayi["edad"] = 28
    Michy_Batshuayi["pais"] = 21
    Michy_Batshuayi["altura"] = 1.84
    Michy_Batshuayi["posicion"] = 'Delantero'
    Michy_Batshuayi["goles"] = 0


    Dennis_Praet["id"] = 42
    Dennis_Praet["nombre"] = 'Dennis Praet'
    Dennis_Praet["edad"] = 28
    Dennis_Praet["pais"] = 21
    Dennis_Praet["altura"] = 1.81
    Dennis_Praet["posicion"] = 'Centrocampista'
    Dennis_Praet["goles"] = 0


    //Canadá
    Ashtone_Morgan["id"] = 43
    Ashtone_Morgan["nombre"] = 'Ashtone Morgan'
    Ashtone_Morgan["edad"] = 31
    Ashtone_Morgan["pais"] = 22
    Ashtone_Morgan["altura"] = 1.84
    Ashtone_Morgan["posicion"] = 'Defensa'
    Ashtone_Morgan["goles"] = 0


    Tosaint_Ricketts["id"] = 44
    Tosaint_Ricketts["nombre"] = 'Tosaint Ricketts'
    Tosaint_Ricketts["edad"] = 34
    Tosaint_Ricketts["pais"] = 22
    Tosaint_Ricketts["altura"] = 1.83
    Tosaint_Ricketts["posicion"] = 'Mediocampista'
    Tosaint_Ricketts["goles"] = 0

    //Marruecos
    Omar_El_Kaddouri["id"] = 45
    Omar_El_Kaddouri["nombre"] = 'Omar El Kaddouri'
    Omar_El_Kaddouri["edad"] = 31
    Omar_El_Kaddouri["pais"] = 23
    Omar_El_Kaddouri["altura"] = 1.87
    Omar_El_Kaddouri["posicion"] = 'Centrocampista'
    Omar_El_Kaddouri["goles"] = 0


    Manuel_da_Costa["id"] = 46
    Manuel_da_Costa["nombre"] = 'Manuel da Costa'
    Manuel_da_Costa["edad"] = 36
    Manuel_da_Costa["pais"] = 23
    Manuel_da_Costa["altura"] = 1.91
    Manuel_da_Costa["posicion"] = 'Defensa'
    Manuel_da_Costa["goles"] = 0

    //Croacia
    Ivan_Perišić["id"] = 47
    Ivan_Perišić["nombre"] = 'Ivan Perišić'
    Ivan_Perišić["edad"] = 33
    Ivan_Perišić["pais"] = 24
    Ivan_Perišić["altura"] = 1.86
    Ivan_Perišić["posicion"] = ' Delantero'
    Ivan_Perišić["goles"] = 0


    Domagoj_Vida["id"] = 48
    Domagoj_Vida["nombre"] = 'Domagoj Vida'
    Domagoj_Vida["edad"] = 33
    Domagoj_Vida["pais"] = 24
    Domagoj_Vida["altura"] = 1.84
    Domagoj_Vida["posicion"] = 'Defensa'
    Domagoj_Vida["goles"] = 0

    //Brasil
    Philippe_Coutinho["id"] = 49
    Philippe_Coutinho["nombre"] = 'Philippe Coutinho'
    Philippe_Coutinho["edad"] = 29
    Philippe_Coutinho["pais"] = 25
    Philippe_Coutinho["altura"] = 1.72
    Philippe_Coutinho["posicion"] = 'Delantero'
    Philippe_Coutinho["goles"] = 0


    Neymar["id"] = 50
    Neymar["nombre"] = 'Neymar jr'
    Neymar["edad"] = 30
    Neymar["pais"] = 25
    Neymar["altura"] = 1.75
    Neymar["posicion"] = 'Delantero'
    Neymar["goles"] = 0

    //Serbia
    Branislav_Ivanović["id"] = 51
    Branislav_Ivanović["nombre"] = 'Branislav Ivanović'
    Branislav_Ivanović["edad"] = 38
    Branislav_Ivanović["pais"] = 26
    Branislav_Ivanović["altura"] = 1.85
    Branislav_Ivanović["posicion"] = 'Defensa'
    Branislav_Ivanović["goles"] = 0


    Nikola_Milenković["id"] = 52
    Nikola_Milenković["nombre"] = 'Nikola Milenković'
    Nikola_Milenković["edad"] = 24
    Nikola_Milenković["pais"] = 26
    Nikola_Milenković["altura"] = 1.95
    Nikola_Milenković["posicion"] = ' Delantero'
    Nikola_Milenković["goles"] = 0


    //Suiza
    Yann_Sommer["id"] = 53
    Yann_Sommer["nombre"] = 'Yann Sommer'
    Yann_Sommer["edad"] = 33
    Yann_Sommer["pais"] = 27
    Yann_Sommer["altura"] = 1.83
    Yann_Sommer["posicion"] = 'Portero'
    Yann_Sommer["goles"] = 0


    Nico_Elvedi["id"] = 54
    Nico_Elvedi["nombre"] = ' Nico Elvedi'
    Nico_Elvedi["edad"] = 25
    Nico_Elvedi["pais"] = 27
    Nico_Elvedi["altura"] = 1.89
    Nico_Elvedi["posicion"] = 'Defensa'
    Nico_Elvedi["goles"] = 0

    //Camerún
    Karl_Toko_Ekambi["id"] = 55
    Karl_Toko_Ekambi["nombre"] = 'Karl Toko Ekambi'
    Karl_Toko_Ekambi["edad"] = 29
    Karl_Toko_Ekambi["pais"] = 28
    Karl_Toko_Ekambi["altura"] = 1.83
    Karl_Toko_Ekambi["posicion"] = 'Delantero'
    Karl_Toko_Ekambi["goles"] = 0


    Maxim_ChoupoMoting["id"] = 56
    Maxim_ChoupoMoting["nombre"] = 'Maxim Choupo-Moting'
    Maxim_ChoupoMoting["edad"] = 33
    Maxim_ChoupoMoting["pais"] = 28
    Maxim_ChoupoMoting["altura"] = 1.91
    Maxim_ChoupoMoting["posicion"] = 'Delantero'
    Maxim_ChoupoMoting["goles"] = 0

    //Portugal
    Cristiano_Ronaldo["id"] = 57
    Cristiano_Ronaldo["nombre"] = 'Cristiano Ronaldo'
    Cristiano_Ronaldo["edad"] = 27
    Cristiano_Ronaldo["pais"] = 29
    Cristiano_Ronaldo["altura"] = 1.87
    Cristiano_Ronaldo["posicion"] = 'Extremo izquierdo'
    Cristiano_Ronaldo["goles"] = 0


    Bruno_Fernandes["id"] = 58
    Bruno_Fernandes["nombre"] = 'Bruno Fernandes'
    Bruno_Fernandes["edad"] = 27
    Bruno_Fernandes["pais"] = 29
    Bruno_Fernandes["altura"] = 1.80
    Bruno_Fernandes["posicion"] = 'Centrocampista'
    Bruno_Fernandes["goles"] = 0

    //Ghana
    Afriyie_Acquah["id"] = 59
    Afriyie_Acquah["nombre"] = 'Afriyie Acquah'
    Afriyie_Acquah["edad"] = 27
    Afriyie_Acquah["pais"] = 30
    Afriyie_Acquah["altura"] = 1.79
    Afriyie_Acquah["posicion"] = ' Centrocampista'
    Afriyie_Acquah["goles"] = 0


    Andrew_Yiadom["id"] = 60
    Andrew_Yiadom["nombre"] = 'Andrew Yiadom'
    Andrew_Yiadom["edad"] = 30
    Andrew_Yiadom["pais"] = 30
    Andrew_Yiadom["altura"] = 1.80
    Andrew_Yiadom["posicion"] = ' Defensa'
    Andrew_Yiadom["goles"] = 0

    //Uruguay
    Diego_Forlán["id"] = 61
    Diego_Forlán["nombre"] = 'Diego Forlán'
    Diego_Forlán["edad"] = 43
    Diego_Forlán["pais"] = 31
    Diego_Forlán["altura"] = 1.78
    Diego_Forlán["posicion"] = 'Delantero'
    Diego_Forlán["goles"] = 0


    Facundo_Torres["id"] = 62
    Facundo_Torres["nombre"] = 'Facundo Torres'
    Facundo_Torres["edad"] = 22
    Facundo_Torres["pais"] = 31
    Facundo_Torres["altura"] = 1.71
    Facundo_Torres["posicion"] = 'Delantero'
    Facundo_Torres["goles"] = 0

    //Corea del Sur
    Nam_Taehee["id"] = 63
    Nam_Taehee["nombre"] = 'Nam Tae-hee'
    Nam_Taehee["edad"] = 31
    Nam_Taehee["pais"] = 32
    Nam_Taehee["altura"] = 1.71
    Nam_Taehee["posicion"] = 'Centrocampista'
    Nam_Taehee["goles"] = 0


    Choi_Chulsoon["id"] = 64
    Choi_Chulsoon["nombre"] = 'Choi Chul-soon'
    Choi_Chulsoon["edad"] = 22
    Choi_Chulsoon["pais"] = 32
    Choi_Chulsoon["altura"] = 1.75
    Choi_Chulsoon["posicion"] = 'Defensa'
    Choi_Chulsoon["goles"] = 0


    jugadores.push(Almoez_Ali)
    jugadores.push(Hassan_AlHaidos)
    jugadores.push(Enner_Valencia)
    jugadores.push(Christian_Noboa)
    jugadores.push(Ibrahima_Mbaye)
    jugadores.push(Sadio_Mané)
    jugadores.push(Frenkie_de_Jong)
    jugadores.push(Marten_de_Roon)
    jugadores.push(Jarrod_Bowen)
    jugadores.push(Jordan_Henderson)
    jugadores.push(Ramin_Rezaeian)
    jugadores.push(Ahmad_Nourollahi)
    jugadores.push(Sean_Johnson)
    jugadores.push(Paul_Arriola)
    jugadores.push(Joe_Allen)
    jugadores.push(Harry_Wilson)
    jugadores.push(Lionel_Messi)
    jugadores.push(Paulo_Dybala)
    jugadores.push(Fawaz_AlQarni)
    jugadores.push(Sultan_alGhanam)
    jugadores.push(Miguel_Layún)
    jugadores.push(Rodolfo_Pizarro)
    jugadores.push(Bartosz_Salamon)
    jugadores.push(Bartosz_Bereszyński)
    jugadores.push(Kylian_Mbappé)
    jugadores.push(Aurélien_Tchouaméni)
    jugadores.push(Brad_Smith)
    jugadores.push(Adam_Federici)
    jugadores.push(Jannik_Vestergaard)
    jugadores.push(Mathias_Jørgensen)
    jugadores.push(Taha_Yassine_Khenissi)
    jugadores.push(Yassine_Chikhaoui)
    jugadores.push(Raúl_Albiol)
    jugadores.push(Dani_Ceballos)
    jugadores.push(Bryan_Oviedo)
    jugadores.push(Celso_Borges)
    jugadores.push(Ter_Stegen)
    jugadores.push(Joshua_Kimmich)
    jugadores.push(Gen_Shōji)
    jugadores.push(Ken_Matsubara)
    jugadores.push(Michy_Batshuayi)
    jugadores.push(Dennis_Praet)
    jugadores.push(Ashtone_Morgan)
    jugadores.push(Tosaint_Ricketts)
    jugadores.push(Omar_El_Kaddouri)
    jugadores.push(Manuel_da_Costa)
    jugadores.push(Ivan_Perišić)
    jugadores.push(Domagoj_Vida)
    jugadores.push(Philippe_Coutinho)
    jugadores.push(Neymar)
    jugadores.push(Branislav_Ivanović)
    jugadores.push(Nikola_Milenković)
    jugadores.push(Yann_Sommer)
    jugadores.push(Nico_Elvedi)
    jugadores.push(Karl_Toko_Ekambi)
    jugadores.push(Maxim_ChoupoMoting)
    jugadores.push(Cristiano_Ronaldo)
    jugadores.push(Bruno_Fernandes)
    jugadores.push(Afriyie_Acquah)
    jugadores.push(Andrew_Yiadom)
    jugadores.push(Diego_Forlán)
    jugadores.push(Facundo_Torres)
    jugadores.push(Nam_Taehee)
    jugadores.push(Choi_Chulsoon)

    Paisesyjugadoers.push(Paises)
    Paisesyjugadoers.push(jugadores)


    return Paisesyjugadoers



}

main();