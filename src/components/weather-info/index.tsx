import React, { useEffect, useState } from 'react'
import { DataPanel } from './info-dataPanel/DataPanel';
import { SearchPanel } from './info-searchPanel/SearchPanel';

const WeatherInfo = () => {
    const [isFirefox, setIsFirefox] = useState(false);

    useEffect(() => {
        setIsFirefox(window.navigator.userAgent.includes('Firefox'))
    }, [])

    const infoStyles = `flex flex-col w-full lg:overflow-hidden shadow-lg 
            ${isFirefox ? 'bg-[#262626]' : 'backdrop-blur-xl bg-black/40'}`

    return (
        <div id='weatherInfo' className={infoStyles}>
            <SearchPanel />
            <DataPanel />
        </div>
    )
}

export default WeatherInfo;