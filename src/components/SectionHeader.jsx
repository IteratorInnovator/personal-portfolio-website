import React from "react";

function SectionHeader({ title }) {
    return (
        <div className="text-center mb-16">
            <h2 className="section-title">{title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </div>
    );
}

export default SectionHeader;