import React from "react";

export interface AuthState {
  name: string;
  email: string;
  password: string;
}

interface propsAuth {
  register: (user: AuthState) => void;
}

class RegisterInput extends React.Component<propsAuth, AuthState> {
  constructor(props: propsAuth) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="register-input">
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <button>Register</button>
      </form>
    );
  }
}

export default RegisterInput;
