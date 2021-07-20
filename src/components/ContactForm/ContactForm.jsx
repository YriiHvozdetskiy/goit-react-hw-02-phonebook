import { Component } from 'react';
import { nanoid } from 'nanoid';
import { DebounceInput } from 'react-debounce-input';
import s from './ContactForm.module.scss';

class ContactForm extends Component {
  nameInputId = nanoid();
  phoneInpudId = nanoid();

  state = {
    name: '',
    number: '',
  };

  hanldeChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.coincidence(this.state.name.toLowerCase())) return;

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form
          className={s.form}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <>
            <label className={s.label} htmlFor={this.nameInputId}>
              Name
            </label>
            <DebounceInput
              className={s.input}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.nameInputId}
              value={this.state.name}
              debounceTimeout={300}
              onChange={this.hanldeChange}
            />

            {/* <input
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.nameInputId}
              onChange={this.handleName}
              value={this.state.name}
            /> */}

            <label className={s.label} htmlFor={this.phoneInpudId}>
              Number
            </label>
            <DebounceInput
              className={s.input}
              type="tel"
              name="number"
              id={this.phoneInpudId}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              debounceTimeout={300}
              onChange={this.hanldeChange}
            />
            {/* <input
              className={s.input}
              type="tel"
              name="number"
              id={this.phoneInpudId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleNumber}
              value={this.state.number}
            /> */}

            <button className={s.button} type="submit">
              Add contact
            </button>
          </>
        </form>
      </>
    );
  }
}

export default ContactForm;
