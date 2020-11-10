import React from "react";
import Input from "components/commons/forms/Input";
import Button from "components/commons/forms/Button";
import useSignIn from "pages/SignIn/useSignIn";

const SignIn = () => {
  const { signInFields, setSignInField, signInHandler } = useSignIn();

  return (
    <form className="sign-in-container" onSubmit={signInHandler}>
      <Input
        name="email"
        onChangeHandler={setSignInField}
        required={true}
        text="Email"
        type="text"
        value={signInFields.email}
      />

      <Input
        name="password"
        onChangeHandler={setSignInField}
        required={true}
        text="Password"
        type="password"
        value={signInFields.password}
      />
      <div className="buttons-container">
        <Button
          disabled={!signInFields.email || !signInFields.password}
          text="Sign in"
        />
      </div>
    </form>
  );
};

export default SignIn;
