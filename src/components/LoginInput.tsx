import React from "react";

export interface loginState {
  email: string;
  password: string;
}

class LoginInput extends React.Component<
  { login: (userAuth: loginState) => void },
  loginState
> {
  constructor(props: { login: (userAuth: loginState) => void }) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="login-input">
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChangeHandler}
        />
        <button>Masuk</button>
      </form>
    );
  }
}

export default LoginInput;
