import React, { useState } from "react";
import emojis from "./data/emojis.json";
import SearchInput from "./components/SearchBar/SearchBar";
import EmojiList from "./components/Emoji/Emoji";

export default function App() {
  const [searchEmoji, setSearchEmoji] = useState("");

  const handleSearchInput = (event) => {
    setSearchEmoji(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) => {
    const requestEmojis = searchEmoji.toLowerCase();
    return (
      emoji.tags.includes(requestEmojis) ||
      emoji.description.toLowerCase().includes(requestEmojis) ||
      emoji.emoji.includes(requestEmojis)
    );
  });

  return (
    <div>
      <SearchInput value={searchEmoji} onChange={handleSearchInput} />
      {searchEmoji.length > 0 && <EmojiList filteredEmojis={filteredEmojis} />}
    </div>
  );
}
