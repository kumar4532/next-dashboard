import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { TrendingUp } from "lucide-react";

const FranchiseesCard = () => {
    const avatars = [
        {
            imageUrl: "/sofia.png",
            profileUrl: "/",
        },
        {
            imageUrl: "/pheonix.png",
            profileUrl: "/",
        },
        {
            imageUrl: "/lena.png",
            profileUrl: "/",
        },
        {
            imageUrl: "/demi.png",
            profileUrl: "/",
        },
        {
            imageUrl: "/candice.png",
            profileUrl: "/",
        },
    ];

    return (
        <div className="bg-white rounded-xl p-4 md:p-6 w-full space-y-4 border ">
            <div className="flex items-start">
                <div className="w-full">
                    <h2 className="text-lg font-semibold text-gray-900">Total Franchisees Onboard</h2>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-4">
                            <span className="text-3xl font-semibold text-gray-900">14</span>
                            <span className="flex items-center text-sm border-2 border-green-700 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                7.4%
                            </span>
                        </div>
                        <AvatarCircles numPeople={7} avatarUrls={avatars} />
                    </div>
                </div>
            </div>

            <div className="flex space-x-1.5 my-6 w-full">
                <div className="h-3 bg-[#1F7EAA] rounded-xs w-1/4"></div>
                <div className="h-3 bg-[#2FBDFF] rounded-xs w-1/5"></div>
                <div className="h-3 bg-[#97DEFF] rounded-xs w-2/4"></div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#1F7EAA]"></span>
                        <span className="text-sm text-gray-700">Stage 1 (Initial Inquiry)</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">02</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#2FBDFF]"></span>
                        <span className="text-sm text-gray-700">Stage 2 (Document Submission)</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">07</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#97DEFF]"></span>
                        <span className="text-sm text-gray-700">Stage 3 (Training)</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">05</span>
                </div>
            </div>
        </div>
    );
};

export default FranchiseesCard;