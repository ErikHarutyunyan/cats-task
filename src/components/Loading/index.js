import React from 'react';

// Import Style
import { LoadingWrapper, Spinner } from './Loading.styled';

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export { Loading };
