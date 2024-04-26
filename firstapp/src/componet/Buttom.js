import './ContainersStyles.css';

export default function Buttom(props){

    return(
            <button className='btn-primary' >{props.text}</button>
    );
}