
function menu(prato, tempoInserido){
    let tempoPadrao;

    switch(prato){
        case 'pipoca':
            tempoPadrao = 10;  
            resposta(tempoPadrao, tempoInserido);   
        break;   
        case 'macarrao':
            tempoPadrao = 8;  
            resposta(tempoPadrao, tempoInserido);  
        break;       
        case 'carne':
            tempoPadrao = 15;
            resposta(tempoPadrao, tempoInserido);  
        break;         
        case 'feijao':
            tempoPadrao = 12;
            resposta(tempoPadrao, tempoInserido);  
        break;         
        case 'brigadeiro':
            tempoPadrao = 8;
            resposta(tempoPadrao, tempoInserido);  
        break; 
        default:
            console.log("Prato inesxistente, Favor, selecione uma opção válida")
    }
}

function resposta(tempoPadrao, tempoInserido){
    if(tempoInserido < tempoPadrao){
        console.log("tempo insuficiente");
    } else if(tempoInserido >= tempoPadrao * 2 && tempoInserido < tempoPadrao * 3 ){
        console.log("a comida queimou");
    } else if(tempoInserido >= tempoPadrao*3){
        console.log("kabumm");
    }else {
        console.log("Prato pronto, bom apetite!!!")
    }
}


menu('macarrao', 30);
