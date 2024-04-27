export default function filtrarPares(array) {
    let count = {};

    for (let el of array) {
        if (count[el]) {
            count[el]++;
        } else {
            count[el] = 1;
        }
    }

    let result = [];

    for (let el in count) {
        if (count[el] % 2 === 0) {
            result.push(el.toString());
        }
    }

    return result;
}