function newsBanner(argument) {
	// body...
	var banner = document.querySelector("div.notice-center ul"),
	rightButton = document.querySelector("div.side-arrow a:last-child")
	leftButton = document.querySelector("div.side-arrow a:first-child"),
	count = -1170;
	function turnRight(argument) {
		// body...
		if (count >= -7020) {
			count -=1170;
			banner.style.transition = "500ms left";
			banner.style.left = count + "px";
			if(count == -7020){
				setTimeout(function (argument) {
					// body...
					count = -1170;
					banner.style.left = count + "px";
					banner.style.transition = "0s left";
				},500);
			}
		}
	}
	function turnLeft(argument) {
		// body...
		if (count <= 0) {
			count += 1170;
			banner.style.transition = "500ms left";
			banner.style.left = count + "px";
			if (count == 0) {
				setTimeout(function (argument) {
					// body...
					count = -5850;
					banner.style.left = count + "px";
					banner.style.transition = "0s left";
				},500);
			}
		}
	}
	addEvent(rightButton,"click",function (argument) {
		// body...
		clearInterval(bannerSwitch);
		turnRight();
		bannerSwitch = setInterval(function (argument) {
		// body...
		turnRight();
		},3000);

	});
	addEvent(leftButton,"click",function (argument) {
		// body...
		clearInterval(bannerSwitch);
		turnLeft();
		bannerSwitch = setInterval(function (argument) {
		// body...
		turnRight();
		},3000);
	})
	bannerSwitch = setInterval(function (argument) {
		// body...
		turnRight();
	},3000);
	addEvent(window,"focus",function (argument) {
		// body...
		clearInterval(bannerSwitch);
		bannerSwitch = setInterval(function (argument) {
			// body...
			turnRight();
		},3000);
	});
	addEvent(window,"blur",function (argument) {
		// body...
		clearInterval(bannerSwitch);
	})
}
newsBanner();