export default function esIsograma(string) {
    const twoWordCheck = string.includes(" ");
    if (twoWordCheck) return false;

    let obj = {};
    const cleanString = string.replace(/[^\w]/gi, "");
    const stringArray = cleanString.toLowerCase().split("");
    console.log(stringArray);

    for (const element of stringArray) {
        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    }

    const check = Object.values(obj).some((el) => el > 1);

    return !check;
}