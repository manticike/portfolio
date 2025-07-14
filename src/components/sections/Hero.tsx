import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                src="/hero-image.jpg"
                alt="hero section background"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority 
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Isaac Antwi</h1>
                    <p className="text-xl md:text-2xl mb-8">Your Tagline or Brief Description</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;