import { useEffect, useState } from 'react';
import useBoolean from './useBoolean';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const { value: isLoaded, setTrue: setIsLoadedTrue } = useBoolean(false);
  const {
    value: isLoading,
    setTrue: setIsLoadingTrue,
    setFalse: setIsLoadingFalse,
  } = useBoolean(false);

  useEffect(() => {
    if (isLoading || isLoaded) {
      return;
    }

    setIsLoadingTrue();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setIsLoadingFalse();
        setIsLoadedTrue();
      });
  }, [
    isLoaded,
    isLoading,
    setIsLoadedTrue,
    setIsLoadingTrue,
    setIsLoadingFalse,
  ]);

  return { isLoading, users };
};

export default useUsers;
