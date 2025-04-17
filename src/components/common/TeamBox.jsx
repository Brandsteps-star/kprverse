import ImageTilt from "../../effects/ImageTilt"

export const TeamBox = ({index, setHoveredIndex, hoveredIndex}) => {
    return(
        <div 
            key={index}
            className="w-1/4 h-full relative cursor-pointer border-r border-[#0000002a]"
            onMouseEnter={() => setHoveredIndex(index)}
        >
            <div className={`w-full h-full transition-all duration-500 ease-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <ImageTilt 
                    src="/images/protocol-bg.jpg"
                    className={`!object-cover transition-transform duration-500 ${hoveredIndex === index ? 'scale-95' : 'scale-0'}`}
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