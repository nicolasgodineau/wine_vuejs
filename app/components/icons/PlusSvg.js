
export default function PlusSvg({ size = 24, className = "" }) {
    console.log('className:', className)

    return (
        <svg
            viewBox="0 0 24 24"
            fill="text-tertiary"
            width={size}
            height={size}
            className={`fill-current ${className}`}
            aria-hidden="true"
        >
            <path d="M12 5c.55 0 1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1z" />
        </svg>
    );
};
