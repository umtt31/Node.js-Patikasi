let posts =
  [{ title: "t1", content: "ttt1" },
  { title: "t2", content: "ttt2" },
  { title: "t3", content: "ttt3" }];

let createPost = (newPost => {
    posts.push(newPost);
});

let showPosts = () => {
    posts.map(x => console.log(x))
}

async function addPost(data) {
    await createPost({title: "3131", content: "313131"});
    showPosts()
};

addPost();