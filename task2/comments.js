document.addEventListener("DOMContentLoaded", function() {
    const commentId = new URLSearchParams(window.location.search).get("id");
    fetch(`https://jsonplaceholder.typicode.com/posts/${commentId}/comments`)
        .then((response) => response.json())
        .then((comments) => {
            for (const comment of comments) {
                document.write(`
                        <div> 
                            <h2>${comment.name}</h2>  
                            <p>${comment.email}</p>
                            <p><b>${comment.body}</b></p>
                            <p>PostId: ${comment.postId}</p>
                            <p>Id: ${comment.id}</p>
                        </div>`);
            }
        });
});