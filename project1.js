
const form = document.querySelector('form')
const tasks = []
function addTask() {
    const theTaskIs = form.elements['theTaskIs'].value
    const taskDate = form.elements['taskDate'].value
    const taskTime = form.elements['taskTime'].value
    const task = {
        theTaskIs: theTaskIs,
        taskDate: taskDate,
        taskTime: taskTime,
    }
    if (theTaskIs === "" || taskDate === "" || taskTime === "") {
        const error = document.createElement("div")
        error.classList.add("error")
        error.innerHTML = "You must fill in all the fields!"
        form.appendChild(error)
        setTimeout(function () {
            error.remove()
        }, 500)
    }
    else {

        tasks.push(task)
        console.log(tasks)
        addTaskToPage(task)
    }
}



let id = 0
function addId() {
    if (id === "") {
        id = 0
    }
    else {
        id = id + 1
    }
    return id
}


function addTaskToPage(taskToAdd) {
    const taskDetails = document.createElement('div')
    taskDetails.classList.add('taskDetails')
    let ifId = addId()
    taskDetails.setAttribute('id', 'item_' + ifId)
    console.log(taskDetails)

    const taskId = ifId
    tasks.taskId = ifId
    const theTaskIs = document.createElement('div')
    theTaskIs.innerHTML = taskToAdd.theTaskIs
    theTaskIs.classList.add('theTaskIs')

    const taskDate = document.createElement('div')
    taskDate.innerHTML = taskToAdd.taskDate
    taskDate.classList.add('taskDate')

    const taskTime = document.createElement('div')
    taskTime.innerHTML = taskToAdd.taskTime
    taskTime.classList.add('taskTime')


    const ifid = ifId
    const deleteBtn = document.createElement('div')
    const deleteButton = "<button onclick=deleteTask('" + ifId + "') class=deleteButton >Delete</button>"
    deleteBtn.innerHTML = deleteButton

    taskDetails.appendChild(theTaskIs)
    taskDetails.appendChild(taskDate)
    taskDetails.appendChild(taskTime)
    taskDetails.appendChild(deleteBtn)

    const showTheTask = document.querySelector('.showTheTask')
    showTheTask.appendChild(taskDetails)


}

function deleteTask(theTaskIs) {
    let indexToDelete
    for (let index in tasks) {
        if (tasks[index].theTaskIs === theTaskIs) {
            delete tasks[index]
        }
    }
    const taskDetails = document.querySelector('#' + 'item_' + theTaskIs)
    taskDetails.remove()
}

