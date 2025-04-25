'use client'

import React, { useEffect, useState } from 'react'
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";

const ProgressCircle = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(prev => {
                if (prev >= 85) {
                    clearInterval(interval);
                    return 85;
                }
                return prev + 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <AnimatedCircularProgressBar
                max={100}
                min={0}
                gaugePrimaryColor="#279DD4"
                gaugeSecondaryColor='gray'
                value={value}
            />
        </div>
    )
}

export default ProgressCircle;