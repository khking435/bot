import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleDelete, navigate, handleRemove }) {
  ay;
  let selectedClasses = new Set();
  bots.map(bot => bot.isSelected && selectedClasses.add(bot.bot_class));
  console.log(selectedClasses);
  console.log();

  return (
    <div className="ui four column grid">
      <div className="row">
   
        Collection of all bots
        {bots.filter(bot => [...selectedClasses]
          .every(clss => clss !== bot.bot_class))
          .map(bot => !bot.isSelected && <BotCard
            bot={bot} key={bot.id}
            handleRemove={handleRemove}
            handleDelete={handleDelete}
            navigate={navigate}
            action={"navigate"}
          />)}
      </div>
    </div>
  );
}

export default BotCollection;