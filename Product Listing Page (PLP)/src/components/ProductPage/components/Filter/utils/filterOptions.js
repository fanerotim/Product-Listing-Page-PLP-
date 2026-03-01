export const filterOptions = [
    {
        id: 1,
        value: 'rating',
        label: 'Rating',
        options: [1, 2, 3, 4, 5]
    },
    {
        id: 2,
        value: 'discount',
        label: 'Discount',
        options: [{
            value: true,
            label: 'Discounted'
        },
        {
            value: false,
            label: 'Standard price'
        }]
    },
    {
        id: 3,
        value: 'language',
        label: 'Language',
        options: [{
            value: 'BG',
            labbel: 'Bulgarian'
        },
        {
            value: 'FR',
            label: 'French'
        }, {
            value: 'EN',
            label: 'English'
        }]
    },
    {
        id: 4,
        value: 'genre',
        label: 'Genre',
        options: [
            {
                value: 'humour',
                label: 'Humour'
            },
            {
                value: 'history',
                label: 'History'
            },
            {
                value: 'classics',
                label: 'Classics'
            },
            {
                value: 'sports',
                label: 'Sports'
            },
            {
                value: 'art',
                label: 'Art'
            },
            {
                value: 'psychology',
                label: 'Psychology'
            }
        ]
    }
]