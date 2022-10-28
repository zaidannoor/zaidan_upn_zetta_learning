"use strict";
function Slicers(text, first_index, last_index) {
    let hasil = "";
    for (let i = first_index; i < last_index; i++) {
        hasil += text[i];
    }
    return hasil;
}
console.log(Slicers("Learning Typescript is different than Javascript", 9, 19));
