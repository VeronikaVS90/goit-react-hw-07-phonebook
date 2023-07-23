import {
  PhonebookWrapper,
  PhonebookTitle,
  PhonebookSubTitle,
} from './App.styled';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/api';
import { getContacts, getStatus } from 'redux/selectors';
import { STATUS } from 'redux/status';
const { IDLE, PENDING, REJECTED } = STATUS;

export const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isContacts = status !== REJECTED && contacts.length !== 0;

  return (
    <PhonebookWrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <PhonebookSubTitle>Contacts</PhonebookSubTitle>
      {status === IDLE && <span>Let's add something here?</span>}
      {isContacts && <Filter />}
      {status === PENDING && <span>Updating, please wait...</span>}
      {isContacts && <ContactList />}
      {status === REJECTED && (
        <span>Oops, something went wrong. Please try again!</span>
      )}
    </PhonebookWrapper>
  );
};
