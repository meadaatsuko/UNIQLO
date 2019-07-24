function bannerMove(argument) {
	// body...
	var banner = document.querySelector("div.imageCenter ul"),
	buttons = document.querySelectorAll("div.button ul li"),
	count = -1280,stop = null,i = 0,lastIndex = 0,
	leftButton = document.querySelector("div.images div.side a:first-child"),
	rightButton = document.querySelector("div.images div.side a:last-child");
	function turnRight(argument) {
		// body...
		if (count >= -7680) {
			count -= 1280;
			if (i < 4) {
				i++;
				buttons[lastIndex].style.background = "#d1d1d1";
				buttons[i].style.background = "#606060";
				lastIndex = i;
			}
			banner.style.transition = "left 500ms";
			banner.style.left = count + "px";
			if (count == -7680) {
				count = -1280;
				i = 0;
				buttons[lastIndex].style.background = "#d1d1d1";
				buttons[i].style.background = "#606060";
				lastIndex = 0;
				setTimeout(function (argument) {
					// body...
					banner.style.transition = "left 0s";
					banner.style.left = count + "px";
				},500);
			}
		}
	}
	function turnLeft(argument) {
		// body...
		if (count <= 0) {
			if (i > 0) {
				i--;
				buttons[lastIndex].style.background = "#d1d1d1";
				buttons[i].style.background = "#606060";
				lastIndex = i;
			}
			count += 1280;
			banner.style.transition = "left 500ms";
			banner.style.left = count + "px";
			if (count == 0) {
				count = -6400;
				i = 4;
				buttons[lastIndex].style.background = "#d1d1d1";
				buttons[i].style.background = "#606060";
				lastIndex = 4;
				setTimeout(function (argument) {
					// body...
					banner.style.transition = "left 0s";
					banner.style.left = count + "px";
				},500);
			}
		}
	}
	stop = setInterval(function (argument) {
		// body...
		turnRight();
	},5000);
	function selectButton(e) {
		// body...
		for (var j = 0; j < buttons.length; j++) {
			if (e.target == buttons[j]) {
				count = -1280 - j * 1280;
				banner.style.transition = "left 500ms";
				banner.style.left = count + "px";
				buttons[lastIndex].style.background = "#d1d1d1";
				buttons[j].style.background = "#606060";
				lastIndex = i = j;
			}
		}
	}
	addEvent(window,"click",function (e) {
		// body...
		var e = e || window.event;
		clearInterval(stop);
		selectButton(e);
		stop = setInterval(function (argument) {
			// body...
			turnRight();
		},5000);
	});
	addEvent(rightButton,"click",function (argument) {
		// body...
		clearInterval(stop);
		turnRight();
		stop = setInterval(function (argument) {
		// body...
		turnRight();
		},5000);
	});
	addEvent(leftButton,"click",function (argument) {
		// body...
		clearInterval(stop);
		turnLeft();
		stop = setInterval(function (argument) {
		// body...
		turnRight();
		},5000);
	});
	addEvent(window,"focus",function (argument) {
		// body...
		clearInterval(stop);
		stop = setInterval(function (argument) {
			// body...
			turnRight();
		},5000);
	});
	addEvent(window,"blur",function (argument) {
		// body...
		clearInterval(stop);
	});
}
bannerMove();


