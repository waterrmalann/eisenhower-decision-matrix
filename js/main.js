const e_doInput = document.getElementById("doInput");
const e_doButton = document.getElementById("doButton");
const e_doList = document.getElementById("doList");

const e_scheduleInput = document.getElementById("scheduleInput");
const e_scheduleButton = document.getElementById("scheduleButton");
const e_scheduleList = document.getElementById("scheduleList");

const e_delegateInput = document.getElementById("delegateInput");
const e_delgateButton = document.getElementById("delegateButton");
const e_delegateList = document.getElementById("delegateList");

const e_deleteInput = document.getElementById("deleteInput");
const e_deleteButton = document.getElementById("deleteButton");
const e_deleteList = document.getElementById("deleteList");

var appData = {
	"doList": [],
	"scheduleList": [],
	"delegateList": [],
	"deleteList": []
};

function createItemElement(content) {
	let _liElement = document.createElement('li');
	_liElement.textContent = content;
	_liElement.addEventListener("dblclick", () => {
		// Double click removes the list item.
		_liElement.parentNode.removeChild(_liElement);
	});
	return _liElement;
}

e_doButton.addEventListener("click", () => {
	let _content = e_doInput.value.trim();
	e_doInput.value = "";
	if (_content != "") {
		let _liElement = createItemElement(_content);
		e_doList.appendChild(_liElement);
		appData.doList.push(_content);
		saveData();
	}
});

e_scheduleButton.addEventListener("click", () => {
	let _content = e_scheduleInput.value.trim();
	e_scheduleInput.value = "";
	if (_content != "") {
		let _liElement = createItemElement(_content);
		e_scheduleList.appendChild(_liElement);
		appData.scheduleList.push(_content);
		saveData();
	}
});

e_delgateButton.addEventListener("click", () => {
	let _content = e_delegateInput.value.trim();
	e_delegateInput.value = "";
	if (_content != "") {
		let _liElement = createItemElement(_content);
		e_delegateList.appendChild(_liElement);
		appData.delegateList.push(_content);
		saveData();
	}
});

e_deleteButton.addEventListener("click", () => {
	let _content = e_deleteInput.value.trim();
	e_deleteInput.value = "";
	if (_content != "") {
		let _liElement = createItemElement(_content);
		e_deleteList.appendChild(_liElement);
		appData.deleteList.push(_content);
		saveData();
	}
});

function loadData() {
	let _data = window.localStorage.getItem('appData-edm');
	if (_data != null) {
		_parsed = JSON.parse(_data);
		appData.doList = _parsed.doList || [];
		appData.scheduleList = _parsed.scheduleList || [];
		appData.delegateList = _parsed.delegateList || [];
		appData.deleteList = _parsed.deleteList || [];
	}
}

function saveData() {
	window.localStorage.setItem('appData-edm', JSON.stringify(appData));
}

function clearData() {
	appData.doList = [];
	appData.delegateList = [];
	appData.scheduleList = [];
	appData.deleteList = [];
}

function syncData() {
	e_doList.innerHTML = '';
	e_scheduleList.innerHTML = '';
	e_delegateList.innerHTML = '';
	e_deleteList.innerHTML = '';

	for (const _item of appData.doList) {
		let _liElement = createItemElement(_item);
		e_doList.appendChild(_liElement);
	}
	for (const _item of appData.scheduleList) {
		let _liElement = createItemElement(_item);
		e_scheduleList.appendChild(_liElement);
	}
	for (const _item of appData.delegateList) {
		let _liElement = createItemElement(_item);
		e_delegateList.appendChild(_liElement);
	}
	for (const _item of appData.deleteList) {
		let _liElement = createItemElement(_item);
		e_deleteList.appendChild(_liElement);
	}
}

loadData();
syncData();