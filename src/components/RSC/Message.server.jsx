import React from "react";
import { db } from "../../server/db.server";

function Message({ id }) {
  const message = db.messages[id]; // Получаем сообщение по id
  if (!message) {
    return <div>Сообщение не найдено.</div>;
  }

  function someServerFunction() {
    return "Результат серверной функции";
  }

  return (
    <div className="messageQwe">
      <h1>{message.title}</h1>
      <p>{message.body}</p>
      <p>{someServerFunction()}</p>
    </div>
  );
}

export default Message;
