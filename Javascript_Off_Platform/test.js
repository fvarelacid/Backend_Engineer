const formatNumber = number => {
    const strNumber = number.toString();
    newStrNumber = '';
    let counter = 0;
    if (!strNumber.includes('.')) {
        newStrNumber = newStrNumber + '.00';
    }
    for (let i = strNumber.length - 1; i >= 0; i--) {
        if (counter === 3) {
            newStrNumber = ',' + newStrNumber;
            counter = 0;
        }
        newStrNumber = strNumber[i] + newStrNumber;
        counter++;
        if (strNumber[i] === '.') {
            counter = 0;
        }
    }
    return newStrNumber;
}


//  const formatNumber = number => {
//    const newArr = number.toString().split('');

//    for(let i = newArr.length - 3; i > 0; i -= 3) {
//      if(newArr[i] !== '.') {
//         newArr.splice([i], 0, ',');
//       }
//     }
//    return newArr.join('');
// }

export { formatNumber };