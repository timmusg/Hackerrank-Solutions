/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
*/

function sockMerchant(n, ar) {
    var counter = 0;
    for(let i = 0; i < ar.length - 1; i++) {
        for(let j = i+1; j < ar.length; j++) {
            if(ar[i] == ar[j] && ar[j] != 'Matched') {
                counter++;
                ar[j] = 'Matched';
                break;
            }
        }
    }
    return counter;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
