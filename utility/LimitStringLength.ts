const LimitStringLength = (string = '', stringLimit = true) => {
    if (typeof string !== 'string') {
      throw new TypeError('Input must be a string');
    }
  
    let minLength = 100;
    let maxLength = 1000;
    let truncatedString = '';
  
    if (string.length === 0) {
      return '';
    }
  
    if (stringLimit) {
      if (string.length > minLength) {
        truncatedString = string.substring(0, minLength) + ' . . . ';
      } else {
        truncatedString = string + ' . . . ';
      }
    } else {
      truncatedString = string.substring(0, maxLength);
    }
  
    return truncatedString;
  }
  
  export default LimitStringLength;
  