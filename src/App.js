import React from "react";
import { AddPostForm } from "./features/posts/AddPostForm";
import { PostsList } from "./features/posts/PostsList";

const App = () => {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />      
    </main>
  );
}

export default App;
