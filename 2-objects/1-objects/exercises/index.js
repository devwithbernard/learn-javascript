document.addEventListener("DOMContentLoaded", async (event) => {
    const posts = await fetchPosts("https://jsonplaceholder.typicode.com/posts") ?? {};
    const twentyPosts = posts.slice(0, 20);
    twentyPosts.forEach(post => {
        document.querySelector('.posts').appendChild(Post(post));
    })
})

async function fetchPosts(url) {
    try {
        return await (await fetch(url)).json()
    } catch (error) {
        return {
            payload: error,
            message: "Request failed!"
        }
    }
}

function Post(post) {
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");
    
    let postTitle = document.createElement("h2");
    postTitle.classList.add("post-title");
    postTitle.innerText = post?.title;

    let postBody = document.createElement("p");
    postBody.classList.add("post-body");
    postBody.innerText = post?.body;

    postDiv.append(postTitle);
    postDiv.append(postBody);

    return postDiv;
}
