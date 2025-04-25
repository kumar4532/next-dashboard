import React from 'react'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Settings } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-end space-x-6 py-5'>
            <Settings className='text-slate-400 h-5' />
            <Avatar>
                <AvatarImage src="/Avatar.png" />
            </Avatar>
        </div>
    )
}

export default Navbar