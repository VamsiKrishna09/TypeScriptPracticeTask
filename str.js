var m = "hello";
var reverse = "";
function reverseString(rev) {
    for (var i = rev.length - 1; i >= 0; i--) {
        reverse = reverse + rev[i];
    }
    return reverse;
}
console.log(reverseString(m));
