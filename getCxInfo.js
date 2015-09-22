var boldOpen = "!!";
var boldClose = "!!";
var url = window.location.href;

//Resize textarea CSS height to see full content
$('#form_text').height(260);
//Overwrite form button to prevent accidental submit and to swap to plain text with no bold delimiters
$('#form_.btn.btn-success').replaceWith('<input class="btn btn-success" name value="Switch tolain text" onclick="swapSyntax()">');


$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(1) > label').replaceWith('<label>' + boldOpen + 'Status: ' + boldClose + '</label>');
var status = 				document.getElementsByClassName('form-group')[0].innerText.replace(/(\r\n|\n|\r)/gm," ");

$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(2) > label').replaceWith('<label>' + boldOpen + 'Représentant: ' + boldClose + '</label>');
var rep = 					document.getElementsByClassName('form-group')[1].innerText.replace(/(\r\n|\n|\r)/gm," ");

$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(7) > label').replaceWith('<label>' + boldOpen + 'Gestionaire d\'Équipe: ' + boldClose + '</label>');
var gestionaireEquipe = 	document.getElementsByClassName('form-group')[6].innerText.replace(/(\r\n|\n|\r)/gm," ");

$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(10) > label').replaceWith('<label>' + boldOpen + 'Date de la Vente: ' + boldClose + '</label>');
var dateVendu = 			document.getElementsByClassName('form-group')[9].innerText.replace(/(\r\n|\n|\r)/gm," ");

$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(11) > label').replaceWith('<label>' + boldOpen + 'Date d\'Installation: ' + boldClose + '</label>');
var dateInstall = 			document.getElementsByClassName('form-group')[10].innerText.replace(/(\r\n|\n|\r)/gm," ");

$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(14) > label').replaceWith('<label>' + boldOpen + 'Prénom: ' + boldClose + '</label>');
var prenom = 				document.getElementsByClassName('form-group')[13].innerText.replace(/(\r\n|\n|\r)/gm," ");

$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(15) > label').replaceWith('<label>' + boldOpen + 'Nom: ' + boldClose + '</label>');
var nom = 					document.getElementsByClassName('form-group')[14].innerText.replace(/(\r\n|\n|\r)/gm," ");

$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(12) > label').replaceWith('<label>' + boldOpen + '#OM de la vente: ' + boldClose + '</label>');
var om = 					document.getElementsByClassName('form-group')[11].innerText.replace(/(\r\n|\n|\r)/gm," ");

$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(18) > label').replaceWith('<label>' + boldOpen + '# de Téléphone 1: ' + boldClose + '</label>');
var phone1 = 				document.getElementsByClassName('form-group')[17].innerText.replace(/(\r\n|\n|\r)/gm," ");

$('#main-content > section > div:nth-child(3) > div:nth-child(1) > section > div > form > div:nth-child(19) > label').replaceWith('<label>' + boldOpen + '# de Téléphone 2: ' + boldClose + '</label>');
var phone2 = 				document.getElementsByClassName('form-group')[18].innerText.replace(/(\r\n|\n|\r)/gm," ");


var textBold = url +"\r"+ prenom +"\t\t"+ nom +"\r"+ phone1 +"\r"+ phone2 +"\r\r"+ om +"\r"+ status +"\r"+ rep +"\r"+ gestionaireEquipe +"\r"+ dateVendu +"\r"+ dateInstall +"\r";
var textNormal = textBold.replace(/!/g, "");

//Set Text
$('#form_text').val(textBold);

//Swap text for normal text.
function swapSyntax() {
	$('#form_text').val( $('#form_text').val() == textNormal ? textBold : textNormal );
}