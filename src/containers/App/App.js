import { requestUsers } from 'actions';
import CardList from 'components/CardList';
import ErrorBoundary from 'components/ErrorBoundary';
import Loader from 'components/Loader';
import Scroll from 'components/Scroll';
import SearchBox from 'components/SearchBox';
import { CHANGE_SEARCH_QUERY } from 'constants';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';

const App = ({}) => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const { isPending, users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(requestUsers);
  }, []);

  const items = users.filter((robot) =>
    robot.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="title f1">Cat Friends</h1>
      {isPending ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <Fragment>
          <SearchBox
            onChange={(event) => {
              dispatch({
                type: CHANGE_SEARCH_QUERY,
                payload: event.target.value,
              });
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
