const colorList = [
    'pallet'
    ,'viridian'
    ,'pewter'
    ,'cerulean'
    ,'vermillion'
    ,'lavender'
    ,'celadon'
    ,'saffron'
    ,'fuschia'
];

let currentColor = '';

let showListColor = (colorList) => {
    let output = colorList.reduce( (result, item, index) => {

        if(index == 0) {
            var activeFlg = ' active';
            currentColor = item;
        }else{
            var activeFlg = '';
        }

        return result += `
            <button class="color-button pallet ${item}${activeFlg}" onclick="changeColor('${item}')"></button>
        `
    }, "");

    dom('#colorContainer').innerHTML = output;
}

showListColor(colorList);

let changeColor = (itemColor) => {
    dom('#house').classList.remove(currentColor);
    dom('#house').classList.add(itemColor);
    currentColor = itemColor;

    //remove active
    dom('button.color-button.active').classList.remove('active');
    dom('button.color-button.'+itemColor).classList.add('active');

}

function dom(selector) {
    return document.querySelector(selector);
}

