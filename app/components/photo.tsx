import React from 'react';

type PhotoProps = {
    className?: string;
    alt?: string;
};

export default function Photo({ className, alt = "Headshot" }: PhotoProps) {
    return (
        <div className={`${className}`} style={{ aspectRatio: '1 / 1' }}>
            <picture>
                <source srcSet="headshot.jpg" type="image/webp" />
                <source srcSet="headshot.jpg" type="image/jpeg" />
                <img
                    src="headshot.jpg"
                    alt={alt}
                    className={className}
                />
            </picture>
        </div>
    );
}
