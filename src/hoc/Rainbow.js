import React from 'react'

const Rainbow = (WrappedComponent) => {
    
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow', 'brown', 'gray', 'turquoise', 'purple', 'white'];
    const randomColor = colors[Math.floor(Math.random() * 11)];
    const className = randomColor + '-text';

    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )

}

export default Rainbow