import React from 'react'
import './MyComponent.css'

const MyComponent = () => {
  return (
    <div>
        <div>Component CSS</div>
        <p>This is the paragraph from Component CSS</p>
        <p className="my-comp-paragraph">This is the paragraph from Component CSS too</p>
    </div>
  )
}

export default MyComponent