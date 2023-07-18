import { nanoid } from 'nanoid';
import { FilterWrapper, FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const filterID = nanoid();
  const filterValue = useSelector(state => state.filter);
  const filterChange = e => {
    dispatch(filter(e.currentTarget.value));
  };
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterID}>Find contacts by name</FilterLabel>
      <FilterInput
        autoComplete="off"
        type="text"
        id={filterID}
        name="filter"
        value={filterValue}
        onChange={filterChange}
      ></FilterInput>
    </FilterWrapper>
  );
};