function clothesNotice() {
	// body...
	var maleDisplay = document.querySelector("div.male-display");
	var perferDisplay = document.querySelector("div.perfer-display");
	var femaleDisplay = document.querySelector("div.female-display");
	var preDisplay = document.querySelector("div.pre-display");
	var digitalTaps = document.querySelectorAll("div.digital-tabs li");
	var middleContent = document.querySelector("div.middle-content");
	for (var i = 0; i < digitalTaps.length; i++) {//选择服装分类标签事件
		addEvent(digitalTaps[i],"mouseover",function (event) {
			// body...
			var temp = this.querySelector("img:first-child");
			temp.style.display = "none";
		});
		addEvent(digitalTaps[i],"mouseout",function (event) {
			// body...
			var temp = this.querySelector("img:first-child");
			temp.style.display = "block";
		})
	}

	//产品列表加载事件
	var clothesNoticeBannerLoadEvent = function (productDisplay) {//服装轮播加载事件
		// body...
		var productDisplayItems = productDisplay.querySelectorAll("div.boxItem");
		var middleElements = [],leftElements = [],rightElements = [];
		for (var i = productDisplayItems.length - 8; i < productDisplayItems.length; i++) {
			middleElements.push(productDisplayItems[i]);
		}
		for (var j = 0; j < productDisplayItems.length - 8; j++) {
			leftElements.push(productDisplayItems[j]);
		}
		for (var k = 0; k < leftElements.length; k++) {
			leftElements[k].style.left = "-250px";
		}

		productDisplay.middleElements = middleElements;
		productDisplay.leftElements = leftElements;
		productDisplay.rightElements = rightElements;
		productDisplay.count = 0;
	}
	clothesNoticeBannerLoadEvent(maleDisplay);
	clothesNoticeBannerLoadEvent(perferDisplay);
	clothesNoticeBannerLoadEvent(femaleDisplay);

	// 产品列表显示消失事件
	var displayMiddleBoxItem = function (productDisplay) {
		// body...
		var middleElements = productDisplay.middleElements;
		var count = productDisplay.count;
		var step = 44;
		if (count == 0) {
			productDisplay.style.visibility = "visible";
			middleContent.style.height = "400px";
			for (var i = 0; i < 8; i++) {
				middleElements[i].style.left = step + "px";
				step += 137;
			}
			productDisplay.count = 1;
		}else{
			productDisplay.style.visibility = "hidden";
			middleContent.style.height = "0px";
			for (var i = 0; i < 8; i++) {
				middleElements[i].style.left = step + "px";	
			}
			productDisplay.count = 0;
		}
	}
	var clearMiddleBoxItems = function (productDisplay) {
		// body...
		var count = productDisplay.count;
		var middleElements = productDisplay.middleElements;
		productDisplay.count = 0;
		var step = 44;
		productDisplay.style.visibility = "hidden";
		if (middleElements) {

			for (var i = 0; i < middleElements.length; i++) {
				middleElements[i].style.left = step + "px";	
			}
		}

	}
	function openPerferClothes(event) {
		// body...
		var perfer = document.querySelector("li#prefer-button");
		var male = document.querySelector("li#male-button");
		var female = document.querySelector("li#female-button");
		switch(event.target){
			case perfer:
			clearMiddleBoxItems(maleDisplay);
			clearMiddleBoxItems(femaleDisplay);
			displayMiddleBoxItem(perferDisplay);
			break;
			case female:
			clearMiddleBoxItems(maleDisplay);
			clearMiddleBoxItems(perferDisplay);
			displayMiddleBoxItem(femaleDisplay);
			break;
			case male:
			clearMiddleBoxItems(femaleDisplay);
			clearMiddleBoxItems(perferDisplay);
			displayMiddleBoxItem(maleDisplay);
		}
	}

	//产品翻转事件
	function selectPerferClothesItem(productDisplay) {
		// body...
		var boxs = productDisplay.querySelectorAll("div.boxItem");
		var rightBox,leftBox;
		var mouseOverBoxsEvent = function (event) {
			// body...
			this.style.zIndex = "10";
			var temp = this.querySelector("a");
			temp.removeAttribute("class");
			var leftBoxLength = productDisplay.leftElements.length;//左侧隐藏元素
			var rightBoxLength = productDisplay.rightElements.length;//右侧隐藏元素
			var rightMiddleBoxs = selectArrowElement(this,"nextSibling");//所有右侧元素
			var leftMiddleBoxs = selectArrowElement(this,"previousSibling");
			var leftLen = leftMiddleBoxs.length - leftBoxLength;////用所有右侧元素减去隐藏元素就得出中间部分右侧的数量
			var rightLen = rightMiddleBoxs.length - rightBoxLength + 1;
			for (var j = this.index + 1; j < this.index + rightLen; j++) {
				boxs[j].style.zIndex = "0";
				var leftElementTrans = boxs[j].querySelector("a");
				leftElementTrans.className = "rightElement";
			}
			for (var k = this.index - leftLen; k < this.index; k++) {
				boxs[k].style.zIndex = "0";
				var rightElementTrans = boxs[k].querySelector("a");
				rightElementTrans.className ="leftElement";
			}

		}
		var mouseOutBoxsEvent = function (event) {
			// body...
			for (var i = 0; i < boxs.length; i++) {
				boxs[i].style.zIndex = "0";
				var temp = boxs[i].querySelector("a");
				temp.removeAttribute("class");
			}
		}
		for (var i = 0; i < boxs.length; i++) {
			boxs[i].index = i;
			addEvent(boxs[i],"mouseover",mouseOverBoxsEvent);
			addEvent(boxs[i],"mouseout",mouseOutBoxsEvent);
		}
	}

	//轮播左右按钮事件
	function productClothesEvent(productDisplay) {
		// body...
		var leftButton = productDisplay.querySelector("div.side-buttons button.left");
		var rightButton = productDisplay.querySelector("div.side-buttons button.right");
		var middleElements = productDisplay.middleElements;
		var leftElements = productDisplay.leftElements;
		var rightElements = productDisplay.rightElements;
		var leftElementMove = function (arrow) {
			// body...
			if (arrow == 0) {
				var temp = middleElements.shift();
				temp.style.left = "-250px";
				leftElements.push(temp);
			}else if (arrow == 1) {
				var temp1 = leftElements.pop();
				middleElements.unshift(temp1);
				temp1.style.left = "-93px";
			}
		}
		var middleElementMove = function (arrow) {
			// body...
			if (arrow == 0) {
				for (var i = 0; i < middleElements.length; i++) {
					var currentMiddleElementPos = parseInt(middleElements[i].style.left);
					var newMiddleElementPos = currentMiddleElementPos - 137;
					middleElements[i].style.left = newMiddleElementPos + "px";
				}
			}else if (arrow == 1) {
				for (var j = 0; j < middleElements.length; j++) {
					var currentMiddleElementPos = parseInt(middleElements[j].style.left);
					var newMiddleElementPos = currentMiddleElementPos + 137;
					middleElements[j].style.left = newMiddleElementPos + "px";
				}
			}
		}
		var rightElementMove = function (arrow) {
			// body...
			if (arrow == 0) {
				var temp = rightElements.pop();
				temp.style.left = "1003px";
				middleElements.push(temp);
			}else if (arrow == 1) {
				var temp1 = middleElements.pop();
				temp1.style.left = "1300px";
				rightElements.push(temp1);
			}
		}
		addEvent(leftButton,"click",function (event) {
			// body...
			if (rightElements.length > 0) {
				leftElementMove(0);
				middleElementMove(0);
				rightElementMove(0)
			}
		});
		addEvent(rightButton,"click",function (event) {
			// body...
			if (leftElements.length > 0) {
				leftElementMove(1);
				middleElementMove(1);
				rightElementMove(1);
			}
		});
	}
	productClothesEvent(maleDisplay);
	productClothesEvent(femaleDisplay);
	selectPerferClothesItem(maleDisplay);
	selectPerferClothesItem(perferDisplay);
	selectPerferClothesItem(femaleDisplay);
	addEvent(window,"click",openPerferClothes);
}
addEvent(window,"load",clothesNotice);


