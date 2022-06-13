document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", e => {
    e.preventDefault()
    buildToDo (e.target ["new-task-descritption"].value)
    form.reset ()
  })
});
// Stretch Deliverables