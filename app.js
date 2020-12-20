const dummyData = [
    {id: 1, content: 'Have a party', created: Date.now()},
    {id: 2, content: 'Clean up after party', created: Date.now()},
    {id: 3, content: 'Regret having party', created: Date.now()}
]

const addNew = document.getElementById('addnew');

const addNewItem = item => {                                        // Creates the object containing new item information
    const newItem = {
        id: Math.random(),
        content: item,
        created: Date.now()
    };
    generateItem(newItem);
}

const handleNew = e => {
    e.preventDefault();
    e.target[0].value ? addNewItem(e.target[0].value) : null;       // Only adds a new item if there's content;
    addNew.reset();
}

const generateItem = (listItem) => {                                // Adds existing and new items to list
    console.log(listItem)
    const primaryList = document.getElementById('primarylist');
    const newItem =  document.createElement('li');
    newItem.classList.add('mdl-list__item');
    newItem.innerHTML = `
                <span class="mdl-list__item-primary-content">${listItem.content}</span>
                <span class="mdl-list__item-secondary-action">
                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="${listItem.id}">    
                        <input type="checkbox" class="mdl-checkbox__input" id="${listItem.id}" />
                    </label>
                </span>
        `
    primaryList.appendChild(newItem);
}

dummyData.forEach(listItem => generateItem(listItem));

addNew.addEventListener('submit', handleNew);