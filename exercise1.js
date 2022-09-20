fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.filter((todo) => {
      return todo.completed === true
    })
    console.log(completed)
    completed.forEach((todo, index) => {
      console.log(`${index} - ${todo.title} - ${todo.completed}`)
    })
  })
  .catch(function (err) {
    console.log(err)
  });