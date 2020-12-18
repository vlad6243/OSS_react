import React from 'react';
import Navbar from "../../components/Navbar";
import {Redirect} from "react-router-dom";

export default function ProfileLayout(WrappedComponent) {
    const WithFetch = (props) => {

        const admin = localStorage.getItem('admin');
        if(admin === "false") return <Redirect to='/login'/>
        return (
            <React.Fragment>
                <Navbar />
                <WrappedComponent {...props} />
            </React.Fragment>
        )
    };

    return WithFetch;
}