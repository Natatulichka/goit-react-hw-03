import css from "./Contact.module.css";

function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.contactItem}>
      <div className={css.contactDetails}>
        <span className={css.contactName}>{name}</span>
        <span className={css.contactNumber}>{number}</span>
      </div>
      <button className={css.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
export default Contact;
