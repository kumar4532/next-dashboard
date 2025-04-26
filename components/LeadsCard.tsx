import React from 'react'
import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"

const LeadsCard = () => {
    const prospects = [
        {
            id: 1,
            name: 'Wade Warren',
            stage: 'Initial Inquiry',
            avatar: '/wade.png'
        },
        {
            id: 2,
            name: 'Ava Wright',
            stage: 'Initial Inquiry',
            avatar: '/ava.png'
        },
        {
            id: 3,
            name: 'Cody Fisher',
            stage: 'Initial Inquiry',
            avatar: '/cody.png'
        }
    ];

    return (
        <div className="rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-4">Prospect Leads</h2>
            <div className="space-y-3">
                {prospects.map(prospect => (
                    <div
                        key={prospect.id}
                        className="flex items-center justify-between p-2 md:p-3 bg-gray-100 rounded-lg"
                    >
                        <div className="flex items-center">
                            <Avatar className="w-8 h-8 mr-1.5 md:mr-2">
                                <AvatarImage src={prospect.avatar} alt={prospect.name} />
                            </Avatar>
                            <span className="font-normal text-base">{prospect.name}</span>
                        </div>
                        <div className="text-gray-600 text-xs">
                            Stage: <span className='text-black'>{prospect.stage}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeadsCard