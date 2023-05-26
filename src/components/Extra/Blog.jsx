import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-[700px] mx-auto'>
            <div className='mb-8 mt-4'>
                <h3 className='text-lg mb-3'>1. Tell us the differences between uncontrolled and controlled components.</h3>
                <p className='text-slate-500'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='mb-8 mt-4'>
                <h3 className='text-lg mb-3'>2. How to validate React props using Prop Types.</h3>
                <p className='text-slate-500'>In React, you can validate the props passed into a component using prop-types library. Define the PropTypes for each prop your component should receive. You can use one of many available PropTypes validators such as string , number , bool , array , shape , etc. By using PropTypes, you can be sure that your component receives the correct type of data, which helps to prevent bugs.</p>
            </div>
            <div className='mb-8 mt-4'>
                <h3 className='text-lg mb-3'>3. Tell us the different between nodejs and express js.</h3>
                <p className='text-slate-500'>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            </div>
            <div className='mb-8 mt-4'>
                <h3 className='text-lg mb-3'>4. What is a custom hook, and why will you create a custom hook?</h3>
                <p className='text-slate-500'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blog;