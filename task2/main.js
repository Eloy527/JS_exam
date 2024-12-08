fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        for (const { id, name }
            of users) {
            document.write(`
                <div>
                    <p>${id} ${name}</p>
                    <a href="user-details.html?id=${id}">bigger...</a>
                </div>`);
        }
    });