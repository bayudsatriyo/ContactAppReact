import React from "react";
import { LocaleConsumer } from "../context/context";

export interface createParams {
  name: string;
  tag: string;
}

interface typeaddContact {
  addContact: (createParams: createParams) => void;
}

class CreateContact extends React.Component<typeaddContact, createParams> {
  constructor(props: typeaddContact) {
    super(props);
    this.state = {
      name: "",
      tag: "",
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
  }

  onSubmitEventHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: "",
      tag: "",
    });
  }

  onNameChangeEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onTagChangeEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <form
              className="contact-input"
              onSubmit={this.onSubmitEventHandler}
            >
              <input
                type="text"
                placeholder={locale === "id" ? "Nama" : "Name"}
                value={this.state.name}
                onChange={this.onNameChangeEventHandler}
              />
              <input
                type="text"
                placeholder="Tag"
                value={this.state.tag}
                onChange={this.onTagChangeEventHandler}
              />
              <button type="submit">
                {locale === "id" ? "Tambahkan" : "Added"}
              </button>
            </form>
          );
        }}
      </LocaleConsumer>
    );
  }
}

export default CreateContact;
