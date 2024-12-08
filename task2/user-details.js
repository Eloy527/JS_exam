document.addEventListener("DOMContentLoaded", function() {
    const userId = new URLSearchParams(window.location.search).get('id');
    const userDetails = document.getElementById('user-details');
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            userDetails.innerHTML = `
                <h1>${user.name}</h1>
                <p>ID: ${user.id}</p>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>
                <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p>Geo: ${user.address.geo.lat} ${user.address.geo.lng}</p>
                <p>Company: ${user.company.name}</p>
                <button class="button">
                    <a href="user-posts.html?id=${user.id}">Posts of Current User</a>
                </button>
            `;
        });
});