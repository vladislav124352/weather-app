import React, { FC } from 'react'

interface Props {
    iconUrl: string;
    hourTime: string;
    temperatureC: number;
    shortWeather: string;
}

export const HourForecast: FC<Props> = ({ temperatureC, hourTime, iconUrl, shortWeather }) => {
    const hourForecastStyles = `flex items-center justify-between bg-black/20 
            px-3 py-1 w-full mb-2 rounded hover:bg-black/30 active:bg-black/30`;

    return (
        <li className={hourForecastStyles}>
            <div className='flex items-center'>
                <img className='w-10 mr-2' alt={shortWeather} src={iconUrl} />
                <p className='text-md'>
                    {temperatureC}°C
                </p>
            </div>
            <p className='font-bold mr-1'>
                {hourTime}
            </p>
        </li>
    )
}
