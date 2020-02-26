import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Definitions = () => {
    return (
        <div>
            <div className="container">
                <h4 className="center">Definitions</h4>
                <p><b>Island:</b>An island is a piece of land that is surrounded by water.</p>
                <p><b>Moai:</b>The moai is the name for the almost 1,000 stone statues on Easter Island.</p>
                <p><b>Continental Island:</b>An island that used to be part of a continent and sit on a continental shelf. Examples of this type of island include Greenland and Magascar</p>
                <p><b>Barrier Island:</b>This is a narrow type of island that lies parallel to islands.</p>
                <p><b>Oceanic islands:</b> This is the type of island that was formed by volcanoes. </p>
            </div>
        </div>
    )
}

export default Rainbow(Definitions)

