import classes from './input.module.css';

const input = (props) => <input 
    type='text' value={props.value} 
    className={classes.Input} onChange={(event) => props.inputChanged(event) }/>

    export default input;