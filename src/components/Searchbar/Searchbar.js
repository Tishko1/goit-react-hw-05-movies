import { useState } from 'react';
import {
  Search,
  Form,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel,
} from './Searchbar.styled';

export function Searchbar({ onSumbitSearch }) {
  const [query, setQuery] = useState('');

  const handleInput = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return alert('Введіть запит для пошуку!');
    }
    onSumbitSearch(query);
    setQuery('');
  };

  return (
    <Search>
      <Form onSubmit={handleSubmit}>
        <SearchFormButton type="submit">Search</SearchFormButton>

        <SearchFormInput
          name="query"
          value={query}
          onChange={handleInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Search>
  );
}
