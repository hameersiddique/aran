// theme/constants.js

// ==================== COLORS ====================
export const COLORS = {
    // Primary Colors
    primary: {
        main: '#4a9fd5',
        light: '#3b9ac7',
        dark: '#2a7fa5',
        gradient: 'linear-gradient(135deg, #4a9fd5, #3b9ac7)',
    },

    // Accent Colors
    accent: {
        cyan: '#00d4ff',
        purple: '#8b5cf6',
        gold: '#ffd700',
        gradient: 'linear-gradient(90deg, #00d4ff 0%, #8b5cf6 100%)',
        gradientReverse: 'linear-gradient(90deg, #8b5cf6 0%, #00d4ff 100%)',
    },

    // Background Colors
    background: {
        dark: '#0a0e27',
        darker: '#050811',
        medium: '#0d1129',
        light: '#0f1433',
        lighter: '#1a1f3a',
        // Gradients
        gradient1: 'linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%)',
        gradient2: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%)',
        gradient3: 'linear-gradient(180deg, #0a0e27 0%, #050811 100%)',
        gradient4: 'linear-gradient(135deg, rgba(10,14,39,1) 0%, rgba(12,25,60,1) 100%)',
        gradient5: 'linear-gradient(165deg, #0a0e27 0%, #0d1129 30%, #0f1433 60%, #1a1f3a 100%)',
    },

    // White/Transparent Colors
    white: {
        full: '#ffffff',
        opacity90: 'rgba(255, 255, 255, 0.9)',
        opacity80: 'rgba(255, 255, 255, 0.8)',
        opacity70: 'rgba(255, 255, 255, 0.7)',
        opacity50: 'rgba(255, 255, 255, 0.5)',
        opacity40: 'rgba(255, 255, 255, 0.4)',
        opacity35: 'rgba(255, 255, 255, 0.35)',
        opacity25: 'rgba(255, 255, 255, 0.25)',
        opacity15: 'rgba(255, 255, 255, 0.15)',
        opacity12: 'rgba(255, 255, 255, 0.12)',
        opacity10: 'rgba(255, 255, 255, 0.1)',
        opacity08: 'rgba(255, 255, 255, 0.08)',
        opacity06: 'rgba(255, 255, 255, 0.06)',
        opacity05: 'rgba(255, 255, 255, 0.05)',
        opacity04: 'rgba(255, 255, 255, 0.04)',
        opacity03: 'rgba(255, 255, 255, 0.03)',
        opacity02: 'rgba(255, 255, 255, 0.02)',
    },

    // Border Colors
    border: {
        primary: 'rgba(74, 159, 213, 0.3)',
        primaryHover: 'rgba(74, 159, 213, 0.4)',
        cyan: 'rgba(0, 212, 255, 0.3)',
        cyanStrong: 'rgba(0, 212, 255, 0.4)',
        white: 'rgba(255, 255, 255, 0.5)',
    },

    // Shadow Colors
    shadow: {
        primary: 'rgba(74, 159, 213, 0.2)',
        primaryStrong: 'rgba(74, 159, 213, 0.3)',
        cyan: 'rgba(0, 212, 255, 0.3)',
        cyanStrong: 'rgba(0, 212, 255, 0.5)',
        dark: 'rgba(0, 0, 0, 0.8)',
    },

    // Overlay Colors
    overlay: {
        dark: 'rgba(10, 14, 39, 0.95)',
        medium: 'rgba(10, 14, 39, 0.9)',
        light: 'rgba(10, 14, 39, 0.6)',
        gradient: 'linear-gradient(180deg, rgba(10, 14, 39, 0) 0%, rgba(10, 14, 39, 0.6) 50%, rgba(10, 14, 39, 0.9) 100%)',
    },

    // Radial Gradients
    radial: {
        primary: 'radial-gradient(circle at 50% 0%, rgba(74, 159, 213, 0.08), transparent 60%)',
        primaryStrong: 'radial-gradient(circle, rgba(74, 159, 213, 0.15), transparent 70%)',
    },
};

