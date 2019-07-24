function webSearch(argument) {
	// body...
	var searchBar = document.querySelector("input#web-search");
	var hotSearch = document.querySelector("div.hot-search");
	addEvent(searchBar,"focus",function (argument) {
		// body...
		hotSearch.style.display = "block";
		addClassname(searchBar,"focusSearch");
	});
	addEvent(searchBar,"blur",function (e) {
		// body...
		var e = e || window.event;
		if (e.target != hotSearch) {
			hotSearch.style.display = "none";
			removeClassname(searchBar,"focusSearch");
		}
	})
}
webSearch();