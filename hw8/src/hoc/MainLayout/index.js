import React from 'react';
import Navbar from '../../components/Navbar'

export default function MainLayout(WrappedComponent) {

    const WithFetch = (props) => {
        return (
            <React.Fragment>
                <Navbar />
                <WrappedComponent  {...props} />
            </React.Fragment>
        )
    };

    return WithFetch;
}