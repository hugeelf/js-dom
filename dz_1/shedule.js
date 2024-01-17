const data = [
    {
       className: "Вселенная и космос",
       date: "31.12.2024",
       maxStudent: 39,
       currentStudent: 12,
    },
    {
        className: "Теория спидранов",
        date: "30.12.2024",
        maxStudent: 31,
        currentStudent: 14,
     },
     {
        className: "Успешный успех",
        date: "12.12.2024",
        maxStudent: 310,
        currentStudent: 140,
     }
];

const app = document.querySelector(".app");

function makeInterface(){
    data.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('lesson')
    
        const lessonName = document.createElement('h2')
        lessonName.classList.add('lesson-name')
        lessonName.append(element.className)
        div.appendChild(lessonName)
    
        const lessonDate = document.createElement('p')
        lessonDate.classList.add('lesson-date')
        lessonDate.append(element.date)
        div.appendChild(lessonDate)
    
        const maxStudents = document.createElement('p')
        maxStudents.classList.add('student-counter')
        maxStudents.append(`Всего мест ${element.maxStudent}`)
        div.appendChild(maxStudents)
    
        const currentStudents = document.createElement('p')
        currentStudents.classList.add('student-counter')
        currentStudents.classList.add('current-student-counter')
        currentStudents.append(`Занято мест ${element.currentStudent}`)
        div.appendChild(currentStudents)
    
        const button = document.createElement('button')
        button.classList.add('join-button')
        button.textContent = 'Записаться'
        div.append(button)
    
        app.append(div)
    });
}

makeInterface()

const buttons = document.querySelectorAll('.join-button')
for(let index = 0; index < buttons.length; index++){
    buttons[index].addEventListener('click', () => {
        if(data[index].maxStudent>data[index].currentStudent){
            data[index].currentStudent = data[index].currentStudent + 1;
            const listOfCurrentStudetCounters = document.querySelectorAll('.current-student-counter')
            listOfCurrentStudetCounters[index].textContent = `Занято мест ${data[index].currentStudent}`
        }
        else{
            buttons[index].disabled = true
            console.log("disabled");
        }
    })
}

console.log(app);
console.log(buttons);