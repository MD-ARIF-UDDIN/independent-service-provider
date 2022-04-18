import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="mt-5 blogs-section container">
      <h1 className="blog-title text-center">Questions and Answer:</h1>
      <div className="row mt-5 ">
        <div className="ques-container card col p-5 m-5 rounded">
          <h3>Difference between authorization and authentication</h3>
          <p className="mt-2">
            <span className="fw-bold">Answer:</span>
            Authentication is used to determine users who claims them as user.
            Authorization is used to determine what user can access and what
            they cannot.Authentication is usually done before doing
            authorization.On the other hand, aithorization is usually done after
            the authentication. Authentication challenge the user to validate
            some crediantiality check. Authorization checks whether the user
            access are allowed.
          </p>
        </div>
        <div className="ques-container card col p-5 m-5 rounded">
          <h3>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>

          <p className="mt-2">
            <span className="fw-bold">Answer:</span>
            We use firebase because it provides so many services.It supports
            authentication using google,github,email-password,facebook etc.
            Authentication is easy to implement using firebase. We can also host
            our web app using firebase.We use firebase to get realtime
            database.We can use firebase to cloud storage.Other options to
            implement authentications
            are:Parse,Back4app,RxDB,NativeScript,Couchbase etc.
          </p>
        </div>
        <div className="ques-container card col p-5 m-5 rounded">
          <h3>
            What other services does firebase provide other than authentication?
          </h3>
          <p className="mt-2">
            <span className="fw-bold">Answer:</span>
            Some other services firbase provides are:Firebase can used to get
            realtime database.Firebase also provies fast web app hosting. It
            also provides crash notifications. It also offers a feature which is
            analytics. It also provides other features such as cloud
            function,cloud firestore. It also provides cloud messaging service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
