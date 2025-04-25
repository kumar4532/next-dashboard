import React from 'react';

const InsightCard = () => {
    return (
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Insights & Feedback</h2>

            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-3xl font-bold text-gray-900">10%</p>
                    <p className="text-sm text-gray-500">Sales Growth</p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="/performer.png" // Replace with your logo
                        alt="Top Performer Badge"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="mt-2 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        Top Performer
                    </span>
                </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm font-semibold text-gray-800 mb-1">Feedback</p>
                <div className="flex items-start text-sm text-gray-600 space-y-1">
                    <span className="w-3 h-2.5 mt-1 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Franchisees are requesting more detailed training materials.</span>
                </div>
            </div>
        </div>
    );
};

export default InsightCard;