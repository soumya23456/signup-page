import React from "react";

export default class Signup extends React.Component {
  render() {
    return (
      <div >
        <h1>Sign up</h1>
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              aria-label="First Name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              aria-label="Last Name"
            />
          </div>
        </div>

        <div class="mb-3">
          <label for="signupinputemail" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="signupinputemail" />
        </div>

        <label for="inputpassword" class="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputpassword"
          class="form-control"
          aria-describedby="passwordhelpblock"
        />
        <div id="passwordhelpblock" class="form-text">
          Your password must be 8 characters long
        </div>

        <label for="inputpassword" class="form-label">
          Retype Password
        </label>
        <input
          type="password"
          id="inputpassword"
          class="form-control"
          aria-describedby="passwordhelpblock"
        />
        <div id="passwordhelpblock" class="form-text">
           Your password must be 8 characters long
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="examplecheck" />
          <label class="form-check-label" for="examplecheck">
            I agree
          </label>
        </div>
        <div>
          <button type="submit" class="btn btn-primary" onclick="openForm()">
            Signup
          </button>
        </div> 
      

      </div>
    );
  }
}
