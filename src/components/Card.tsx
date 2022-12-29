import React,{FC} from 'react'

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width?: string;
    height: string;
    children: React.ReactNode,
    variant: CardVariant,
    onClick: () => void; //number || string || void || true
}

const Card: FC<CardProps> = ({width,height,children,variant,onClick}) => {
    return (
      <div 
        style={{
            width,
            height, 
            border: variant === CardVariant.outlined ? 'gray 1px solid' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
        onClick={onClick}
    >
        {children}
      </div>
    )
}

export default Card