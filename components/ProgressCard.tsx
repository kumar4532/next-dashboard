import React from 'react'
import ProgressCircle from './ProgressCircle'
import { CheckCircle2 } from 'lucide-react';

const ProgressCard = () => {
    const completedSteps = [
        "Profile Setup",
        "Initial Training",
        "Legal Documents",
    ];

    const remainingSteps = [
        "Financial Integration",
        "Final Review",
    ];

    return (
        <div className='border border-gray-300 rounded-lg p-4 md:p-6 flex flex-col items-center justify-center md:w-80 w-full'>
            <h1 className='mb-6 font-semibold text-lg'>Account Progress</h1>
            <ProgressCircle />
            <div className="space-y-6 w-full pt-4 mt-4 border-t border-gray-200">
                <div className="bg-gray-100 rounded-xl p-4 space-y-4 shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-800">Steps Completed</h2>
                    {completedSteps.map((step, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-gray-300 rounded-full" />
                                <span className="text-sm text-gray-800">{step}</span>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-white bg-green-600 rounded-full" />
                        </div>
                    ))}
                </div>

                <div className="bg-gray-100 rounded-xl p-4 space-y-4 shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-800">Steps Remaining</h2>
                    {remainingSteps.map((step, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-gray-300 rounded-full" />
                                <span className="text-sm text-gray-700">{step}</span>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-white bg-green-200 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProgressCard