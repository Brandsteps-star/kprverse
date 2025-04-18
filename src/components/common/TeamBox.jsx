import ImageTilt from "../../effects/ImageTilt"

export const TeamBox = ({index, setHoveredIndex, hoveredIndex, name, role, number}) => {
    return(
        <div 
            className="w-1/4 h-full relative cursor-pointer border-r border-[#0000002a] max-sm:w-full max-sm:min-h-[30vh] max-sm:border-b"
            onMouseEnter={() => setHoveredIndex(index)}
        >
            <div className="p-6">
                <h2 className="uppercase text-[2rem] leading-[2rem] font-bold">{name}</h2>
                <span className="font-mono extra-sm-text uppercase">{role}</span>
                <span className="font-mono extra-sm-text absolute bottom-6 right-6">{number}</span>
            </div>
            <div className={`absolute top-0 w-full h-full transition-all duration-500 ease-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <ImageTilt 
                    src="/images/protocol-bg.jpg"
                    className={`!object-cover transition-transform duration-500 ${hoveredIndex === index ? 'scale-100 max-sm:scale-95' : 'scale-0'}`}
                    tiltOptions={{
                        max: 40,
                        perspective: 1200,
                        speed: 2000,
                    }}
                />
            </div>
        </div>
    )
}