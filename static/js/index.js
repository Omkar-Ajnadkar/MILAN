$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-trans");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() - 20);
	});
});

dateFuture = new Date(2018, 8, 8, 23, 59, 59);

function GetCount() {

	dateNow = new Date();
	//grab current date
	amount = dateFuture.getTime() - dateNow.getTime();
	//calc milliseconds between dates
	delete dateNow;

	// time is already past
	if (amount < 0) {
		document.getElementById('countbox').innerHTML = "Now!";
	}
	// date is still good
	else {

		days = 0;
		hours = 0;
		mins = 0;
		secs = 0;
		out = "";

		amount = Math.floor(amount / 1000); //kill the "milliseconds" so just secs

		days = Math.floor(amount / 86400); //days
		amount = amount % 86400;

		hours = Math.floor(amount / 3600); //hours
		amount = amount % 3600;

		mins = Math.floor(amount / 60); //minutes
		amount = amount % 60;

		secs = Math.floor(amount); //seconds

		// if(days != 0){out += days +" day"+((days!=1)?"s":"")+",<br />";}
		// if(days != 0 || hours != 0){out += hours +" hour"+((hours!=1)?"s":"")+",<br />";}
		// if(days != 0 || hours != 0 || mins != 0){out += mins +" minute"+((mins!=1)?"s":"")+",<br />";}
		// out += secs +" seconds";
		// document.getElementById('countbox').innerHTML=out;
		document.getElementById('days').innerHTML = days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = mins;
		document.getElementById('seconds').innerHTML = secs;


		setTimeout("GetCount()", 1000);
	}
}

window.onload = function () {
	GetCount();
}

const banner = document.querySelector('.banner');
const text = banner.querySelector('.banner_text');
const walk = 25; //100px

function shadow(e) {
	const {
		offsetWidth: width,
		offsetHeight: height
	} = banner;
	let {
		offsetX: x,
		offsetY: y
	} = e;
	//console.log(this, e.target);
	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}
	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / height * walk) - (walk / 2));

	text.style.textShadow = `${xWalk * -1}px ${yWalk * 0}px 0 rgba(0,255,0,0.7)`;
}

banner.addEventListener('mousemove', shadow);

// counter = document.getElementById('.counter')
// function clickedIt() {
// 	var canSee = $("#navbarToggler-1").is(":visible");
// 	if(canSee === true){
// 		alert('true');
// 		counter.style.color="red";
// 	}
// }