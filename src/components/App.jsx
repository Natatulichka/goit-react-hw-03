import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [users, setUsers] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(users));
  }, [users]);

  const onAddContact = (profile) => {
    setUsers((prevContacts) => [...prevContacts, profile]);
  };

  const onDeleteContact = (id) => {
    setUsers((prevContacts) => prevContacts.filter((user) => user.id !== id));
  };

  const handleFilterChange = (filter) => {
    setFilterValue(filter);
  };

  const filteredContacts = users.filter((user) =>
    user.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAddContact} />
      <SearchBox value={filterValue} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
    </div>
  );
}
export default App;
