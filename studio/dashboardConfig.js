export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619a388a87d83f29410834ad',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-oyvjb7rn',
                  apiId: 'cb6b8070-dd4f-420a-92f7-98f31aad017f'
                },
                {
                  buildHookId: '619a388a9ca0eb302470d7c9',
                  title: 'Blog Website',
                  name: 'sanity-test-web-hm8x1gkp',
                  apiId: '0e9a7a21-df0c-4990-8608-28e9ad0fe6fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lauravikanis/sanity_test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-hm8x1gkp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
