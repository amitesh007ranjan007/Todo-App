import classes from './button.module.css';
const button = (props) => {
    const classForCss = [classes.Button]
    let text = 'Add'
    if(props.type === 'red') {
        text = 'Delete '
        classForCss.push(classes.Red)
    }

    return(
    <button 
        className={classForCss.join(' ')}
        onClick={() => props.clicked(props.id)} type={props.type}>{text}   
    </button>);
}


export default button;