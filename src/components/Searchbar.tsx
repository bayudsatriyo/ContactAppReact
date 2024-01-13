import { LocaleConsumer } from "../context/context";

interface SearchKeyword {
  keyword: string;
  keywordChange: (event: string) => void;
}

function SearchBar({ keyword, keywordChange }: SearchKeyword) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <input
            className="search-bar"
            type="text"
            placeholder={
              locale === "id" ? "Cari berdasarkan nama" : "Search by Name"
            }
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
          />
        );
      }}
    </LocaleConsumer>
  );
}

export default SearchBar;
