var MemberProto = {
	mSalary: function(salary){
		this.salary = salary;
		return this;
	}
}

var member1, member2, member3;
member1 = Object.create(MemberProto).mSalary(2000);
member2 = Object.create(MemberProto).mSalary(2000);
member3 = Object.create(MemberProto).mSalary(2000);

function payProcent (m1,m2,m3){
	var m1p = (100 * m1) / (m1 + m2 + m3);
	var m2p = (100 * m2) / (m1 + m2 + m3);
	var m3p = (100 * m3) / (m1 + m2 + m3);
	var ppArray = [m1p, m2p, m3p];
	return ppArray;
}; 

function topayFunc (toPay) {
	var percentArray = payProcent(member1.salary, member2.salary, member3.salary);
	var payAmountArray = [toPay/100*percentArray[0], toPay/100*percentArray[1], toPay/100*percentArray[2]];
	return payAmountArray;
}


function objectSalaryUpdate (){
	var salaryArray = document.querySelectorAll(".salary");
	salaryArray.forEach(function(elem) {
		if(elem.classList.contains("s1")) {
			var newSalary = parseInt(elem.value, 10);
			member1.salary = newSalary;
		} else if(elem.classList.contains("s2")){
			var newSalary = parseInt(elem.value, 10);
			member2.salary = newSalary;
		} else if(elem.classList.contains("s3")){
			var newSalary = parseInt(elem.value, 10);
			member3.salary = newSalary;
		}
		else{}				
	});
};



function inneringHTML (toPay, toPayInput, SalaryUpdateCallback){
	SalaryUpdateCallback();
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
		siblings[i].innerHTML = mustPayAmountArray[i].toFixed(1);
		totalArrayData[i] = mustPayAmountArray[i].toFixed(1);
	}

	return totalArrayData;
}

var totalArrayData = [];
var totalInputArray = document.querySelectorAll(".total");
var inputArray = document.querySelectorAll(".iii");
inputArray.forEach(function(elem) {
	elem.addEventListener('keyup', function(event) {
		if (this.classList.contains('t-i')) {
			var toPay = this.value;
			var toPayInput = document.querySelector(".t-i");
			var totalArrayData1 = inneringHTML(toPay, toPayInput, objectSalaryUpdate);
		} else if (this.classList.contains('m-i')) {
			var toPay = this.value;
			var toPayInput = document.querySelector(".m-i");
			var totalArrayData2 = inneringHTML(toPay, toPayInput, objectSalaryUpdate);
		} else if (this.classList.contains('b-i')) {
			var toPay = this.value;
			var toPayInput = document.querySelector(".b-i");
			var totalArrayData3 = inneringHTML(toPay, toPayInput, objectSalaryUpdate);
		}

	});	
});


//total

var ePaymentArray = document.querySelectorAll(".e-payment");
var wPaymentArray = document.querySelectorAll(".w-payment");
var gPaymentArray = document.querySelectorAll(".g-payment");	

function evgArraySummFunc(evgArray){
	var evgArraySumm = 0; 
	for(z = 0; z<evgArray.length; z++){
		evgArraySumm += parseFloat(evgArray[z].textContent,10);
	}
	return evgArraySumm;
}

document.querySelector(".result").onclick = function() {
	var evgArraySummFuncArray = [ evgArraySummFunc(ePaymentArray),	evgArraySummFunc(wPaymentArray), evgArraySummFunc(gPaymentArray) ];
	for(zz = 0; zz < 3; zz++ ){
		totalInputArray[zz].innerHTML = evgArraySummFuncArray[zz].toFixed(1);
	}
};


/* UI JS */
// let x = document.getElementsByClassName("m-caption-icon");
// let m = document.getElementsByClassName("m-name-body");

let x = document.getElementById("m-caption-icon");
let y = document.getElementById("m-name-hide-w");
let m = document.getElementById("m-name-body");
x.addEventListener('click', function (event) {
	m.classList.toggle("m-open");
});

y.addEventListener('click', function (event) {
	m.classList.toggle("m-open");
});

// document.getElementById("toggle").onclick = function() {
// 	    toggle();
// }


// x.addEventListener('click', function (event) {
//       if (m.style.display == "") {
//           m.style.display = "none";
//       } else {
//           m.style.display = "";
//       }
//     }
//   );

   // element.classList.toggle("mystyle");


   /* material click */

   var links = document.querySelectorAll('.ripplelink');

for (var i = 0, len = links.length; i < len; i++) {
  links[i].addEventListener('click', function(e) {
    var targetEl = e.target;
    var inkEl = targetEl.querySelector('.ink');

    if (inkEl) {
      inkEl.classList.remove('animate');
    }
    else {
      inkEl = document.createElement('span');
      inkEl.classList.add('ink');
      inkEl.style.width = inkEl.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
      targetEl.appendChild(inkEl);
    }

    inkEl.style.left = (e.offsetX - inkEl.offsetWidth / 2) + 'px';
    inkEl.style.top = (e.offsetY - inkEl.offsetHeight / 2) + 'px';
    inkEl.classList.add('animate');
  }, false);
}