import React from 'react';
import './Style.scss';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function SocialRegister() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <div className="socialRegister-container">
      <p className="socialRegister-title">Join Us With</p>
      <div className="socialRegister-link">
      <Typography className={classes.root}>
        <Button className="social-link" id="facebook">
          <Link href="https://www.facebook.com/" onClick={preventDefault} className="link">
          <span>FACEBOOK</span>
          </Link>
          
        </Button>
        <Button className="social-link" id="google">
          <Link href="https://www.google.com/" onClick={preventDefault} className="link">
            <span>GOOGLE</span>
          </Link>
        </Button>
        <Button className="social-link" id="paypal">
         <Link href="https://www.paypal.com/au/home" onClick={preventDefault} className="link">
          <span>PAYPAL</span>
        </Link>
        </Button>
      
      </Typography>
      </div>
    </div>
  );
}

//export default SocialRegister;
