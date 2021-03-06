import React, { useEffect, useState } from "react";
import Login from "./Logins";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { SocketProvider } from "../contexts/SocketProvider";
import fetch from "unfetch";
import axios from "axios";
function MainChat() {
  //const [id, setId] = useLocalStorage("id");
  /*useEffect(async () => {
    const a = await axios.post("http://localhost:2000").then((respone) => {
      return respone.data;
    });
    console.log(a.id);
    setId(a.id);
    return () => {
      console.log("This will be logged on unmount");
    };
  }, []);*/
  const id = 25;
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <div>this page is not found</div>;
}
//<Login onIdSubmit={setId}/>
export default MainChat;
