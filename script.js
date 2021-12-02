const url = "https://jsonplaceholder.typicode.com/todos/1"

function fetchResult() {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
}
fetchResult()