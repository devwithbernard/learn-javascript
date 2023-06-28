/*
* Arrow functions
* */

const sum = (a, b) => a + b;
console.log(sum(5, 10));

let double = n => n * 2;
console.log(double(4));

const fetchPosts = async (url, isSucceed, isFailed) => {
    try {
        const response = await fetch(url);
        const posts = await response.json()
        if (response.ok) {
            isSucceed({
                payload: posts,
                message: "is succeed"
            })
        }
    } catch (error) {
        isFailed({
            payload: error,
            message: "is failed",
        })
    }
}

(async () => {
    const posts = await fetchPosts("https://jsonplaceholder.typicode.com/posts", (posts) => {
        console.log(posts);
    }, (error) => {
        console.log("Something got wrong : ", error);
    })

    console.log(posts);
})()