import React from 'react'

interface CardProps {
    width?: string;
    height: string;
    children?: React.ReactNode
}

const Card = ({width,height,children}: CardProps) => {
    return (
      <div style={{width,height, border: 'gray 1px solid'}}>
        {children}
      </div>
    )
}

export default Card