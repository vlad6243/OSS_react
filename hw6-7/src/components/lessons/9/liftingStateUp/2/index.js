import React from 'react';
import PropTypes from 'prop-types';
import Chance from 'chance';
import faker from 'faker';
import styled from 'styled-components';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { SearchableList as List } from './components';

const MIN_ID = 0;
const MAX_ID = 400;

const MIN_COUNT = 15;

const chance = Chance();

const Header = styled.h3`
  color: #001f3f;
`;

const Label = styled.span`
  margin-left: 10px;
  font-size: 12px;
  font-weight: regular;
  font-style: italic;
  color: #aaaaaa;
`;

const refreshData = (count) => {
  const ids = chance.unique(chance.integer, count, {
    min: MIN_ID,
    max: MAX_ID,
  });
  const data = ids.map((id) => {
    return { id: id, name: faker.company.companyName() };
  });
  return data;
};

const list = refreshData(MIN_COUNT);

function Task() {
  const { url } = useRouteMatch();

  const listPath = `${url}/list`;

  const match = useRouteMatch(listPath);

  const [archivedItems, setArchivedItems] = React.useState([]);

  const handleArchive = (id) => {
    setArchivedItems((archivedItems) => [...archivedItems, id]);
  };

  const resetArchive = () => {
    setArchivedItems([])
  }

  return (
      <div className="task">
        <Header>
          {!match && <Link to={listPath}>list</Link>}
          <Switch>
            <Route path={listPath} exact>
              <Link to={url}>back to task page</Link>
              <List list={list}
                    archivedItems={archivedItems}
                    handleArchive={handleArchive}
                    resetArchive={resetArchive}/>
            </Route>
          </Switch>
          <br />
          <Label>{list.length} items</Label>
        </Header>
      </div>
  );
}

export default Task;
