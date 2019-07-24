function displayShopCode(argument) {
	// body...
	var shopCode = document.querySelector("div.shop-code"),
	shopItem = document.querySelector("li.shop");
	childNodeStopPropagation(shopCode,"mouseover");
	childNodeStopPropagation(shopItem,"mouseover");
	addEvent(shopItem,"mouseenter",function (argument) {
		// body...
		shopCode.style.display = "block";
	});
	addEvent(window,"mouseover",function (e) {
		// body...
		var e = e || window.event;
		if (e.target != shopCode && e.target != shopItem) {
			shopCode.style.display = "none";
		}
	})
}
displayShopCode();