import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Events = (props) => {
    return (
        <div>
            <div className="container">
                <h4 className="center">Learn More</h4>
            <p><b>2020 Colorado Education Legislative Preview</b> on Sunday 12 - 2 PM</p>
            <p><b>Colorado Council Annual Conference: Power Up!</b> on Dec 5 - 6</p>
            <p><b>Teacher Retention Leadership Institute</b> on Dec 3 - Dec 4</p>
            <p><b>Educational Conference & Trade Show</b> on Mar 10-11, 2020</p>
            <p><b>Courage to Risk</b> on Jan 31 - Feb 1, 2020 </p>
            <p><b>Colorado Council International Reading Association</b> on Feb 5 - 8</p>
            </div>
        </div>
    )
}

export default Rainbow(Events)

