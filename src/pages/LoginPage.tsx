import { Link } from "react-router-dom";
import LoginInput, { loginState } from "../components/LoginInput";
import { login } from "../utils/api";
import { accesstoken } from "../components/ContactApp";

function LoginPage({
  loginSuccess,
}: {
  loginSuccess: (accessToken: accesstoken) => void;
}) {
  async function onLogin({ email, password }: loginState) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} />
      <p>
        Belum punya akun? <Link to="/register">Daftar di sini.</Link>
      </p>
    </section>
  );
}

export default LoginPage;
