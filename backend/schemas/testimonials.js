export default {
    name : 'testimonials',
    title: 'Testimoniasls',
    type: 'document',
    fields: [ 
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'FeedBack',
            type: 'string'
        },
    ]

}