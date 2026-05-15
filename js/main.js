tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-tertiary-fixed-variant": "#374956",
                "surface-container": "#182028",
                "surface": "#0b141c",
                "tertiary-container": "#d2e5f5",
                "secondary-fixed": "#b7eaff",
                "outline": "#8e9379",
                "primary-fixed": "#c3f400",
                "error-container": "#93000a",
                "surface-container-high": "#222b33",
                "secondary-fixed-dim": "#4cd6ff",
                "outline-variant": "#444933",
                "surface-container-highest": "#2d363e",
                "primary-container": "#c3f400",
                "on-error-container": "#ffdad6",
                "on-primary-fixed": "#161e00",
                "inverse-on-surface": "#29313a",
                "surface-tint": "#abd600",
                "surface-container-lowest": "#060f16",
                "error": "#ffb4ab",
                "primary": "#ffffff",
                "tertiary-fixed-dim": "#b6c9d8",
                "on-secondary-container": "#00566b",
                "on-secondary": "#003543",
                "on-tertiary": "#21323e",
                "tertiary-fixed": "#d2e5f5",
                "on-primary-container": "#556d00",
                "secondary": "#a6e6ff",
                "on-error": "#690005",
                "inverse-primary": "#506600",
                "surface-dim": "#0b141c",
                "tertiary": "#ffffff",
                "on-secondary-fixed-variant": "#004e60",
                "on-secondary-fixed": "#001f28",
                "on-tertiary-container": "#556774",
                "on-surface": "#dae3ee",
                "on-surface-variant": "#c4c9ac",
                "on-background": "#dae3ee",
                "on-primary": "#283500",
                "primary-fixed-dim": "#abd600",
                "background": "#0b141c",
                "surface-variant": "#2d363e",
                "inverse-surface": "#dae3ee",
                "secondary-container": "#14d1ff",
                "on-tertiary-fixed": "#0b1d29",
                "on-primary-fixed-variant": "#3c4d00",
                "surface-bright": "#313a43",
                "surface-container-low": "#141c24"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "margin-desktop": "64px",
                "container-max": "1200px",
                "base": "8px",
                "margin-mobile": "20px",
                "gutter": "24px"
            },
            "fontFamily": {
                "headline-lg": ["Geist", "sans-serif"],
                "label-caps": ["JetBrains Mono", "monospace"],
                "body-md": ["Geist", "sans-serif"],
                "headline-xl-mobile": ["Geist", "sans-serif"],
                "code-sm": ["JetBrains Mono", "monospace"],
                "headline-xl": ["Geist", "sans-serif"]
            },
            "fontSize": {
                "headline-lg": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
                "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "headline-xl-mobile": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                "code-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "headline-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
        }
    }
};

// Carousel Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            mobileNav.classList.toggle('flex');
            const icon = mobileBtn.querySelector('.material-symbols-outlined');
            icon.textContent = mobileNav.classList.contains('hidden') ? 'menu' : 'close';
        });

        // Close menu on link click
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
                mobileNav.classList.remove('flex');
                if (mobileBtn.querySelector('.material-symbols-outlined')) {
                    mobileBtn.querySelector('.material-symbols-outlined').textContent = 'menu';
                }
            });
        });
    }

    // Carousel Logic
    const prevBtn = document.getElementById('btn-prev-project');
    const nextBtn = document.getElementById('btn-next-project');
    const carousel = document.getElementById('projects-carousel');

    if (prevBtn && nextBtn && carousel) {
        prevBtn.addEventListener('click', () => {
            const scrollAmount = carousel.firstElementChild.clientWidth + 24; // Card width + gap
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            const scrollAmount = carousel.firstElementChild.clientWidth + 24; // Card width + gap
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // Automatically set target="_blank" for all links that are not internal anchors
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        // If href exists and doesn't start with '#' (internal anchor)
        if (href && !href.startsWith('#')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
