let addedItems = JSON.parse(localStorage.getItem('addedItems')) || [];
function displayAddedItems() {
 let comparisonGrid = document.getElementById("comparison-grid");
 comparisonGrid.innerHTML = ""; // Clear the grid
 let columnNames = ["Image", "Name", "Category", "Date", "Architect", "Tech Process", "Core", "Threads", "Clock", "IGP", "TDP", "Price"];

 // Создание заголовка
 let headerRow = document.createElement('div');
 headerRow.classList.add('grid-row');
 columnNames.forEach((columnName, index) => {
   let headerCell = document.createElement('div');
   headerCell.textContent = columnName;
   headerCell.classList.add('grid-cell');
   
   headerRow.appendChild(headerCell);
 });
 comparisonGrid.appendChild(headerRow);

 addedItems.forEach((item, index) => {
  // Создание новой строки
  let newRow = document.createElement('div');
  newRow.classList.add('grid-row');
 
  // Создание ячеек
  let imageCell = document.createElement('div');
imageCell.classList.add('grid-cell');
let imageElement = document.createElement("img");
imageElement.src = item.image;
imageCell.appendChild(imageElement);
 
  
 
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Удалить";
  deleteButton.addEventListener("click", function() {
      removeFromComparisonList(item);
  });
  
  imageCell.appendChild(deleteButton);
  deleteButton.style.position = 'absolute';
deleteButton.style.top = '0';
deleteButton.style.right = '0';
  newRow.appendChild(imageCell);

  let nameElement = document.createElement("div");
  nameElement.textContent = item.name;
  nameElement.classList.add('grid-cell');
  newRow.appendChild(nameElement);
 
  let categoryCell = document.createElement('div');
  categoryCell.textContent = item.category;
  categoryCell.classList.add('grid-cell');
  newRow.appendChild(categoryCell);
 
  let dateCell = document.createElement('div');
  dateCell.textContent = item.date;
  dateCell.classList.add('grid-cell');
  newRow.appendChild(dateCell);
 
  let architectCell = document.createElement('div');
  architectCell.textContent = item.architect;
  architectCell.classList.add('grid-cell');
  newRow.appendChild(architectCell);
 
  let techProcessCell = document.createElement('div');
  techProcessCell.textContent = item.techprocess;
  techProcessCell.classList.add('grid-cell');
  newRow.appendChild(techProcessCell);
 
  let coreCell = document.createElement('div');
  coreCell.textContent = item.core;
  coreCell.classList.add('grid-cell');
  newRow.appendChild(coreCell);
 
  let threadsCell = document.createElement('div');
  threadsCell.textContent = item.threads;
  threadsCell.classList.add('grid-cell');
  newRow.appendChild(threadsCell);
 
  let clockCell = document.createElement('div');
  clockCell.textContent = item.clock;
  clockCell.classList.add('grid-cell');
  newRow.appendChild(clockCell);
 
  let IGPCell = document.createElement('div');
  IGPCell.textContent = item.IGP;
  IGPCell.classList.add('grid-cell');
  newRow.appendChild(IGPCell);
 
  let TDPCell = document.createElement('div');
  TDPCell.textContent = item.TDP;
  TDPCell.classList.add('grid-cell');
  newRow.appendChild(TDPCell);
 
  let priceCell = document.createElement('div');
  priceCell.textContent = item.price;
  priceCell.classList.add('grid-cell');
  newRow.appendChild(priceCell);
 
  comparisonGrid.appendChild(newRow);
 });
 
}

function removeFromComparisonList(item) {
 let index = addedItems.indexOf(item);

 // Удалить 
 if (index > -1) {
     addedItems.splice(index, 1);
 }
 localStorage.setItem('addedItems', JSON.stringify(addedItems));
 displayAddedItems();
}

document.addEventListener("DOMContentLoaded", displayAddedItems);
