{
    const welcome = () => {
        console.log("Witaj! Zapraszam do sprawdzenie mojej pracy. Dziękuję za wszelkie uwagi i wskazówki :)");
    }

    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent }
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1)
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done,
            },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const renderTasks = () => {
        let tasksListHTMLContent = "";

        for (const task of tasks) {
            tasksListHTMLContent += `
          <li class="list__item">
            <button class="list__button list__button--done js-done">
              ${task.done ? "✓" : ""}
            </button>
            <p class=" ${task.done ? "list__item--done" : ""}">${task.content}</p>
            <button class="list__button list__button--remove js-remove">
             🗑
            </button>
          </li>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = tasksListHTMLContent;
    };

    const renderButtons = () => {
        //     let htmlRenderButtons = "";

        //     if (tasksListHTMLContent !== "") {
        //         htmlRenderButtons += `
        //         <button class= button js-hideDoneTasks>
        //           ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
        //         </button>

        //         <button class="button js-completeAll" ${tasks.every(({done}) => done) ? "disabled" : ""}>
        //          Ukończ wszystkie
        //         </button>
        //     `;
        //     }

        //     document.querySelector(".js-buttons").innerHTML = htmlRenderButtons;

        //HTML na podstawie: tasksListHTMLContent i hideDoneTasks, wrzucamy do elementu, w którym przyciski mają się znaleźć
    };

    const bindButtonsEvents = () => {
        // addEventListener/"if"
    };

    const render = () => {
        renderTasks();
        renderButtons();

        bindRemoveEvents();
        // bindToggleDoneEvents();
        bindButtonsEvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskObject = document.querySelector(".js-newTask");
        const newTaskContent = newTaskObject.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskObject.value = "";
        }

        newTaskObject.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

        welcome();
    };

    init();
}