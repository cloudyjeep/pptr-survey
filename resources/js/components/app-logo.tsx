export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md">
                <img src="/logo.png" alt="PPTR Survey" className=" object-contain" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-medium">
                    <span className='opacity-60 '>{"PPTR"}</span>
                    <span className='opacity-30 px-1'>{"|"}</span>
                    <span className='font-semibold tracking-widest'>{"Survey"}</span>
                </span>
            </div>
        </>
    );
}
