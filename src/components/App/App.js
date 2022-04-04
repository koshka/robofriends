import { Fragment, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import CardList from '../CardList';
import ErrorBoundary from '../ErrorBoundary';
import Loader from '../Loader';
import Scroll from '../Scroll';
import SearchBox from '../SearchBox';
import './App.scss';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const { isLoading, users } = useUsers();

  const items = users.filter((robot) =>
    robot.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="title f1">Cat Friends</h1>
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <Fragment>
          {' '}
          <SearchBox
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <Scroll>
            <ErrorBoundary>
              <CardList items={items} />
            </ErrorBoundary>
          </Scroll>
        </Fragment>
      )}
    </div>
  );
};

export default App;
