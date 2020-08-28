import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <h1>SnippetServe</h1>
      <p>A platform to share your code snippets.</p>
      <ul>
        <li>
          <Link to="/snippets">Snippets</Link>
        </li>
        <li>
          <Link to="/extensions">Extensions</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
