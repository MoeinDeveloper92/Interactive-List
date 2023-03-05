const output = document.querySelector('.output')
const myInput = createMyElement(output, 'input', 'main')
myInput.setAttribute('type', 'text')

const myBtn = createMyElement(output, 'button', 'btn')
myBtn.textContent = "Add New User"
myBtn.style.cursor = 'pointer'
const myList = createMyElement(output, 'ul', 'myList')

// bewlo I Want to add Lcoalstorage to add Items 
// If I refresh the browser the list will be there
// I need to have an object to store the list
const curList = [];
let getData = window.localStorage.getItem('curList')

// the object bellow acts like useEffect hook in React
window.addEventListener('DOMContentLoaded', e => {
    if (getData) {
        // in order to make it usable format I need to use JSON.parse()
        const tempArr = JSON.parse(getData)
        tempArr.forEach((user) => {
            addNewUser(user)
        })
    }
})





myBtn.addEventListener('click', e => {
    console.log('Click')
    let userName = myInput.value;
    if (userName.length > 3) {
        const li = addNewUser(userName)
        myInput.value = ""
    }

})


function updater() {
    const myListItems = document.querySelectorAll('.info')
    curList.length = 0;
    myListItems.forEach((el) => {
        curList.push(el.textContent);
    })

    window.localStorage.setItem('curList', JSON.stringify(curList))
}


function addNewUser(userName) {
    curList.push(userName)
    updater();
    const li = createMyElement(myList, 'li', 'myList')
    const div = createMyElement(li, 'div', 'container')
    const span1 = createMyElement(div, 'span', 'info')
    span1.textContent = userName;
    const span2 = createMyElement(div, 'span', 'editer')
    span2.textContent = 'Edit'
    const span3 = createMyElement(div, 'span', 'del')
    span3.textContent = "Delete";

    span2.addEventListener('click', e => {
        if (span2.textContent === "Edit") {
            span2.textContent = "Save"
            span1.setAttribute('contenteditable', 'true')
            span1.style.backgroundColor = 'yellow'
        } else if (span2.textContent === "Save") {
            span2.textContent = "Edit"
            span1.setAttribute('contenteditable', 'false')
            span1.style.backgroundColor = 'white'
            updater()
        }
    })


    span3.addEventListener('click', e => {
        li.remove();
        updater()
    })

    return li
}



function createMyElement(parent, elType, classAdd) {
    const ele = document.createElement(elType)
    parent.append(ele);
    ele.classList.add(classAdd);
    return ele;
}