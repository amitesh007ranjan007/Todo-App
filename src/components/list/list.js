import Button from '../button/button';
import classes from './list.module.css';

const list = (props) => 
    <div className={classes.Card}>
        <p className={classes.List}>{props.text}</p>
        <Button id={props.keyId} clicked={(id) =>props.click(id)} type="red" />
    </div>

export default list;
