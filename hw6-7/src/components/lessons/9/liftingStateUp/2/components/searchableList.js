import React from 'react';
import { List, Search } from './';

const byQuery = (query) => (item) =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

const SearchableList = ({ className, list }) => {
  const [query, setQuery] = React.useState('');

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredList = list.filter(byQuery(query));

  return (
    <div className={className}>
      <Search query={query} handleQuery={handleQuery} label="Search:" />
      <hr />
      <List list={filteredList} />
    </div>
  );
};

export { SearchableList };
export default SearchableList;
