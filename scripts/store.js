'use strict';

/* global store, cuid */

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
    store.items.find(function(item) {
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
      Item.validateName(name);
      let item = findById(id);
      item.name = newName;
    }
    catch(error) {
      console.log(`Cannot update name: {error.message}`);
    }
  };

  let findAndDelete = function(id) {
    return this.items.filter(item => item.id !== id);
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
  };
}() );