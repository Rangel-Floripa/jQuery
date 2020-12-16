
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao"); /*  selecionar o campo,   */
campo.on("input", function () { /* toda vez que for digitada , quando digitar faça alguma coisa, neste caso funcao */
    var conteudo = campo.val();/* pegar o valor do input "val", o .val nos dá acesso ao campos que tem value,   */
    var qtdPalavras = conteudo.trim().split(/\S+/).length - 1; /* dividir o campo em espaços (split) , 
	                                              "/\S+/" expressao regular que busca por qualquer espaço vazio    */
    $("#contador-palavras").text(qtdPalavras);/* selecionar meu contador de palavras, alterar o conteudo dela ,
	                                           -1 para corrigir bug*/

    var qtdCaracteres = conteudo.length; /*   */
    $("#contador-caracteres").text(qtdCaracteres);/* selecionar meu contador de caracteres, 
	                                             ()  para cada vez eu escrever, alterar a quantidade de caracteres */
});