// ==================== TYPOGRAPHY ====================
export const TYPOGRAPHY = {
    // Font Families
    fontFamily: {
        primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        secondary: 'inherit',
    },

    // Font Sizes
    fontSize: {
        '2xs': {
            mobile: '0.5rem',
            desktop: '0.6rem',
        },
        // Extra Small
        xs: {
            mobile: '0.7rem',
            desktop: '0.75rem',
        },
        // Small
        sm: {
            mobile: '0.875rem',
            desktop: '0.9rem',
        },
        // Base
        base: {
            mobile: '1rem',
            desktop: '1.15rem',
        },
        // Medium
        md: {
            mobile: '1.1rem',
            desktop: '1.2rem',
        },
        // Large
        lg: {
            mobile: '1.25rem',
            desktop: '1.5rem',
        },
        // Extra Large
        xl: {
            mobile: '1.5rem',
            desktop: '1.8rem',
        },
        // 2X Large
        '2xl': {
            mobile: '2rem',
            desktop: '3rem',
        },
        // 3X Large
        '3xl': {
            mobile: '2rem',
            desktop: '4rem',
        },
    },

    // Font Weights
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },

    // Line Heights
    lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.9,
        loose: 2,
    },

    // Letter Spacing
    letterSpacing: {
        tight: '-0.5px',
        normal: '0',
        wide: '2px',
    },
};

// ==================== SPACING ====================
export const SPACING = {
    // Padding
    padding: {
        xs: { mobile: 2, desktop: 3 },
        sm: { mobile: 3, desktop: 4 },
        md: { mobile: 4, desktop: 5 },
        lg: { mobile: 6, desktop: 10 },
        xl: { mobile: 8, desktop: 12 },
    },

    // Margins
    margin: {
        xs: { mobile: 1, desktop: 2 },
        sm: { mobile: 2, desktop: 3 },
        md: { mobile: 3, desktop: 4 },
        lg: { mobile: 6, desktop: 8 },
        xl: { mobile: 8, desktop: 12 },
    },

    // Gaps
    gap: {
        xs: 1,
        sm: 2,
        md: 4,
        lg: 6,
        xl: 12,
    },
};

// ==================== BORDER RADIUS ====================
export const BORDER_RADIUS = {
    none: 0,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 16,
    full: '50px',
    circle: '50%',
};

// ==================== SHADOWS ====================
export const SHADOWS = {
    // Box Shadows
    none: 'none',
    sm: '0 8px 32px rgba(74, 159, 213, 0.2)',
    md: '0 20px 60px rgba(0, 212, 255, 0.3)',
    lg: '0 30px 80px rgba(0, 212, 255, 0.5)',
    xl: '-20px 0 60px rgba(0, 0, 0, 0.8)',

    // Combined Shadows
    combined: {
        drawer: '-20px 0 60px rgba(0, 0, 0, 0.8), inset 1px 0 1px rgba(255, 255, 255, 0.03)',
        card: '0 8px 32px rgba(74, 159, 213, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
    },
};

// ==================== TRANSITIONS ====================
export const TRANSITIONS = {
    // Duration
    duration: {
        fast: '0.3s',
        normal: '0.4s',
        slow: '0.5s',
        slower: '0.6s',
    },

    // Easing
    easing: {
        ease: 'ease',
        easeIn: 'ease-in',
        easeOut: 'ease-out',
        easeInOut: 'ease-in-out',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },

    // Common Transitions
    all: 'all 0.4s ease',
    allBounce: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    transform: 'transform 0.3s ease',
    opacity: 'opacity 0.5s ease',
    transformOpacity: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
};

// ==================== BREAKPOINTS ====================
export const BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};

// ==================== Z-INDEX ====================
export const Z_INDEX = {
    drawer: 1200,
    fab: 1000,
    header: 1200,
    overlay: 1100,
    modal: 1300,
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Get responsive value based on mobile/desktop
 * @param {Object} values - Object with mobile and desktop values
 * @returns {Object} - MUI responsive object
 */
export const responsive = (values) => ({
    xs: values.mobile,
    md: values.desktop,
});

/**
 * Create a color with opacity
 * @param {string} color - RGB color
 * @param {number} opacity - Opacity value (0-1)
 * @returns {string} - RGBA color string
 */
export const withOpacity = (color, opacity) => {
    const rgb = color.match(/\d+/g);
    if (rgb && rgb.length >= 3) {
        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
    }
    return color;
};

/**
 * Create backdrop filter blur
 * @param {number} amount - Blur amount in px
 * @returns {string} - Backdrop filter string
 */
export const blur = (amount) => `blur(${amount}px)`;

// ==================== EXPORT DEFAULT ====================
export default {
    COLORS,
    TYPOGRAPHY,
    SPACING,
    BORDER_RADIUS,
    SHADOWS,
    TRANSITIONS,
    BREAKPOINTS,
    Z_INDEX,
    responsive,
    withOpacity,
    blur,
};