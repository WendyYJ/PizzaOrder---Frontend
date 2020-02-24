import React from 'react';
import '.././Style/Information.scss';
import squares from '../../asset/img/squares.png';
import leftarrow from '../../asset/img/leftarrow.png';
import rightarrow from '../../asset/img/rightarrow.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
function Middle(props){
	return (
        <section className="middlecontainer">
        
<div className="imgcontainer">
<img src={leftarrow}></img>
</div>

<div className="desc-container">
<h3>Margaret Black</h3>
<p>Dusi autem vel eum iriure dolor in hendrerit in<br/>
vulputate velit esse molestie consequat, vel illum<br/>
dolore eu feugiat nulla facilisis at eros et<br/>
accumsam qui blandit liptatum zzril delenit augue<br/>
duis dolore te feugait nulla facilisi. Nam tempor cum<br/>
soluta nobision congue nihil imperdiet doming id<br/>
quid mazim placeat facer possim assum</p>

</div>


<div className="squarescontainer">
<img src={squares}></img>

</div>

<div className="imgcontainer">
<img src={rightarrow}></img>
</div>

            </section>
    );
    }


    export default Middle;