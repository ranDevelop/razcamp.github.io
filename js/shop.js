function itemBuy()
{
	a = 649
	b = 1049
	c = 599
  d = 1249
  e = 949
  f = 999

	product = prompt ("Please enter the desired Camping Code", "")

	if (product == "a") {
		op1 = "You have booked Thailand Island Hopping tour : &pound;"
		document.getElementById("bought").innerHTML = op1 + a
	}

	else

	if (product == "b") {
		op2 = "You have booked Camp Elephant : &pound;"
		document.getElementById("bought").innerHTML = op2 + b
	}

	else

	if (product == "c") {
		op3 = "You have booked Camp Trialblazer : &pound;"
		document.getElementById("bought").innerHTML = op3 + c
	}

	else
	if (product == "d") {
		op4 = "You have booked Camp Phuket : &pound;"
		document.getElementById("bought").innerHTML = op4 + d
	}

	else
	if (product == "e") {
		op5 = "You have booked Camp Chiang Mai : &pound;"
		document.getElementById("bought").innerHTML = op5 + e
	}

	else
	if (product == "f") {
		op6 = "You have booked Backpacking Party : &pound;"
		document.getElementById("bought").innerHTML = op6 + f
	}

	else

	if (product == "") {
		op7 = "You have booked nothing: &pound;0.00"
		document.getElementById("bought").innerHTML = op7
	}
}
