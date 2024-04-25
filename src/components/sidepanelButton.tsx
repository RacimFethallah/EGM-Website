import React from 'react'

export default function SidepanelButton(setSidePanelOpen: any) {
  return (
    <button onClick={() => setSidePanelOpen(true)}>Open Side Panel</button>
  )
}
