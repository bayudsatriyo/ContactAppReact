/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Navigations from "./Navigations";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import { LocaleProvider, localeContext } from "../context/context";

export interface Arraydata {
  id: number;
  name: string;
  tag: string;
  imageUrl: string;
}

interface Stateuser {
  id: number;
  name: string;
  email: string;
}

export interface accesstoken {
  accessToken: string;
}

interface Contactstate {
  authedUser: Stateuser | null;
  initializing: boolean | null;
  localeContext: localeContext;
}

class ContactApp extends React.Component<object, Contactstate> {
  constructor(props: object) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: prevState.localeContext.locale === "id" ? "en" : "id",
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess(accessToken: accesstoken) {
    console.log(accessToken);
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken({ accessToken: "" });
  }

  render() {
    if (this.state.initializing) {
      return null;
    }
    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <div className="contact-app">
            <header className="contact-app__header">
              <h1>Aplikasi Kontak</h1>
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      );
    }
    return (
      <LocaleProvider value={this.state.localeContext}>
        <div className="contact-app">
          <header className="contact-app__header">
            <h1>
              {this.state.localeContext.locale === "id"
                ? "Aplikasi Kontak"
                : "Contacts App"}
            </h1>
            <Navigations
              logout={this.onLogout}
              name={this.state.authedUser.name}
            />
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<HomePage />}></Route>
              <Route path="/add" element={<AddPage />}></Route>
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    );
  }
}

export default ContactApp;
