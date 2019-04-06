import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

function LoadingPuff(props) {
  return (
    <LoadingWrapper>
      <Loader
        className="d-flex w-100 h-100 justify-content-between align-content-center"
        type="Rings"
        color="#ADD8E6"
        height="80"
        width="80"
      />
    </LoadingWrapper>
  );
}

export default LoadingPuff;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
