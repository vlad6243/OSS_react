import React from "react";
import moment from "moment";
import "./style.css"

export default function PostItem({post,changeItem,deleteItem}) {
    const timeLeft = (Date.now() - post.lastEditted)
    const duration = moment.duration(timeLeft);
    const minutes = duration.asMinutes();

    const [changeValue, setChangeValue] = React.useState(false)
    const [value, setValue] = React.useState(post.value);

    const changeStateValue = (id,str) => {
        if(changeValue == false) setChangeValue(!changeValue)
        else{
            changeItem(id,str,value)
            setChangeValue(!changeValue)
        }
    }

    const handleInputChange = (event) => {
        setValue( event.target.value );
    };

    return (
        <div className="thought-container">
            <div className="thought">
                {!changeValue
                    ?<span className="thought-value">
                        <p className="last-edited">Added/Edited by you {Math.round(minutes)} min ago</p>
                            {post.value}
                    </span>
                    :<input type="text"
                            className="edit-thought"
                            placeholder="Write your thought and click enter"
                            onChange={handleInputChange}
                            value={value} />
                }
                <div>
                    <i className="material-icons icon medium edit-icon"
                       onClick={() => changeStateValue(post.key,"value")}>
                            save
                    </i>
                    <i type="button"
                       className="material-icons icon medium delete-icon"
                       onClick={() => deleteItem(post.key)}
                    >
                        delete
                    </i>
                </div>
            </div>
            <div className="reaction">
                <i className={post.liked
                    ? "material-icons medium icon selected"
                    : "material-icons medium icon"}
                    onClick={() => changeItem(post.key,"liked",!post.liked)}>
                    thumb_up_alt
                </i>
                <i className={post.favorite
                    ? "material-icons medium icon favorite-selected"
                    : "material-icons medium icon"}
                    onClick={() => changeItem(post.key,"favorite",!post.favorite)}>
                    favorite
                </i>
            </div>
        </div>
    )
}