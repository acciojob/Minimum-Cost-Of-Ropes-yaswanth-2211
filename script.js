function calculateMinCost() {
	let a=document.getElementById.innerHTML("text");
	let array=a.split(",").map(Number);
	let sum=0;
	    while(array.length>1){
	    array.sort(function(a, b){return a - b});
		let c=array[0]+array[1];
		sum=sum+c;
		array.splice(0,2,c);
		}
		document.getElementById("result").innerHTML = sum;
	}