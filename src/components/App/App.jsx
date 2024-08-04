// import { useState, useEffect } from "react";
// import ContactForm from "./components/ContactForm/ContactForm";
// import Section from "./components/Section/Section";
// import ContactList from "./components/ContactList/ContactList";
// import Filter from "./components/Filter/Filter";

// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// function App() {
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = localStorage.getItem("contacts");
//     return savedContacts ? JSON.parse(savedContacts) : initialContacts;
//   });
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   const addUser = (newUser) => {
//     setContacts((prevContacts) => [...prevContacts, newUser]);
//   };

//   const deleteUser = (id) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.id !== id)
//     );
//   };

//   const handleFilterChange = (filter) => {
//     setFilter(filter);
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <>
//       <Section>
//         <h1>Phonebook</h1>
//         <ContactForm onAdd={addUser} />
//         <Filter filter={filter} input={handleFilterChange} />
//         <ContactList contacts={filteredContacts} onRemoveContact={deleteUser} />
//       </Section>
//     </>
//   );
// }
// export default App;
import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addUser = (newUser) => {
    setContacts((prevContacts) => [...prevContacts, newUser]);
  };

  const deleteUser = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.MainTitle}>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteUser} />
    </div>
  );
}
