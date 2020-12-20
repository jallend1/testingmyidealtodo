const addNew = document.getElementById('addnew');

const addNewItem = item => {
    const primaryList = document.getElementById('primarylist');
    const newItem =  document.createElement('li');
    newItem.textContent = item;
    primaryList.appendChild(newItem);
}

const handleNew = e => {
    e.preventDefault();
    addNewItem(e.target[0].value)
    addNew.reset();
}

addNew.addEventListener('submit', handleNew);