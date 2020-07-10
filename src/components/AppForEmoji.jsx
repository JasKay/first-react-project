import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createsEntry(emojiTerm){
    return (
    <Entry
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
        />
    );
}

function AppForEmoji() {
  return (
    <div>
      <h2>
        <span>emojipedia</span>
      </h2>

      <dl className="dictionary">
      {emojipedia.map(createsEntry)}
      </dl>
    </div>
  );
}

export default AppForEmoji;
