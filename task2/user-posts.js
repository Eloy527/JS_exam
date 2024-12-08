document.addEventListener("DOMContentLoaded", function() {
    const userId = new URLSearchParams(window.location.search).get('id');
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post
                of posts) {
                document.write(`
                    <div>
                        <p>Title: ${post.title}</p>
                        <a href="post-details.html?id=${post.id}">Bigger....</a>
                    </div>`);
            }
        });
});