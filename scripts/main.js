function btn() {
    const inputText1 = document.getElementById("inputText1");
    const inputText2 = document.getElementById("inputText2");
    const inputText3 = document.getElementById("inputText3");
    const inputText4 = document.getElementById("inputText4");
    const inputText5 = document.getElementById("inputText5");
    const inputText6 = document.getElementById("inputText6");

    if (inputText2.checked == true) {
        alert("Selamat Anda Menjawab Dengan Benar" + inputText2.value);
    } else if (inputText3.checked == true) {
        alert("Selamat Anda Menjawab Dengan Benar" + inputText3.value);
    } else if (inputText6.checked == true) {
        alert("Selamat Anda Menjawab Dengan Benar" + inputText6.value);
    } else {
        alert("Anda Salah");
    }
}