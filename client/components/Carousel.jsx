import { useState } from 'react';
import {ChevronLeft, ChevronRight} from 'react-feather'

const Carousel = ({children : slides}) => {
    const [curr, setCurr] = useState(4);
    const prev = () => (curr === 4 ? slides.length-1 : curr-1)
    return (
        <div className="overflow-hidden relative">
            <div className="flex">{slides}</div>
            <div className = "absolute inset-0 flex items-center justify-between p-4">
                <button className = "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeft  size={40}/>
                </button>
                <button className = "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    )
}

export default Carousel;