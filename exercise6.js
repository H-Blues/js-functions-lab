fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const countedCompleted = json.reduce((count, todo) => {
      const currCount = count[todo.userId] ?? 0
      return {
        ...count,
        [todo.userId]: currCount + todo.completed,
      }
    }, {})
    console.log(countedCompleted)
  })
  .catch(function (err) {
    console.log(err)
  })
