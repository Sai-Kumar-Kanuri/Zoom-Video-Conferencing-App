import { cn } from '@/lib/utils'
import Image from 'next/image'

interface HomeCardProps {
    img: string;
    title: string
    description: string;
    classname?: string;
    handleClick?: () => void;
}

const HomeCard = ({ title, img, description, classname, handleClick }: HomeCardProps) => {
    return (
        <div
            // className="px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer"
            className={cn('px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer', classname)}
            onClick={handleClick}
        >
            <div className="flex-center glassmorphism size-12 rounded-[10px]">
                <Image src={img} alt="meeting" height={27} width={27} />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className=" font-bold text-2xl">{title}</h1>
                <p className=" font-normal text-lg">{description}</p>
            </div>

        </div>

    )
}

export default HomeCard
