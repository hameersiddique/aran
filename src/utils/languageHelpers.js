// utils/languageHelpers.js

/**
 * Get text alignment based on language
 * @param {string} lang - Language code ('en' or 'ar')
 * @returns {string} - Text alignment ('left' or 'right')
 */
export const getTextAlign = (lang) => {
    return lang === 'ar' ? 'right' : 'left';
};

/**
 * Get flex direction based on language
 * @param {string} lang - Language code ('en' or 'ar')
 * @returns {string} - Flex direction ('row' or 'row-reverse')
 */
export const getFlexDirection = (lang) => {
    return lang === 'ar' ? 'row-reverse' : 'row';
};

/**
 * Get direction attribute based on language
 * @param {string} lang - Language code ('en' or 'ar')
 * @returns {string} - Direction ('rtl' or 'ltr')
 */
export const getDirection = (lang) => {
    return lang === 'ar' ? 'rtl' : 'ltr';
};

/**
 * Get transform translation based on language for hover effects
 * @param {string} lang - Language code ('en' or 'ar')
 * @param {number} amount - Amount to translate (default: 12)
 * @returns {string} - Transform value
 */
export const getTranslateX = (lang, amount = 12) => {
    return lang === 'ar' ? `translateX(${amount}px)` : `translateX(-${amount}px)`;
};

/**
 * Get margin/padding side based on language
 * @param {string} lang - Language code ('en' or 'ar')
 * @param {string} side - Side ('left' or 'right')
 * @returns {string} - Corrected side based on language
 */
export const getSide = (lang, side) => {
    if (side === 'left') {
        return lang === 'ar' ? 'right' : 'left';
    }
    if (side === 'right') {
        return lang === 'ar' ? 'left' : 'right';
    }
    return side;
};

/**
 * Get position values for absolute/fixed elements based on language
 * @param {string} lang - Language code ('en' or 'ar')
 * @returns {object} - Position object with left/right values
 */
export const getPosition = (lang, side) => {
    if (side === 'left') {
        return lang === 'ar' ? { right: 0, left: 'auto' } : { left: 0, right: 'auto' };
    }
    if (side === 'right') {
        return lang === 'ar' ? { left: 0, right: 'auto' } : { right: 0, left: 'auto' };
    }
    return {};
};

/**
 * Get complete sx props for text alignment
 * @param {string} lang - Language code ('en' or 'ar')
 * @returns {object} - SX object with text alignment
 */
export const getTextAlignSx = (lang) => ({
    textAlign: getTextAlign(lang),
});

/**
 * Get complete sx props for flex direction
 * @param {string} lang - Language code ('en' or 'ar')
 * @returns {object} - SX object with flex direction
 */
export const getFlexDirectionSx = (lang) => ({
    flexDirection: getFlexDirection(lang),
});

/**
 * Get complete sx props for direction
 * @param {string} lang - Language code ('en' or 'ar')
 * @returns {object} - SX object with direction
 */
export const getDirectionSx = (lang) => ({
    direction: getDirection(lang),
});