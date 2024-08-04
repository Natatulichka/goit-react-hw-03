// import PropTypes from "prop-types";
// import css from "./ContactList.module.css";

// const ContactList = ({ contacts, onRemoveContact }) => (
//   <ul className={css.TaskList}>
//     {contacts.map(({ id, name, number }) => (
//       <li className={css.TaskList_item} key={id}>
//         {name + ":" + number}
//         {
//           <button
//             className={css.TaskList_button}
//             type="button"
//             name="delete"
//             onClick={() => onRemoveContact(id)}
//           >
//             ❌
//           </button>
//         }
//       </li>
//     ))}
//   </ul>
// );

// ContactList.propTypes = {
//   onRemoveContact: PropTypes.func.isRequired,
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
// export default ContactList;
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
