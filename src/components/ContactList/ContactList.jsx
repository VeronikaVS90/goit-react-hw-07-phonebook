import { ContactsList } from './ContactList.styled';
import { ContactListItems } from './ContactListItems/ContactListItems';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);

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
