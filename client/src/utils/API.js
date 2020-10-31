import axios from "axios";

export default {
  // Gets all posts
  getPosts: function () {
    return axios.get("/api/posts/");
  },
  createUser: function (user) {
    return axios.post("/api/user/", user);
  },
  // // Gets the book with the given id
  getCityPosts: function (city) {
    return axios.get("/api/posts/" + city);
  },
  // // Deletes the book with the given id
  // deleteBook: function (id) {
  //   return axios.delete("/api/posts/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function (bookData) {
  //   return axios.post("/api/posts", bookData);
  // },
};
