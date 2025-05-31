import css from "./Contact.module.css";
import UserIcon from "../UserIcon/UserIcon";
import PhoneIcon from "../PhoneIcon/PhoneIcon";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactContainer}>
      <div>
        <p>
          <span className={css.svgSpan}>
            <UserIcon />
          </span>

          {name}
        </p>
        <p>
          <span className={css.svgSpan}>
            <PhoneIcon />
          </span>

          {number}
        </p>
      </div>
      <button type="submit" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
