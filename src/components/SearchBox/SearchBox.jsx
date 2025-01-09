import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={css.input}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
