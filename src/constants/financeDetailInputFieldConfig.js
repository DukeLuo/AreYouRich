export default {
    '/emergency': [
        {
            type: 'text',
            id: 'emergency-field-1',
            description: '请输入金额',
            restriction: {
                minLength: 4,
                maxLength: 8,
                size: 10,
            },
        },
        {
            type: 'number',
            id: 'emergency-field-2',
            description: '请输入金额2',
        },
    ],
    '/solvency': [
        {
            type: 'text',
        },
        {
            type: 'number',
        },
    ],
    '/saving': [
        {
            type: 'text',
        },
        {
            type: 'number',
        },
    ],
    '/interest': [
        {
            type: 'text',
        },
        {
            type: 'number',
        },
    ],
};
