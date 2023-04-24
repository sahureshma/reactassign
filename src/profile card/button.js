import './button.css'
export default function Button(props){
    console.log(props)
    function handleclick(){
        alert(Aryan)
    }
    return(
        <button
        className={props.externalclassName || 'clickBtn'}
        onclick={props.onclickFunction || handleclick}
        style={props.buttonstyle}
        >
            {props.buttonText || 'submit' }
        </button>
    )
   
    

}