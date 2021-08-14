import React from 'react';

type CompProps = {
  name: string;
  onClick: (name: string) => void;
};

const Comp = ({ name, onClick }: CompProps) => {
  // const handleClick = () => onClick(name);
  return (
    <div>
      {/* <button onClick={handleClick}>{name}</button> */}
      <button onClick={() => onClick(name)}>{name} button</button>
    </div>
  );
};

export default Comp;