//商品分类事件
function productSelected(argument) {
	// body...
	var lastClassName = "women" ,newClassName;

	var secondTitles = document.querySelectorAll("div.second-title>div");
	function selectTips(item) {
		// body...
		var tempClassNamePos = item.className.search(/\-title/);
		newClassName = item.className.substring(0,tempClassNamePos);
		if (lastClassName) {
			var lastClassNameTips = document.querySelectorAll("div." + lastClassName + "-title");
			var lastClassNameContent = document.querySelectorAll("div." + lastClassName + "-content");
		}
		
		var newClassNameTips = document.querySelectorAll("div." + newClassName + "-title");
		var newClassNameContent = document.querySelectorAll("div." + newClassName + "-content");
		for (var i = 0; i < newClassNameTips.length; i++) {
			if (lastClassName) {
				removeClassname(lastClassNameTips[i],"product-clicked");
				lastClassNameContent[i].style.display = "none";
			}
			
			addClassname(newClassNameTips[i],"product-clicked");
			newClassNameContent[i].style.display = "block";
		}
		lastClassName = newClassName;
	}
	for (var i = 0; i < secondTitles.length; i++) {
		addEvent(secondTitles[i],"click",function (event) {
			// body...
			var that = this;
			selectTips(that);
		});
	}
}
addEvent(window,"load",productSelected);


//最下部轮播事件
function bottomBanner(event) {
	// body...
	var count = -1300;
	var index = 0;
	var lastIndex = 0;
	var buttons = document.querySelectorAll("ul.banner-buttons li");
	var banner = document.querySelector("ul.banner-content");
	var rightButton = document.querySelector("div.side-buttons a:last-child");
	var leftButton = document.querySelector("div.side-buttons a:first-child");
	function turnDirection(direct) {
		// body...
		if (direct == "right") {
			if (count >= -5200) {
				count -= 325;
				index++;
				banner.style.transition = "300ms left";
				banner.style.left = count + "px";
				if (count == -5200) {
					index = 0;
					lastIndex = buttons.length -1;
					banner.style.left = count + "px";
					setTimeout(function (argument) {
						// body...
						count = -1300;
						banner.style.transition = "0s left";
						banner.style.left = count + "px";
					},300);
				}
			}
			buttons[lastIndex].style.background = "#d1d1d1";
			buttons[index].style.background = "#606060";
			lastIndex = index;
			
		}else if (direct == "left") {
			if (count <= 0) {
				count += 325;
				index--;
				banner.style.transition = "300ms left";
				banner.style.left = count + "px";
				if (count == -975) {
					index = buttons.length -1;
					lastIndex = 0;
				}
				if (count == 0) {
					banner.style.left = count + "px";
					setTimeout(function (argument) {
						// body...
						count = -3900;
						banner.style.transition = "0s left";
						banner.style.left = count + "px";
					},300);
				}
			}
			buttons[lastIndex].style.background = "#d1d1d1";
			buttons[index].style.background = "#606060";
			lastIndex = index;
		}
		console.log(index);
	}
	var clickButtonEvent = function (event) {
		// body...
		index = this.index;
		count = -1300 - this.index * 325;
		banner.style.left = count + "px";
		buttons[lastIndex].style.background = "#d1d1d1";
		buttons[index].style.background = "#606060";
		lastIndex = index;

	}
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].index = i;
		addEvent(buttons[i],"click",clickButtonEvent);
	}
	
	addEvent(rightButton,"click",function (event) {
		// body...
		turnDirection("right");
	});
	addEvent(leftButton,"click",function (event) {
		// body...
		turnDirection("left");
	});
}
addEvent(window,"load",bottomBanner);

