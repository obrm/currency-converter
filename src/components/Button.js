import React from 'react'

const Button = ({ className, children, clickHandler, id }) => {
  return (
    <button
      className={`btn ${className}`}
      id={id}
      onClick={clickHandler}
    >
          {children}
    </button>
  )
}

export default Button