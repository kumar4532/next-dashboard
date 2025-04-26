import Image from 'next/image';
import React from 'react'

const QuestionsSection = () => {
    const questions = [
        {
            id: 1,
            user: 'Phoenix Baker',
            username: '@phoenix',
            time: '5min ago',
            question: 'What are the requirements for opening a new store?',
            avatar: '/pheon.png',
            online: true,
            background: '#D6CFB7'
        },
        {
            id: 2,
            user: 'Koray Okumus',
            username: '@koray',
            time: '4hr ago',
            question: 'How do I manage inventory effectively?',
            avatar: '/koray.png',
            online: true,
            background: '#E5CFE7'
        }
    ];

    return (
        <div className="lg:w-[32%] w-full">
            <div className="flex justify-between items-center px-4 py-3 border-b">
                <h2 className="font-semibold text-lg">Pending Questions</h2>
                <span className="bg-blue-400 text-white px-2 py-0.5 rounded-md text-sm">02</span>
            </div>

            <div className="overflow-y-auto px-4">
                {questions.map((item) => (
                    <div key={item.id} className="border-b p-4">
                        <div className="flex items-start mb-3">
                            <div className="relative mr-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full absolute -left-4 top-1/2 transform -translate-y-1/2"></div>
                                <div className="relative">
                                    <Image src={item.avatar} alt={item.user} className="rounded-full" width={40} height={40} style={{ backgroundColor: item.background }} />
                                    {item.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h3 className="font-medium">{item.user}</h3>
                                    <span className="text-gray-500 text-sm">{item.time}</span>
                                </div>
                                <p className="text-gray-500 text-sm">{item.username}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm">{item.question}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionsSection