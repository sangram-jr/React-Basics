function ToggleButton({light,setLight}){
    function handleClick(){
        setLight(!light);
    }
    return (
        <div>
            <button onClick={handleClick}>toggle</button>
        </div>
    )
}
export default ToggleButton;