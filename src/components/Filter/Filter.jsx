import { nanoid } from 'nanoid';

import s from './Filter.module.scss';

function Filter() {
  const inputListId = nanoid();
  return (
    <>
      <label className={s.label} htmlFor={inputListId}>
        Find contacts by name
      </label>
      <input className={s.input} id={inputListId} />
    </>
  );
}

export default Filter;
