let riktig = true;

function registreBilletter(){

    const url = "http//localhost:8080/bestilling"  + $("#fornavn").val()+ $("#etternavn").val();
    document.getElementById("bestillingsRegister").innerHTML = "";



    let film = document.getElementById("film");
    let antall = document.getElementById("antall");
    let fornavn = document.getElementById("fornavn");
    let etternavn = document.getElementById("etternavn");
    let telefonnr = document.getElementById("telefonnr");
    let epost = document.getElementById("epost");



    if (antall.value === ""|| antall.value === null){
        document.getElementById("feilAntall").innerText = "Må skrive noe inn i antall";
        riktig = false;

    }
    if (fornavn.value === ""|| fornavn.value === null ){
        document.getElementById("feilFornavn").innerText = "Må skrive noe inn i fornavnet";
        riktig=false;

    }
    if (etternavn.value === "" || etternavn.value === null){
        document.getElementById("feilEtternavn").innerText = "Må skrive noe inn i etternavet";
        riktig=false;

    }
    if (telefonnr.value === ""|| telefonnr.value === null ){
        document.getElementById("feiltelefon").innerText = "Må skrive noe inn i telefonnr";
        riktig= false;
    }
    if (epost.value === ""|| epost.value === null ){
        document.getElementById("feilEpost").innerText = "Må skrive noe inn i epost";
        riktig= false;

    }
    Billett();
         


}



function Billett() {
    if (riktig === true) {
        const bestilling = {
            film: $("#film").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnr: $("#telefonnr").val(),
            epost: $("#epost").val()
        }
        $.post("/lagre", bestilling, function () {
            hentAlleData()

        });
    }
        $("#film").val("blank");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");

};

function hentAlleData(){
    $.get("/hentData", function (data){
        formaterData(data);
    });
}

function formaterData(bestilling){

         let ut = "<table><tr><th><div class='col-md-1' style='color: dimgrey'>Film</div></th>" +
             "<th><div class='col-md-1' style='color: dimgrey'>Antall</div></th>" +
             "<th><div class='col-md-1' style='color: dimgrey'>Fornavn</div></th>" +
             "<th><div class='col-md-1' style='color: dimgrey'>Etternavn</div</th>" +
             "<th><div class='col-md-1' style='color: dimgrey'>Telefonnr</th>" +
             "<th><div class='col-md-1' style='color: dimgrey'>Epost</th>"

         for (const billett of bestilling) {

             ut += "<tr><td>" + billett.film +
                 "</td><td>" + billett.antall +
                 "</td><td>" + billett.fornavn +
                 "</td><td>" + billett.etternavn +
                 "</td><td>" + billett.telefonnr +
                 "</td><td>" + billett.epost +
                 "</td></tr>";
         }
    ut+="</table>";

    $("#bestillingsRegister").html(ut);
}

function slettBillett(){
    $.get("/slett", function (){
        hentAlleData();

    });
}