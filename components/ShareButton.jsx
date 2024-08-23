'use client'
import Image from "next/image";
import { toast } from "sonner";

const ShareButton = ({ share }) => {

    const shareLink = async () => {
        const currentUrl = window.location.href;
        try {
            await navigator.clipboard.writeText(currentUrl);
            toast('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy the link: ', err);
        }
    }

    return (
        <button
            onClick={shareLink}
            className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-blue-300">
            <Image
                src="/share.svg"
                className="w-5 h-5"
                width={25}
                height={25}
                alt="Share Icon"
            />
            {share}
        </button>
    );
};

export default ShareButton;