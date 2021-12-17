export const required = (value) => (value ? undefined : 'Field is required');

export const maxLengthCreator = (max) => (value) =>
    value && value > max ? `Must be ${max} characters or less` : undefined;

export const minValueCreator = (min) => (value) =>
    value && value < min ? `Must be at least ${min}` : undefined;