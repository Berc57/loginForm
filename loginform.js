function bejelentkezes() {
    var nev = document.getElementById("nev").value
    var jelszo = document.getElementById("jelszo").value
    var checkboxxd = document.getElementById("feltetel").checked
    if (nev == "admin" && jelszo == "admin1234" && checkboxxd){
        document.write("Üdv Admin")
    }
}
