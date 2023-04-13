import React from "react";
import "./Emoji.css";

export default function EmojiList({ filteredEmojis }) {
  const handleCopyClipboard = (emoji) => {
    navigator.clipboard.writeText(emoji.emoji);
    alert(`Copied ${emoji.emoji} to clipboard!`);
  };
  return (
    <ul>
      {filteredEmojis.map((emoji) => (
        <li onClick={() => handleCopyClipboard(emoji)} key={emoji.emoji}>
          {emoji.emoji}
        </li>
      ))}
    </ul>
  );
}
