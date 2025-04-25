
function interpret() {
    const mode = document.getElementById("mode").value;
    const style = document.getElementById("style").value;
    const output = document.getElementById("output");

    output.innerHTML = `<p><strong>Wybrano:</strong> ${mode}, styl: ${style}</p><p>Przykładowa interpretacja: Twoje geny kryją w sobie historię, którą dopiero zaczynamy rozumieć...</p>`;
}
