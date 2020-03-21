const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr){
    let letterArray = [];
    let letterLength = 10;
    let i = 0;
  
    while(expr.length != 0){
      letterArray[i] = expr.slice(0, letterLength);
      expr = expr.slice(letterLength, expr.length);
      i++;
    }
  
    for(let i = 0; i < letterArray.length; i++){
      let str = '';
      for(let j = 0; j < letterLength - 1; j++){
        let letterCouple = letterArray[i][j] + letterArray[i][j+1];
        switch(letterCouple){
          case '00':
            str += '';
            break;
          case '10':
            str += '.';
            break;
          case '11':
            str += '-';
            break;
          case '**':
            str += ' ';
            break;
          default:
            throw Error('Input value is incorrect.');
        }
        j++;
      }
      letterArray[i] = (str == '     ') ? ' ' : str;
    }
  
    for(let i = 0; i < letterArray.length; i++){
      for(let val in MORSE_TABLE){
        if(val == letterArray[i]) letterArray[i] = MORSE_TABLE[val];
      }
    }
  
    return letterArray.join('');
  }

module.exports = {
    decode
}