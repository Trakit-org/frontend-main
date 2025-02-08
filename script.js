const posts = [
  {
    title: "Blog One",
    content: "Blog content",
  },
  {
    title: "Blog Two",
    content: "Blog conten",
  },
];

const getPost = () => {
  setTimeout(() => {
    let response = "";
    posts.forEach((post) => {
      response += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = response;
  }, 1000);
};

const createPost = (post, getPost) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
};

createPost({ title: "Blog three", content: "content three" })
  .then(getPost)
  .catch((err) => console.log(err));
