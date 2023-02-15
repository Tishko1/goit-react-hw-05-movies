import { Component } from 'react';
import {
  Search,
  Form,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Введіть запит для пошуку!');
    }
    this.props.onSumbitSearch(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Search>
        <Form onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            {' '}
            <SearchFormLabel>Search</SearchFormLabel>{' '}
          </SearchFormButton>
          <SearchFormInput
            name="query"
            value={this.state.query}
            onChange={this.handleInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Search>
    );
  }
}
