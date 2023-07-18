import PropTypes from 'prop-types';
import {
  ConctactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItems.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItems = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contactsDelete = id => dispatch(deleteContact(id));

  return (
    <ConctactListItem id={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>

      <DeleteButton type="submit" onClick={() => contactsDelete(id)}>
        Delete
      </DeleteButton>
    </ConctactListItem>
  );
};

ContactListItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
