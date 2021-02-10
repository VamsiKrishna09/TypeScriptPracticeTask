let a = 2010
function leapYear(yr: number): boolean {
    if ((yr % 4 === 0) || ((yr % 400 === 0) && (yr % 100 === 0))) {
        return true;
    }
    else {
        return false;
    }
}
console.log(leapYear(a))