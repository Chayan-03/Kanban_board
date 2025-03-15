/**
 * Truncates text to the specified length and adds ellipsis if needed
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length of the result
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength) => {
    if (!text || typeof text !== 'string') return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};