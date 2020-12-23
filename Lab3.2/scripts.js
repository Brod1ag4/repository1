window.onload = function () {
  var listingElements = ["apple", "orange"];
  var storeElements = ["apple", "orange"];

  // логика JS, не связана с DOM
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  // добавление в таблицу Listing
  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }

  // удаление из списка
  function deleteElement(element, mass) {
    var elementPosition = mass.indexOf(element);
    if (elementPosition !== -1) {
      var list = mass.splice(elementPosition, 1);
      return list;
    }
  }

  //добавление новго элемента
  function addnewElement() {
    var newelement = prompt("Введите название фрукта");
    listingElements.push(newelement);
  }

  function renameElement(oldName, mass, newName) {
    var elementPosition = mass.indexOf(oldName);
    if (elementPosition !== -1) {
      var list = mass.splice(elementPosition, 1, newName);
      return list;
    }
  }

  function sort() {
    if (listingElements[0] > listingElements[listingElements.length - 1]) {
      listingElements = listingElements.sort();
      storeElements = storeElements.sort();
    } else {
      listingElements = listingElements.sort();
      storeElements = storeElements.sort();
      listingElements = listingElements.reverse();
      storeElements = storeElements.reverse();
    }
  }

  // updateUI берет данные из массивов и занимается вставкой
  function updateUI() {
    var storeSelect = document.querySelector(".store-select");
    var listingSelect = document.querySelector(".listing-select");
    storeSelect.innerHTML = "";
    listingSelect.innerHTML = "";

    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  // регистрируем события
  var addButton = document.querySelector("#add-button");
  var addToListing = document.querySelector("#add-to-listing");
  var deleteButton = document.querySelector("#delete");
  var newElementButton = document.querySelector("#newElement");
  var sortButton = document.querySelector("#sorting");
  var renameButton = document.querySelector("#rename");

  addButton.onclick = function () {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };

  addToListing.onclick = function () {
    var selectedOption = document.querySelector(".store-select option:checked");
    addToListingElements(selectedOption.innerText);
    updateUI();
  };

  deleteButton.onclick = function () {
    var selectedOption = document.querySelector(".store-select option:checked");
    addToListingElements(selectedOption.innerText);
    updateUI();
  };
  deleteButton.onclick = function () {
    if (document.querySelector(".store-select option:checked") !== null) {
      var selectedOption = document.querySelector(
        ".store-select option:checked"
      );
      deleteElement(selectedOption.innerText, storeElements);
    } else {
      var selectedOption = document.querySelector(
        ".listing-select option:checked"
      );
      deleteElement(selectedOption.innerText, listingElements);
    }
    updateUI();
  };

  newElementButton.onclick = function () {
    addnewElement();
    updateUI();
  };

  renameButton.onclick = function () {
    let newName = prompt("Enter new name");
    if (document.querySelector(".store-select option:checked") !== null) {
      var selectedOption = document.querySelector(
        ".store-select option:checked"
      );
      rename(selectedOption.innerText, storeElements, newName);
    } else {
      var selectedOption = document.querySelector(
        ".listing-select option:checked"
      );
      rename(selectedOption.innerText, listingElements, newName);
    }
    updateUI();
  };

  sortButton.onclick = function () {
    sort();
    updateUI();
  };
};
