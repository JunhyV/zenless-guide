import { useState } from 'react'

export const useDimensions = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    const adaptHeight = () => {
        setHeight(window.innerHeight)
    }
    const adaptWidth = () => {
        setWidth(window.innerWidth)
    }

  return {height, adaptHeight, width, adaptWidth}
}
