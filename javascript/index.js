function addEvent(element,type,fun) {
	// body...
	if (element.addEventListener) {
		element.addEventListener(type,fun,false);
	}else{
		element["on" + type] = fun;
	}
}
function childNodeStopPropagation(element,type) {
	// body...
	var childNodes = element.childNodes;
	for (var i = 0; i < childNodes.length; i++) {
		addEvent(childNodes[i],type,function (e) {
			// body...
			var e = e || window.event;
			e.stopPropagation();
		})
	}
}
function addClassname(element,newClass) {
	// body...
	if (element.className) {
		element.className =  element.className + " " + newClass;
	}else{
		element.className = newClass;
	}
}
function removeClassname(element,deleteClassname) {
	// body...
	var className = element.className;
	var list = className.split(" ");
	for (var i = 0; i < list.length; i++) {
		if (list[i] == deleteClassname) {
			list.splice(i,1);
		}
	}
	element.className = list.join(" ");
}
function selectArrowElement(element,arrow) {
	// body...
	var list = [];
	var arrowSiblingNode = element[arrow];
	while(arrowSiblingNode != null){
		if (arrowSiblingNode.nodeType == 1) {
			list.push(arrowSiblingNode);
		}
		arrowSiblingNode = arrowSiblingNode[arrow];
	}
	return list;
}