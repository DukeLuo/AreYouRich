export default {
    '/emergency': [
        {
            type: 'text',
            id: 'emergency-field-1',
            description: '流动资产',
            options: {
                minLength: 1,
                maxLength: 9,
                autoComplete: 'off',
            },
        },
        {
            type: 'text',
            id: 'emergency-field-2',
            description: '日常必需月支出',
            options: {
                minLength: 1,
                maxLength: 9,
                autoComplete: 'off',
            },
        },
        {
            type: 'button',
            id: 'confirm-btn',
            options: {
                value: '查询',
            },
        },
    ],
    '/solvency': [
        {
            type: 'text',
            id: 'solvency-field-1',
            description: '债务',
            options: {
                minLength: 1,
                maxLength: 9,
                autoComplete: 'off',
            },
        },
        {
            type: 'text',
            id: 'solvency-field-2',
            description: '总资产',
            options: {
                minLength: 1,
                maxLength: 9,
                autoComplete: 'off',
            },
        },
        {
            type: 'button',
            id: 'confirm-btn',
            options: {
                value: '查询',
            },
        },
    ],
    '/saving': [
        {
            type: 'text',
            id: 'saving-field-1',
            description: '每月储蓄额',
            options: {
                minLength: 1,
                maxLength: 9,
                autoComplete: 'off',
            },
        },
        {
            type: 'text',
            id: 'saving-field-2',
            description: '每月收入',
            options: {
                minLength: 1,
                maxLength: 9,
                autoComplete: 'off',
            },
        },
        {
            type: 'button',
            id: 'confirm-btn',
            options: {
                value: '查询',
            },
        },
    ],
    '/interest': [
        {
            type: 'text',
            id: 'interest-field-1',
            description: '投资资产',
            options: {
                minLength: 1,
                maxLength: 9,
                autoComplete: 'off',
            },
        },
        {
            type: 'text',
            id: 'interest-field-2',
            description: '总资产',
            options: {
                minLength: 1,
                maxLength: 9,
                autoComplete: 'off',
            },
        },
        {
            type: 'button',
            id: 'confirm-btn',
            options: {
                value: '查询',
            },
        },
    ],
};
