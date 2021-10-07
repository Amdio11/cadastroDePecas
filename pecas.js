// * Sistema Cadastro de peças *
// REQUISITOS:
// 1. A peça só pode ser cadastrada caso o peso seja maior que 100g.
// 2. O número de peças cadastradas na lista não pode ter mais de 10 cadastros.
// 3. O nome da peça cadastrada deve ter um nome acima de 3 caracteres.

let peso = 110;
if(peso > 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrada!")
    let listaPecas = [ "Virabrequim", "Vela", "Bateria","Radiador", "Correia", "Carter", "Ignição", "Embreagem"]
    if (listaPecas.length < 10) {
        console.log("A lista ainda possui espaço para mais peças")
        let nomePeca = "Disco de Freio"
        if(nomePeca.length > 3){
            console.log ("Valido, a peça tem mais de 3 caracteres, pode seguir com o cadastro")
        }else {
            console.log ("Invalido precisa ser maior que 3 caracteres")
        }
    } else {
        console.log("Não há espaço disponivel na lista, a capacidade máxima foi atingida")
    }
}else{
    console.log("A peça não tem o peso minimo para ser cadastrada")
}