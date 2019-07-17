'use strict';

/* global cuid, Item */

const store = (function () {
  const foo = 'bar';
  let items= [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems= false;
  let searchTerm= '';

  let findById = function(id){
    return store.items.find(function(item) {
      return item.id === id;
    });
  };

  let addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  };

  let findAndToggleChecked = function(id) {
    let item = this.findById(id);
    item.checked = !item.checked; 
  };

  let findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      let item = findById(id);
      item.name = newName;
    }
    catch(error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  };

  let findAndDelete = function(id) {
    console.log(this.items);
    store.items = this.items.filter(item => item.id !== id);
    console.log(this.items);
  };

  let filterChecked = function(){
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  let getSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    getSearchTerm,
    filterChecked
  };
}() );