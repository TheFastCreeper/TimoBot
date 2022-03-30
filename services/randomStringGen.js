

export function randomStringGen () {
    const result = Math.random().toString(36).substring(2, 7);
    console.log("Sucessfully generated random string!");
    console.log(result);
}