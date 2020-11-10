import React from "react";
import Input from "components/commons/forms/Input";
import Buttton from "components/commons/forms/Button";
import useSignUp from "pages/SignUp/useSignUp";

const SignUp = () => {
  const { signUpFields, setSignUpField, signUpSubmitHandler } = useSignUp();

  return (
    <form className="sign-up-container" onSubmit={signUpSubmitHandler}>
      <Input
        name="name"
        onChangeHandler={setSignUpField}
        required={true}
        text="Name"
        type="text"
        value={signUpFields.name}
      />

      <Input
        name="lastName"
        onChangeHandler={setSignUpField}
        required={true}
        text="Las name"
        type="text"
        value={signUpFields.lastName}
      />
      <Input
        name="email"
        onChangeHandler={setSignUpField}
        required={true}
        text="Email"
        type="text"
        value={signUpFields.email}
      />
      <Input
        name="password"
        onChangeHandler={setSignUpField}
        required={true}
        text="Password"
        type="password"
        value={signUpFields.password}
      />

      <div className="buttons-container">
        <Buttton
          disabled={
            !signUpFields.name ||
            !signUpFields.lastName ||
            !signUpFields.email ||
            !signUpFields.password
          }
          text="Create User"
        />
      </div>
    </form>
  );
};

export default SignUp;
