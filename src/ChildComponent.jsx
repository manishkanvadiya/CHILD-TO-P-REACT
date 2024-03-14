import React from 'react';

function ChildComponent({ textChange }) {
  return <button onClick={() => textChange('Hi')}>submit</button>;
}

export default ChildComponent;
