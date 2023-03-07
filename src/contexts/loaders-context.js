import React, { useState } from 'react'
import BlockingLoader from '../components/BlockingLoader';
import FullScreenLoader from '../components/FullScreenLoader';

// Context for all the kinds of loader needed in the global scopes
const LoadersContext = React.createContext();

const LoadersProvider = (props) => {
  const [showBlockingLoader, setBlockingLoader] = useState(false);
  const [showFullScreenLoader, setFullScreenLoader] = useState(true);

  const toggleBlockingLoader = () => setBlockingLoader( prev=> !prev);
  const toggleFullScreenLoader = () => setFullScreenLoader( prev=> !prev);

  const value = {
    toggleBlockingLoader,
    toggleFullScreenLoader,
  };
  return (
    <LoadersContext.Provider value={value}>
      {/* <FullScreenLoader /> */}
      {/* <BlockingLoader /> */}
      {props.children}
    </LoadersContext.Provider>
  )
};

export default LoadersProvider;