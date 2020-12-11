import React from 'react';
import { List, Search } from './';
import PropTypes from 'prop-types';

const byQuery = (query) => (item) =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

const SearchableList = (props) => {
  const { className, list } = props;
  const [query, setQuery] = React.useState('');

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredList = list.filter(byQuery(query));

  return (
    <div className={className}>
      <Search query={query} handleQuery={handleQuery} label="Search:" />
      <hr />
      <List list={filteredList}
            archivedItems={props.archivedItems}
            handleArchive={props.handleArchive}
            resetArchive={props.resetArchive}/>
    </div>
  );
};

SearchableList.propTypes = {
    className:PropTypes.string,
    list:PropTypes.array,
    archivedItems:PropTypes.array,
    handleArchive:PropTypes.func,
    resetArchive:PropTypes.func
}

export { SearchableList };
export default SearchableList;
