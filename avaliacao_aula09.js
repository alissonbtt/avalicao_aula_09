
function alimento(tempoPadrao, tempoInserido){
    return [tempoPadrao, tempoInserido]
}


function menu(prato, tempoInserido){   

    switch(prato){
        case 'pipoca':
            resposta(alimento(10, tempoInserido))           
        break;   
        case 'macarrao':
        case 'brigadeiro':
            resposta(alimento(8, tempoInserido))
        break;       
        case 'carne':
            resposta(alimento(15, tempoInserido))
        break;         
        case 'feijao':
            resposta(alimento(12, tempoInserido)) 
        break; 
        default:
            console.log("Prato inexistente, Favor, selecione uma opção válida")
    }
}
    
function resposta([tempoPadrao, tempoInserido]){
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


menu('carne', 45);