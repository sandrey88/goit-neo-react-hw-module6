import { FaUser, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FaPhone className={css.icon} /> {number}
        </p>
      </div>
      <button onClick={onDelete} className={css.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
