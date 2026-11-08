import React from 'react'

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button onClick={onToggle} data-testid="dark-mode-toggle">
      Toggle Dark Mode
    </button>
  )
}

export default DarkModeToggle
