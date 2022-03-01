/**
 * You are given an integer N. Can you find the least 
 * positive integer X made up of only 9's and 0's, 
 * such that, X is a multiple of N?
 */
 function solve(n) {
    String.prototype.replaceAll = function (search, replace) { return this.split(search).join(replace); }
    let num=0;
    for(let i=1; i<(2**n); i++){
        num = Number(i.toString(2).replaceAll('1','9'));
        if(num % n == 0){
            return num;
        }
    }
}