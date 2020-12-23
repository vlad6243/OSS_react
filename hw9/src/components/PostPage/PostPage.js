import React from 'react';
import PropTypes from 'prop-types';
import PostList from "../PostList/PostList";
import PostInput from "../PostInput/PostInput";
import {connect} from "react-redux";
import {addPost, changePost, deletePost, fetchPosts} from "../../redux/actions/post";

function PostPage(props) {
    const myRef = React.createRef();
    React.useEffect(() => { props.fetchPosts() }, []);

    const scrollToBottom = () => {
        myRef.current.scrollIntoView({ behavior: "smooth" })
    }
    React.useEffect(scrollToBottom, [props.posts.length]);

    return (
        <div>
            <h1>
                My Thoughts App
            </h1>
            <PostList myRef={myRef} posts={props.posts} change={props.changePost} deleteItem={props.deletePost}/>
            <PostInput add={props.addPost} />
        </div>
    )
}

PostPage.propTypes = {
    posts:PropTypes.arrayOf(
        PropTypes.shape({
            key:PropTypes.number,
            value:PropTypes.string,
            liked:PropTypes.bool,
            favorite:PropTypes.bool,
            lastEditted:PropTypes.number
        })
    ),
    fetchPosts:PropTypes.func,
    addPost:PropTypes.func,
    changePost:PropTypes.func,
    deletePost:PropTypes.func
}

function mapStateToProps(state) {
    return{
        posts: state.post.posts,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        fetchPosts: () => dispatch(fetchPosts()),
        addPost: (post) => dispatch(addPost(post)),
        changePost: (id,str,value) => dispatch(changePost(id,str,value)),
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostPage)