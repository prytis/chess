"use strict"
function renderChesboard( size ){

    let HTML = '';
    const DOMchessboard = document.querySelector('.chessboard');

    for (let i =0; i<size; i++) {
        let cellsHTML = ''
        for (let y=0; y < size; y++){
            let color = '';
            if ( (i+y) % 2 === 0){
                color = 'black'
            } else {
                color = 'white'
            }
               
            cellsHTML += `<div class="cell ${color}" style="width: ${100/size}%;"></div>`;
        }
        HTML += `<div class='row' style="height: ${100/size}%;">
        ${cellsHTML}</div>`;
    }
    DOMchessboard.innerHTML = HTML;
    return;
}

renderChesboard( 5 );