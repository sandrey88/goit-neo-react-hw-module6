import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div className={css.list}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default ContactList;
