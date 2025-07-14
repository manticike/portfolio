"use client";
import { CardHoverEffectDemo } from "@/snippets/cardHoverEffect";
import Image from "next/image";


const Services = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Services</h2>

                {/* Include the Aceternity UI component */}
                <CardHoverEffectDemo />
            </div>
        </section>
    );
};

export default Services;