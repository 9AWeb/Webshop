function reg(felhnev, email, jelszo1, jelszo2) {
    if (jelszo1 === jelszo2) {
        var temppw = jelszo1
        localStorage.setItem(felhnev, felhnev);
        localStorage.setItem(felhnev + "mail", email);
        localStorage.setItem(felhnev + "jelszo", temppw);
        alert("a");
    }
}

function login(felhnev, jelszo) {
    if (felhnev === localStorage.getItem(felhnev)) {
        if (jelszo === localStorage.getItem(felhnev + "jelszo")) {
            alert("a")
        } else {
            alert("rossz jelszó");
        }
    } else {
        alert("rossz név")
    }
}