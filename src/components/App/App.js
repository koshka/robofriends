import CardList from 'components/CardList';
import ErrorBoundary from 'components/ErrorBoundary';
import Loader from 'components/Loader';
import Scroll from 'components/Scroll';
import SearchBox from 'components/SearchBox';
import useUsers from 'hooks/useUsers';
import { Fragment, useState } from 'react';
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
