document.addEventListener("DOMContentLoaded", function() {
    const postId = new URLSearchParams(window.location.search).get("id");
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((post) => {
            document.write(`
                        <div> 
                            <p>Title: ${post.title}</p> 
                            <p>Body: ${post.body}</p> 
                            <p>UserId: ${post.userId}</p> 
                            <p>Id: ${post.id}</p> 
                            <a href="comments.html?id=${post.id}">comments of current post</a>
                        </div>`);
        });
});