//二级菜单选择
function secondMenuEvent(event) {
	// body...
	var count = 0;
	var lastIndex = 0;
	var webNav = document.querySelector("div.web-nav");
	var secondMenuBackground = document.querySelector("div.second-menu-background");
	var secondMenuContent = document.querySelectorAll("div.second-menu-list ul li");
	var secondMenu = document.querySelector("div.second-menu");
	var clothesList = document.querySelectorAll(".second-menu-title-list");
	var secondMenuCloseButtons = document.querySelectorAll("i.close");
	var displaySecondMenu = function (that) {
		// body...
		var lastFont = clothesList[lastIndex].querySelector("a");
		var currentFont = clothesList[that.index].querySelector("a");
		removeClassname(lastFont,"clicked");
		addClassname(currentFont,"clicked");
		webNav.style.zIndex = 15;
		secondMenu.style.display = "block";
		secondMenuContent[lastIndex].style.display = "none";
		secondMenuContent[that.index].style.display = "block";
		lastIndex = that.index;
	};
	var disappearSecondMenu = function () {
		// body...
		webNav.style.zIndex = 0;
		secondMenu.style.display = "none";
		for (var i = 0; i < secondMenuContent.length; i++) {
			var font = clothesList[i].querySelector("a");
			secondMenuContent[i].style.display = "none";
			removeClassname(font,"clicked");
		}
		
	};
	for (var i = 0; i < clothesList.length; i++) {
		clothesList[i].index = i;
		addEvent(secondMenuCloseButtons[i],"click",disappearSecondMenu);
		addEvent(clothesList[i],"click",function (event) {
			// body...
			if (secondMenuContent[this.index].style.display == "block") {
				disappearSecondMenu();
			}else{
				displaySecondMenu(this);
			}
		});
	}
	addEvent(window,"click",function (event) {
		// body...
		var target = event.target;
		if (target == secondMenuBackground) {
			disappearSecondMenu();
		}
	});
	addEvent(window,"scroll",function (event) {
		// body...
		disappearSecondMenu();
	});
}
addEvent(window,"load",secondMenuEvent);
function headerFixedEvent(event) {
	// body...
	var fixedIcon = document.querySelector("div.user-information i#fixed-icon");
	var userInformation = document.querySelector("div.user-information");
	var headerFixed = function (event) {
		// body...
		var scrollTop = document.documentElement.scrollTop;
		if (scrollTop > 200) {
			fixedIcon.style.display = "block";
			userInformation.style.position = "fixed";
			userInformation.style.boxShadow = "0px 1px 2px #ccc";
		}else{
			fixedIcon.style.display = "none";
			userInformation.style.position = "relative";
			userInformation.style.boxShadow = "none";
		}
	};
	addEvent(window,"scroll",headerFixed);
}
addEvent(window,"load",headerFixedEvent);

//向上按钮事件
function fixedButtonEvent(event) {
	// body...
	var stop;
	var fixButton = document.querySelector("div.fixed-up");
	var pageUpEvent = function (stop) {
		// body...
		var currentScrollTop = document.documentElement.scrollTop;
		if (currentScrollTop != 0) {
			currentScrollTop -= currentScrollTop/50;
			document.documentElement.scrollTop = currentScrollTop;
		}else{
			clearInterval(stop);
		}
	}
	addEvent(fixButton,"click",function (event) {
		// body...
		stop = setInterval(function (argument) {
			// body...
			pageUpEvent(stop);
		},0);
	});
	addEvent(window,"scroll",function (event) {
		// body...
		var scrollTop = document.documentElement.scrollTop;
		if (scrollTop > 630) {
			fixButton.style.display = "block";
		}else{
			fixButton.style.display = "none";
		}
	});
}
addEvent(window,"load",fixedButtonEvent);