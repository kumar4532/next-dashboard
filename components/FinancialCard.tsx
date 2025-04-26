import React from 'react';
import { TrendingUp } from 'lucide-react';
import { NumberTicker } from "@/components/magicui/number-ticker";

const FinancialCard = () => {
    return (
        <div className="rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm bg-white">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Financial Wellbeing</h2>

            <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
                <div>
                    <p className="text-3xl font-semibold text-gray-900">
                        <NumberTicker
                            value={20}
                            startValue={10}
                        />
                    </p>
                    <p className="text-sm text-gray-500">Total Franchisees</p>
                </div>

                <div className="flex items-center text-sm border-2 border-green-700 text-green-700 px-2 py-0.5 rounded-full font-medium">
                    <TrendingUp className="w-4 h-4 mr-1.5" />
                    2.1%
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 md:p-6 rounded-xl text-center">
                    <p className="text-sm text-gray-600 mb-1.5 md:mb-2.5 font-medium">Target</p>
                    <p className="text-base font-semibold text-gray-900">$500,000</p>
                </div>
                <div className="bg-gray-100 p-5 md:p-6 rounded-xl text-center">
                    <p className="text-sm text-gray-600 mb-1.5 md:mb-2.5 font-medium">Current</p>
                    <p className="text-base font-semibold text-gray-900">$
                        <NumberTicker
                            value={450000}
                            startValue={440000}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FinancialCard;