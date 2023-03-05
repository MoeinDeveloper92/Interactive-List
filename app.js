const output = document.querySelector('.output')
const myInput = createMyElement(output, 'input', 'main')
myInput.setAttribute('type', 'text')

const myBtn = createMyElement(output, 'button', 'btn')
myBtn.textContent = "Add New User"
myBtn.style.cursor = 'pointer'
const myList = createMyElement(output, 'ul', 'myList')


addNewUser("Nilofar")

myBtn.addEventListener('click', e => {
    console.log('Click')
    let userName = myInput.value;
    if (userName.length > 3) {
        const li = addNewUser(userName)
        myInput.value = ""
    }

})


function addNewUser(userName) {
    const li = createMyElement(myList, 'li', 'myList')
    const div = createMyElement(li, 'div', 'container')
    const span1 = createMyElement(div, 'span', 'info')
    span1.textContent = userName;
    const span2 = createMyElement(div, 'span', 'editer')
    span2.textContent = 'Edit'
    const span3 = createMyElement(div, 'span', 'del')
    span3.textContent = "Delete";
    return li
}



function createMyElement(parent, elType, classAdd) {
    const ele = document.createElement(elType)
    parent.append(ele);
    ele.classList.add(classAdd);
    return ele;
}