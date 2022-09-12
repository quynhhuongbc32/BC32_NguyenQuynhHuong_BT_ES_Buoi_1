function dom(selector) {
    return document.querySelector(selector);
}

let str = "Hover Me!";
let chars = [ ...str ];

let showListColor = (chars) => {
    let output = chars.reduce( (result, item) => {

        return result += `
            <span>${item}</span>
        `
    }, "");

    dom('.heading').innerHTML = output;
}
showListColor(chars)