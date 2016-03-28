var os = require('os');

var totalMb = function(f){
    return(Math.round((f/1024/1024)*100)/100);
}

console.log('Host: ' + os.hostname());
console.log(os.loadavg()[2]);