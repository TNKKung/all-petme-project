import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = React.createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
  useEffect(async () => {
    const a = await axios.post("http://localhost:2000").then((respone) => {
      return respone.data;
      setContacts();
    });
    console.log(a.id);
    setId(a.id);
    return () => {
      console.log("This will be logged on unmount");
    };
  }, []);

  const [contacts, setContacts] = useLocalStorage("contacts", []);
  //[{id:123},{id:}]
  function createContact(id, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
