import React from 'react'
import Record from '../../component/Recordpage';
import Navbarmain from '../../component/Shared/Navbarmain';
import NavbarFrames from '../../component/Shared/NavbarFrames';

const Recordpage = () => {
  return (
    <div>
        {/* <Navbarmain/> */}
        <NavbarFrames/>
      <Record/>
    </div>
  );
};

export default Recordpage;
