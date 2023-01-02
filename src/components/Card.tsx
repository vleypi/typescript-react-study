import React,{FC, useState} from 'react'

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width?: string;
    height: string;
    children: React.ReactNode,
    variant: CardVariant,
    onClick: (num: number) => void; //number || string || void || true
}

const Card: FC<CardProps> = ({width,height,children,variant,onClick}) => {

    const [state,setState] = useState(0)

    return (
      <div 
        style={{
            width,
            height, 
            border: variant === CardVariant.outlined ? 'gray 1px solid' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
        onClick={()=>onClick(state)}
    >
        {children}
      </div>
    )
}

export default Card