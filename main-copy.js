var MemberProto = {
	mSalary: function(salary){
		this.salary = salary;
		return this;
	}
}

var tato, me, baba;
tato = Object.create(MemberProto).mSalary(10000);
me = Object.create(MemberProto).mSalary(5600);
baba = Object.create(MemberProto).mSalary(2000);

function payProcent (t,m,b){
	var tp = (100 * t) / (t + m + b);
	var mp = (100 * m) / (t + m + b);
	var bp = (100 * b) / (t + m + b);
	var ppArray = [tp, mp, bp];
	return ppArray;
}; 

var percentArray = payProcent(tato.salary, me.salary, baba.salary); 

function topayFunc (toPay) {
	var payAmountArray = [toPay/100*percentArray[0], toPay/100*percentArray[1], toPay/100*percentArray[2]];
	return payAmountArray;
}

function inneringHTML (toPay, toPayInput){
	var summaryArray;
	var toPayInputParent = toPayInput.parentElement;
	var getSiblings = function (elem) {
		// Setup siblings array and get the first sibling
		var siblings = [];
		var sibling = elem.parentNode.firstChild;
		// Loop through each sibling and push to the array
		while (sibling) {
			if (sibling.nodeType === 1 && sibling !== elem) {
				siblings.push(sibling);
			}
			sibling = sibling.nextSibling
		}
		return siblings;
	};
	var siblings = getSiblings(toPayInputParent);
	var mustPayAmountArray = topayFunc(toPay);
	for(i=0; i<siblings.length; i++){
		siblings[i].innerHTML = mustPayAmountArray[i].toFixed();
		totalArray[i].innerHTML = mustPayAmountArray[i].toFixed();
	}
}

var totalArrayData = [];
var totalArray = document.querySelectorAll(".total");
var inputArray = document.querySelectorAll(".iii");
inputArray.forEach(function(elem) {
	elem.addEventListener('keyup', function(event) {
		if (this.classList.contains('t-i')) {
			var toPay = this.value;
			var toPayInput = document.querySelector(".t-i");
			inneringHTML(toPay, toPayInput);
		} else if (this.classList.contains('m-i')) {
			var toPay = this.value;
			var toPayInput = document.querySelector(".m-i");
			inneringHTML(toPay, toPayInput);
		} else if (this.classList.contains('b-i')) {
			var toPay = this.value;
			var toPayInput = document.querySelector(".b-i");
			inneringHTML(toPay, toPayInput);	
		}
	});	
});

