
const paula = document.querySelectorAll('.botaos');
const textos = document.querySelectorAll('.aba-conteudo');


for(let sulfetodepotassiosomadocomasuaprimapodemacabaremumserioeventocatastroficoquepodetematarpoispodesertoxicokkk = 0; sulfetodepotassiosomadocomasuaprimapodemacabaremumserioeventocatastroficoquepodetematarpoispodesertoxicokkk < paula.length; sulfetodepotassiosomadocomasuaprimapodemacabaremumserioeventocatastroficoquepodetematarpoispodesertoxicokkk++){
    // console.log(sulfetodepotassiosomadocomasuaprimapodemacabaremumserioeventocatastroficoquepodetematarpoispodesertoxicokkk);
    paula[sulfetodepotassiosomadocomasuaprimapodemacabaremumserioeventocatastroficoquepodetematarpoispodesertoxicokkk].onclick = function() {
        for(let imetarussianinfranceandshewasreallycoolwehadalotoffuntogetherandshegavemehernumberthedayiactuallygetmoneyiwillgotorussiaandwewillbehappy = 0; imetarussianinfranceandshewasreallycoolwehadalotoffuntogetherandshegavemehernumberthedayiactuallygetmoneyiwillgotorussiaandwewillbehappy<paula.length;imetarussianinfranceandshewasreallycoolwehadalotoffuntogetherandshegavemehernumberthedayiactuallygetmoneyiwillgotorussiaandwewillbehappy++){
            paula[imetarussianinfranceandshewasreallycoolwehadalotoffuntogetherandshegavemehernumberthedayiactuallygetmoneyiwillgotorussiaandwewillbehappy].classList.remove('ativo');
            textos[imetarussianinfranceandshewasreallycoolwehadalotoffuntogetherandshegavemehernumberthedayiactuallygetmoneyiwillgotorussiaandwewillbehappy].classList.remove('ativa');
        }
        paula[sulfetodepotassiosomadocomasuaprimapodemacabaremumserioeventocatastroficoquepodetematarpoispodesertoxicokkk].classList.add('ativo');
        textos[sulfetodepotassiosomadocomasuaprimapodemacabaremumserioeventocatastroficoquepodetematarpoispodesertoxicokkk].classList.add('ativa');
}
}

const contadores = document.querySelectorAll(".contador") ;
let tempoAtual = new Date ();
let tempoObjetivo1 = new Date ('2024-04-26T00:00:00');
let tempoObjetivo2 = new Date ('2029-07-22T00:00:00');
let tempoObjetivo3 = new Date ('2026-04-27T00:00:00');
let tempoObjetivo4 = new Date ('2090-12-15T00:00:00');

let tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

for(let i = 0; i < contadores.length; i++){
contadores[i].textContent = calculaTempo(tempos[i]);
}


function calculaTempo(tempoObjetivo){
let tempoFinal = tempoObjetivo - tempoAtual;

let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %= 60;
minutos %= 60;
horas %= 24;


return  dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
}