import React, { useState } from "react";
import { useViewport } from "../../hooks/useViewport";

const Accordion = ({children, title}) => {
  const [open, setOpen] = useState(false);
  const { width } = useViewport();

  const handleOpen = (event) => {
    event.preventDefault()
    setOpen(!open)
  }

  return (
    <>
      <div className="header-filters">
        <div>{title}</div>
        {width < 920 && <button className="close-icon" onClick={(event)=> handleOpen(event)}>{open ? "-" : "+"}</button>}
      </div>
      {(open || width >= 920) && children}
    </>
  )
}

export  default Accordion