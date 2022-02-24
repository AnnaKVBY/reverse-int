module.exports = function reverse (n) {    
    if (n < 0) {
        let nn = n * (-1);
        let str = String(nn);
        let arr = str.split('');       
        return Number(arr.reverse().join(''));      
      
    } else {    
        let str = String(n);
        let arr = str.split('');       
        return Number(arr.reverse().join(''));        
    }
}

