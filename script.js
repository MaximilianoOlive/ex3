function iniciarJogo() {
    var nome = prompt("Qual é o seu nome?");
    
    if (nome) {
        var area = prompt("Escolha uma área: Front-End ou Back-End");
        
        if (area) {
            var tecnologia = prompt("Qual tecnologia você gostaria de aprender?");
            
            if (tecnologia) {
                var mensagem = `Olá ${nome}, você escolheu a área de ${area} e deseja aprender ${tecnologia}.`;
                alert(mensagem);
            } else {
                alert("Você precisa escolher uma tecnologia.");
            }
        } else {
            alert("Você precisa escolher uma área.");
        }
    } else {
        alert("Você precisa fornecer seu nome.");
    }
}
