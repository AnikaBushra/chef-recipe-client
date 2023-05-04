import React from 'react';

const Blog = () => {
    return (
        <div>
            <p>Difference between uncontrolled and controlled components??</p>
            <p>in controlled components form data is handled by React itself and in uncontrolled components form data is handled by DOM</p>
            <p>How to validate react props using Props types??</p>
            <p>we can use react props to send data to components.if a component receive wrong type of props it can cause bugs and unexpected errors in your app. react has an internal machanism for props validataion called prop types.when props are passed to a react component they are checked against the type definitions configured in the proptypes property . when anbalid value is passed for aa prop awarning is displayed on the js console</p>
            <p>Difference between node js and express js.</p>
            <p>Node.js is an open source and cross platform runtime environment for execution js code outside a browser.
                Express.js is a small frameword that sits on top of node.js wev server functionality to simplyfy tis apis and add helpful new server.
            </p>
            <p>What is a custom hook and why you create a custom hook?</p>
            <p>Hooks are reuseable functions .when you  have component logicthat needs to be used by multiple components we can extract rhat logic to a custom hook</p>
        </div>
    );
};

export default Blog;