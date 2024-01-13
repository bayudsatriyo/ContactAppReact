import React from "react";
import { Arraydata } from "../components/ContactApp";
import ContactList from "../components/ContactList";
import SearchBar from "../components/Searchbar";
import { useSearchParams } from "react-router-dom";
import { deleteContact, getContacts } from "../utils/api";
import { LocaleConsumer } from "../context/context";

interface stateContact {
  contacts: Array<Arraydata>;
  keyword: string;
}

interface propsHome {
  defaultKeyword: string | null;
  keywordChange: (keyword: string) => void;
}

function HomeWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function onChangeKeyword(keyword: string) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={onChangeKeyword} />;
}

class HomePage extends React.Component<propsHome, stateContact> {
  constructor(props: propsHome) {
    super(props);

    this.state = {
      contacts: [],
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandeler = this.onDeleteHandeler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async onDeleteHandeler(id: number): Promise<void> {
    await deleteContact(id);
    const contacts = await getContacts();
    this.setState({
      contacts: contacts.data,
    });
  }

  onKeywordChangeHandler(keyword: string) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  async componentDidMount() {
    const { data } = await getContacts();

    this.setState(() => {
      return {
        contacts: data,
      };
    });
  }

  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <section>
              <SearchBar
                keyword={this.state.keyword}
                keywordChange={this.onKeywordChangeHandler}
              />
              <h2>{locale === "id" ? "Daftar Kontak" : "Contact List"}</h2>
              <ContactList
                contacts={contacts}
                onDelete={this.onDeleteHandeler}
              />
            </section>
          );
        }}
      </LocaleConsumer>
    );
  }
}

export default HomeWrapper;
