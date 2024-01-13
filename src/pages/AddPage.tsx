import { useNavigate } from "react-router-dom";
import CreateContact, { createParams } from "../components/CreateContact";
import { addContact } from "../utils/api";
import { LocaleConsumer } from "../context/context";

function AddPage() {
  const navigate = useNavigate();
  async function addContactHandler({ name, tag }: createParams) {
    await addContact({ name, tag });
    navigate("/");
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            <h1>{locale === "id" ? "Aplikasi Kontak" : "Contact App"}</h1>
            <h2>{locale === "id" ? "Tambah Kontak" : "Add Contact"}</h2>
            <CreateContact addContact={addContactHandler} />
          </>
        );
      }}
    </LocaleConsumer>
  );
}

export default AddPage;
