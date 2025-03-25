document.addEventListener("DOMContentLoaded", loadPosts);

function addPost() {
    let title = document.getElementById("post-title").value;
    let content = document.getElementById("post-content").value;

    if (title.trim() === "" || content.trim() === "") {
        alert("Please enter both title and content.");
        return;
    }

    let post = { title, content };
    let posts = JSON.parse(localStorage.getItem("forumPosts")) || [];
    posts.push(post);
    localStorage.setItem("forumPosts", JSON.stringify(posts));

    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";

    loadPosts();
}

function loadPosts() {
    let postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = "";

    let posts = JSON.parse(localStorage.getItem("forumPosts")) || [];
    posts.forEach(post => {
        let postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postsContainer.appendChild(postElement);
    });
}
