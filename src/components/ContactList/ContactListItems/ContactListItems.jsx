import PropTypes from 'prop-types';
import {
  ConctactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItems.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/api';

export const ContactListItems = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ConctactListItem id={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>

      <DeleteButton
        type="submit"
        aria-label="Delete contact"
        onClick={() => dispatch(deleteContact(id))}
      >
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
