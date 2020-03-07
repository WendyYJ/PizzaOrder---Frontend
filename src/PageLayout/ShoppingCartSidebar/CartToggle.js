import React, {Fragment} from "react";
import '../../PageLayout/Style/TopHeader.scss';

const CartToggle = (props) => {
  return(
    <Fragment>
      <button id="cart" onClick={props.click}>&#8801;</button>
    </Fragment>
  )
}

export default CartToggle;