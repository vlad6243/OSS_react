import React from 'react';
import PostItem from "../PostItem/PostItem";
import './style.css';

export default function PostList({posts,change,deleteItem,myRef}) {
    return (
        <div className="thoughts">
            {posts.map(el => {
                return <PostItem key={el.key} post={el} changeItem={change} deleteItem={deleteItem}/>
            })}
            <div ref={myRef} />
        </div>
    )
}