import { ContactsList } from './ContactList.styled';
import { ContactListItems } from './ContactListItems/ContactListItems';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const filteredContacts = (() => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();

  return (
    <ContactsList>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactListItems key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <p>No contacts yet...</p>
      )}
    </ContactsList>
  );
};
