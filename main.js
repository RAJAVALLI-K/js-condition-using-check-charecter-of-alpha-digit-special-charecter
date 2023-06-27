// 1.Check whether a character is an alphabet, digit or special character

let ch=prompt('enter a value:');
if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
    console.log('it is a alphabet');
}
else if(ch >= '0' && ch <= '9'){
    console.log('it is a number');
}
else{
    console.log('it is a special character');
}