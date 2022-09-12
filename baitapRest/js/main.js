dom('#btnKhoi1').addEventListener('click', (evt) => {
    let res = processCalcAvg('#inpToan','#inpLy', '#inpHoa');
    dom('#tbKhoi1').innerHTML = res.toFixed(2);
});

dom('#btnKhoi2').addEventListener('click', (evt) => {
    let res = processCalcAvg('#inpVan','#inpSu', '#inpDia', '#inpEnglish');
    dom('#tbKhoi2').innerHTML = res.toFixed(2);
});

const processCalcAvg = (...idElement) => {
    let total = 0;
    let numberSubject = 0;
    idElement.map( (id, index) => {
        total += parseFloat(dom(id).value)
        numberSubject = parseInt(index)
    });

    return total/(numberSubject + 1)
}

function dom(selector) {
    return document.querySelector(selector);
}

