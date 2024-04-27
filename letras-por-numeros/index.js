export default function letrasPorNumeros(string) {
    const cleanString = string.replace(/[^\w]/gi, "");
    const splitString = cleanString.toLowerCase().split("");

    const numbers = splitString.map((el) => el.charCodeAt() - 96).join(" ");
    return numbers;
}