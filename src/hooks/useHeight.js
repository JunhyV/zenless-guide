import { useState } from 'react'

export const useHeight = () => {
    const [height, setHeight] = useState(window.innerHeight);

    const adapt = () => {
        setHeight(window.innerHeight)
    }

  return {height, adapt}
}
