/**
 * There is a collection of input strings and a collection of query strings.
 * For each query string, determine how many times it occurs in the list of input strings.
 * Return an array of the results.
 */
 function matchingStrings(strings, queries) {
    // Write your code here
    const res=[];
    const freq = new Map();
    for(const str of strings){
        if(!freq.has(str)){
            freq.set(str, 1);
        }
        else{
            let c = freq.get(str);
            c++;
            freq.set(str, c);
        }
    }
    for(const q of queries){
        if(!freq.has(q)){
            res.push(0)
        }
        else{
            res.push(freq.get(q));
        }
    }
    return res;
}