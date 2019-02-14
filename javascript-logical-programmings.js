/* var arr = ['0', '0', '0', '1', '1', '1']
var dd = []
for(var i = arr.length - 1; i >= 0; i--){
	dd.push(arr[i])
}

var dor = arr.sort((a,b) => b-a) // desending order

// console.log(dd)
console.log(dor) */

/* 
// Find largest in the array //
var arr = [2,4444,34,55,754,10000]
var s = 0
var narr = []
arr.filter((m) => {
	if(m > s){
		s = m
	}
})

console.log(s) */

/* 
// find 2nd largest in the array //
let arr =  [34,2,543,879,4,1000]
arr.sort((a,b) => {
	return a-b // ascending order
})
console.log(arr[arr.length - 2]) */
 
 
/* 
// Find a word in a string and replace it. //
var strr = 'Array99 has good blog for PHP programming.';
var spStr = strr.split(' ');
var ff = []
ff = spStr.map((v) => {
	if(v == 'good'){
		return 'bad'
	}else{
		return v
	}
});
console.log(ff)
console.log(spStr) */

/* 
// Find a position of a word in a string. //
var str = 'Array99 has good blog for PHP programming';
console.log(str.indexOf('good')) */


/* 
// How to display first 100 characters of a paragraph. //
var para = "OOPs is a powerful software development concept and it always insists to minimize, reuse and better management of code. Inheritance is one of the powerful features of OOPs which provides re-usability of code. Traits which is a new feature introduce in PHP 5.4. The concept of traits added some extra feature in single inheritance.";

var slicePara = para.slice(0,100)
console.log(slicePara)  */
 
 
/* 
//Find last 4 letter of the string. //
var letter = 'Array99 has good blog for PHP programming';
var lastLetter = letter.slice(letter.length-4);
console.log(lastLetter) */

/* 
// Extract “good blog” from of below string. //
var str = 'Array99 has good blog for PHP programming.';
var extract = 'good blog'
var pos = str.indexOf(extract)
var totalLength = extract.length + pos
var sliceData = str.slice(pos,totalLength)
console.log(sliceData) */

/* 
// Find the index of any element in an array. //
var arr = [34, 556, 678, 2]
console.log(arr.indexOf(556)) */

/* 
// How to remove first two elements from an array. //
var ree = [23, 44, 667, 1, 09]
var sds = ree.splice(0 , 2)
console.log(ree) // data left after splice
console.log(sds) // the splice(removed) data */


/* 
// How to remove two elements from middle in below array. //
var colors = ["red", "green", "blue", "yellow"]
var re = colors.splice(1,2)
console.log(re) */


/* 
// How to remove last element and insert two new elements in below array. //
var colors = ["red", "green", "blue", "yellow"]
colors.pop()
colors.push('black', 'white')
console.log(colors) */


/* 
// Check element in below array is an array or not. //
var go = ["red", "green", ["orange", "maroon"], "blue", "yellow", ["purple", "brown"]]
console.log(Array.isArray(go)) */

/* 
// Convert any name in an array. //
var name = 'sachin tendulkar';
var nameArr = name.split(' ')
var mapName = nameArr.map((m) => {
	return m.split('')
})
mapName = mapName[0] +','+ mapName[1]
console.log(mapName.split(',')) */

/* 
// Write a program to print Factorial of any number //
var num = 6;
var fact = 1;
for(var j=1; j<=6; j++){
	fact = fact * j;
}
console.log(fact) */

/* 
// Write a program in to print Fibonacci series //

var first = 0
var second = 1
var arr = []
arr.push(first)
arr.push(second)
for(var i=0; i<=10; i++){
	val = first + second
	arr.push(val)
	first = second
	second = val
}
console.log(arr.join(',')) // array to string */

/* // Write a program to find whether a number is Armstrong or not //
var number = arm = 371
var arm = 372
var sum = 0 

// console.log(Math.floor(narm / 10))

while(arm != 0){
	var rem = arm % 10
	console.log(rem)
	sum =  sum + (rem * rem * rem)
	arm = Math.floor(arm / 10)
}
console.log(sum) */

/* // Write a program to print Reverse of any number //
var number = 3490
var rev = []
while(number !== 0){
	var lastNum = number % 10
	rev.push(lastNum)
	number = Math.floor(number / 10)
}
console.log(rev.join(''))  */

/* // To check whether a number is Prime or not. //
var chkNum = 24
var pNum = 39

function checkPrime(num){
	if(num == 1 || num == 2)
		return true
	
	for(var i=2; i<num; i++){
		if(num % i == 0)
			return false
		else
			return true
	}
}
var prime = checkPrime(pNum);
console.log(prime) */

/* // Program to find whether a year is LEAP year or not //
var year = 2008
if(year % 4 === 0)
	console.log('leap year')
else
	console.log('Not Leap year') */


/* // Write a program to find factor of any number //
var num = 12;
var fact = []
for(var i=1; i<=num; i++){
	if(num % i == 0){
		fact.push(i)
	}
}
console.log(fact.join(',')) */

/* // Write a Program for finding the 2nd biggest number in an array without using any array functions. //
function returnHigh(arrNums){
	var high = 0
	for(var i = 0; i<=arrNums.length; i++){
		if(arrNums[i] > high){
			high = arrNums[i]
		}
	}
	return high
}
var arrNums = [23,4,0,567,92,9837,000]
var high = returnHigh(arrNums)
console.log(high)
// var indexOfHigh = arrNums.indexOf(high)
var newArr = arrNums.map((value) => {
		return (value != high) ? value : 0
	})
var secondhigh = returnHigh(newArr)
console.log(secondhigh)
 */

/* // remove all occurence of _ with space in javascript //
 
var hello = "Hello_there_go."
    .replace(/_/g, ' ');

console.log(hello) */

/* // upper case first alhabet in an string //

var str = 'this is ALL Great. so why not do it again'
function ucFirst(str){
	var explodeStr = str.split('.')
	var sd = explodeStr.map(function(strEl){
		var strEl = strEl.trim()
		var firstLetter = strEl.charAt(0).toUpperCase()	
		return firstLetter + strEl.slice(1).toLowerCase()
	})
	return sd.join('.')
}

var re = ucFirst(str)
console.log(re) */


/* // Write a Program for Bubble sorting //
var sd = [7,44,23,200, 2]
var sdStr = ['0','0','0','0', '1', '1', '1']
var newSd = sdStr.map(function(val){
	return parseInt(val)
})
console.log(newSd)


for(j=0; j< sd.length; j++){
	for(i=0; i < sd.length; i++){
			if(sd[i] < sd[i + 1]){
				var t =  sd[i]
				sd[i] =  sd[i + 1]
				sd[i + 1] = t				
			}		
	}
}
console.log(sd) */


// const names = ['John', 'Paul', 'John', 'George', 'Ringo'];

// function removeDups(names) {
  // let unique = {}
	// names.forEach((i) => {
		// if(!unique[i]){
			// unique[i] = true
		// }		
	// })
	// return Object.keys(unique)
// }

// console.log(removeDups(names));



/* var http = require('http')
var server = http.createServer(function(req, res){
		res.writeHead(200, {'Content-type':'text/html'});
		res.write("<h1>Hello</h1>/n <h2>Hi</h2>")
		res.end();
	})
server.listen(5000, '127.0.0.1')
console.log('start')
 */








 
