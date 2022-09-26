var linus =['1s2','2s2','2p6','3s2','3p6','4s2','3d10']
var linos =['1s2','2s2', '2p6', '3s2', '3p6', '4s2', '3d10', '4p6', '5s2', '4d10', '5p6', '6s2', '4f14', '5d10', '6p6', '7s2', '5f14', '6d10', '7s2', '7p6']
var nEletrons =[2,2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10, 2, 6]


function voltar(){
    var voltar = document.querySelector(".outro");
    voltar.hidden=true;
    var tela = document.querySelector(".add")
    tela.value=""

}

function descobrir(){
    var n = Number(document.querySelector(".add").value);

    if(typeof(n) === 'number' && n <121 && n!=0){
    camada(n);
    }else{
        alert("digite um valor válido")
    }
}

function camada(n){
    var nEletronsInput= 0;
    var distribuicaoEletronica =[];
    var nEletronsCamadaAnt =0;
    
    for(var i=0; i<linus.length; i++){
    
        nEletronsInput+=nEletrons[i];
        
        distribuicaoEletronica[i]=linus[i];
        if(i!=0 ){
            console.log("antes"+nEletronsCamadaAnt)
            nEletronsCamadaAnt = nEletronsCamadaAnt+nEletrons[i-1];
            console.log("depois"+nEletronsCamadaAnt)
        }

        if(nEletronsInput==n){
            break;

        }
        if(nEletronsInput>n){
            
            
            
            nEletronsInput= nEletronsInput -(nEletronsInput-n)
            distribuicaoEletronica[i] =distribuicaoEletronica[i][0]+distribuicaoEletronica[i][1]+((nEletronsInput-nEletronsCamadaAnt));
            
            console.log(nEletronsInput-nEletronsCamadaAnt+"cu")
            break;
        }


    }
    var voltar = document.querySelector(".outro");
    voltar.hidden=false;
    var tela = document.querySelector(".add")
    tela.value= ("distribuição eletronica : \n " + distribuicaoEletronica)
    console.log("tem "+nEletronsInput+" eletrons e distri eletronica " + distribuicaoEletronica)

}


