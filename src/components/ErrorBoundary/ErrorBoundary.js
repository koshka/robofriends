import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './ErrorBoundary.scss';

const Error = () => {
  return (
    <div className="error-boundary">
      <div className="cat">🙀</div> <div>Something went wrong</div>
    </div>
  );
};

const ErrorBoundaryContainer = ({ children }) => {
  const myErrorHandler = (error) => {
    console.error('LOGGING ERROR HERE:', error);
  };
  return (
    <ErrorBoundary FallbackComponent={Error} onError={myErrorHandler}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryContainer;
