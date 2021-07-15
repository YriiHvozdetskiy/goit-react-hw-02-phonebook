import s from '././ContactList.module.scss';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            <span>{name}</span>: <span>{number}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
