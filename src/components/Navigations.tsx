import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle, FiLogOut } from "react-icons/fi";
import { LocaleConsumer } from "../context/context";

interface Logout {
  logout: () => void;
  name: string;
}

function Navigations({ logout, name }: Logout) {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <div className="navigation">
            <ul>
              <li>
                <button onClick={toggleLocale}>
                  {locale === "id" ? "en" : "id"}
                </button>
              </li>
              <li>
                <Link to="/">
                  <FiHome />
                </Link>
              </li>
              <li>
                <Link to="/add">
                  <FiPlusCircle />
                </Link>
              </li>
              <li>
                <button onClick={logout}>
                  {name}
                  <FiLogOut />
                </button>
              </li>
            </ul>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

export default Navigations;
