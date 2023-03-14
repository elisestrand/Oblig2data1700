
const bestillingInformasjon = [];
function registreBilletter(){
    document.getElementById("bestillingsRegister").innerHTML = "";

    let riktig = true;
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
    if(riktig===true) {
        let bestilling = {
            film: film.value,
            antall: antall.value,
            fornavn: fornavn.value,
            etternavn: etternavn.value,
            telefonnr: telefonnr.value,
            epost: epost.value
        }
        bestillingInformasjon.push(bestilling);
        film.value = "blank";
        antall.value = "";
        fornavn.value = "";
        etternavn.value = "";
        telefonnr.value = "";
        epost.value = "";

        document.getElementById("feilAntall").innerText = "";
        document.getElementById("feilFornavn").innerText = "";
        document.getElementById("feilEtternavn").innerText = "";
        document.getElementById("feiltelefon").innerText = "";
        document.getElementById("feilEpost").innerText = "";


        let skrivUt = "<table><tr>" +
            "<th>Film  </th><th>Antall  </th><th>Fornavn  </th><th>Etternavn  </th><th>Telefonnr  </th><th>Epost  </th>" + "</tr>";

        for (let bestilling of bestillingInformasjon) {
            skrivUt += "<tr>";
            skrivUt += "<td>" + bestilling.film + "</td><td>" + bestilling.antall + "</td><td>" + bestilling.fornavn + "</td><td>" + bestilling.etternavn +
                "</td><td>" + bestilling.telefonnr + "</td><td>" + bestilling.epost + "</td>";
            skrivUt += "</td>";
        }
        document.getElementById("bestillingsRegister").innerHTML += skrivUt;
    }

}

function slettAlleBilletter() {
    bestillingInformasjon.length = 0;
    document.getElementById("bestillingsRegister").innerHTML = "";



}
