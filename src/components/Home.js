import React from 'react'
import Notes from "../components/Notes";

export default function Home(props) {
  return (
    <div className="my-3">
      <Notes showAlert={props.showAlert}  />
    </div>
  )
}
