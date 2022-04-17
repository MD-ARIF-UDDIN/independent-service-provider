import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="mt-5 container">
      <h1>Questions and Answer:</h1>
      <div className="row mt-5 ">
        <div className="ques-container card col p-5 m-5 rounded">
          <h3>Difference between authorization and authentication</h3>
          <p>
             Context API provides a way for react app to to produce
            global varkkkiables which can be passed atound.To avoid passing props
            through intermediate elements,we can use context API.It used when
            some data needs to bccessible by many components which are at
            nested level.It is an alternative to "prop drilling".If we want to
            define several unrelated conteuse each in its
            proper place in the app we can use Context API.
          </p>
        </div>
        <div className="ques-container card col p-5 m-5 rounded">
          <h3>
            What other services does firebase provide other than authentication?
          </h3>
          <p>
            A semantic element describes its meaning clearly to both the browser
            and the developer.It clearly defines about its content. It
            introduces meaningthe web page rather than just presentation.It
            describes its meaning in human and machine readable way.For example,
            a "article" tag indicates that the enclosed text are about an
            article.Which means it is both semantic and presentational so people
            know what article are, and browsers know how to display them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
