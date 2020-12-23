import React from "react";
import './style.css';

export default function PostInput(props) {

    const [state, setState] = React.useState("");

    const keyPress = (e) => {
        if(e.key === "Enter" && state !== ""){
            props.add(state);
        }
    }

    const handleInputChange = (event) => {
        setState( event.target.value );
    };

    return (
        <div className="footer">
            <input type="text"
                   className="create-thought"
                   onChange={e => handleInputChange(e)}
                   value={state}
                   onKeyDown={keyPress}
                   placeholder="Write your thought and click enter" />
            <p >Your data is saved in your browser. Reload to check :)</p>
        </div>
    )
}