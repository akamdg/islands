import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Flights = (props) => {
    return (
        <div>
            <div className="container">
                <h4 className="center">Available Flights</h4>
            <p><b>Pitcairn Island:</b> Flights available from Denver on December 12 for flight to Mangareva, Gambier Islands. Providers are <i>Delta, Tahiti Nui</i></p>
            <p><b>Easter Island</b> Southwest flight on Sunday 12 - 2 PM</p>
            <p><b>Bouvet Island:</b> Air Alaksa flight available on Tuesday at 1 AM</p>
            <p><b>The Keguelen Islands:</b> Spirit Air flight available on Wednesday at 3 PM.</p>
            <p><b>Amsterdam Island:</b> JetBlue flight leaving for the island on Friday at 12 PM.</p>
            <p><b>Bouvet Island:</b> Frontier Airlines flight headed to the island on Saturday at 9:35 AM.</p>
            <p><b>Niue:</b> Flights are not available to the island until next year.</p>
            
           
            </div>
        </div>
    )
}

export default Rainbow(Flights)

