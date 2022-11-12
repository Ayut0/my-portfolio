export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'title',
            description: 'title of the project',
            type: 'string'
        },
        {
            name: 'priority',
            title: 'priority',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'reference', to: {type: 'skill'}}],
        },
        {
            name: 'linkToDemo',
            title: 'LinkToDemo',
            type: 'url'
        },
        {
            name: 'linkToGit',
            title: 'LinkToGit',
            type: 'url'
        },

    ]
}