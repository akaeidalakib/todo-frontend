import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
    let error = useRouteError();
  console.error(error);
    return (
        <div>
            <small>{error?.message}</small>
        </div>
    );
};

export default ErrorBoundary;