const addInput = document.querySelector(".add input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".list");

addBtn.addEventListener("click", ()=>{
    let inputValue = addInput.value.trim();

    if(inputValue == ""){
        alert("Please enter a task!")
        return;
    }
    console.log(inputValue)    
    
    let listItemhtml = `<div class="list">
        <input type="checkbox" id="t1${Date.now()}" class="cb">
        <article class="task">
            <label for="t1${Date.now()}" class="task-label"><span class="box"></span><span class="text">${inputValue}</span></label>
            <div class="actions">
                <button type="button" aria-label="Edit"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg></button>
                <button type="button" aria-label="Delete"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg></button>
            </div>
        </article>
    </div>`;
    
    taskList.insertAdjacentHTML("beforeend", listItemhtml);
    taskList.value ="";
});

// taskList.appendChild(listItemhtml);