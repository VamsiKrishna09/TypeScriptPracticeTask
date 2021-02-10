let m = "hello"
let reverse = ""
function reverseString(rev: string): string {
    for (let i = rev.length - 1; i >= 0; i--) {
        reverse = reverse + rev[i];
    }
    return reverse;
}

console.log(reverseString(m));