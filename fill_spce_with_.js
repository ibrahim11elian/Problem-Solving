
// wrote this function to change for me the problem name to use it to create the problem file. 

function changeString(string) {
    return string.split(' ').join('_') + '.js';
}

console.log(changeString(`Number of Steps to Reduce a Number to Zero`));