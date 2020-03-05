import React, {Fragment} from "react";
import '.././PageLayout/Style/TopHeader.scss';

const Toggle = (props) => {
  return(
    <Fragment>
      <button id="toggle" onClick={props.click}>&#8801;</button>
    </Fragment>
  )
}

export default Toggle;