/* eslint-disable react/prop-types */
import { TbMapPinPin } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { GiBed } from 'react-icons/gi'
import { MdOutlineBathtub } from 'react-icons/md'
import { PiToilet } from 'react-icons/pi'

export default function ProductCard({ id, image, title, price, address, bathroom, bedroom, restroom, }) {
    return (
        <Link to={`/listing/${id}`} className="rounded-md overflow-hidden min-h-44 md:min-h-56 hover:-translate-y-1 hover:shad bg-white group">
            <div className="h-32 w-full overflow-hidden relative">
                <div className="bg-slate-700 group-hover:bg-orange-500 py-1 px-4 w-32 rounded-2xl text-xs sm:text-sm text-white text-center absolute z-10 top-4 left-3">&#8358;{price.toLocaleString()}</div>
                <img src={image} alt={title} className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex flex-col justify-between px-4 pb-4 pt-2">
                <h5 className="text-slate-700 text-base sm:text-lg text-justify leading-tight font-semibold">{title}</h5>
                <p className="flex items-center font-medium text-xs sm:text-sm opacity-70 text-slate-600"><TbMapPinPin className="mr-1 text-inherit" />{address}</p>
            </div>
            <div className="flex items-center justify-between p-2 md:p-2 bg-white group-hover:bg-orange-500 text-slate-700 group-hover:text-white">
                <div className="flex items-center gap-[.15rem] md:gap-2 text-[.55rem] xl:text-xs">
                    <GiBed /> <p className="opacity-70">{bedroom} bedroom{bedroom > 1 ? 's' : ''}</p>
                </div>
                <div className="flex items-center gap-[.15rem] md:gap-2 text-[.55rem] xl:text-xs">
                    <MdOutlineBathtub /> <p className="opacity-70">{bathroom} bathroom{bathroom > 1 ? 's' : ''}</p>
                </div>
                <div className="flex items-center gap-[.15rem] md:gap-2 text-[.55rem] xl:text-xs">
                    <PiToilet /> <p className="opacity-70">{restroom} restroom{restroom > 1 ? 's' : ''}</p>
                </div>
            </div>
        </Link>
    )
}
