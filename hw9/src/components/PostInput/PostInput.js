import React from "react";
import './style.css';

export default function PostInput(props) {

    const [value, setValue] = React.useState("");

    const keyPress = (e) => {
        if(e.key === "Enter" && value !== ""){
            props.add(value);
        }
    }

    const handleInputChange = (event) => {
        setValue( event.target.value );
    };

    return (
        <div className="footer">
            <input type="text"
                   className="create-thought"
                   onChange={handleInputChange}
                   value={value}
                   onKeyDown={keyPress}
                   placeholder="Write your thought and click enter" />
            <p >Your data is saved in your browser. Reload to check :)</p>
        </div>
    )
}