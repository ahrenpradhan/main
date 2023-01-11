export default [
  {
    title: 'Consulting - About',
    company: 'MMJS',
    description: `Implementing feature requests and maintaining the website.`,
    tech: [`NEXTJS`, `flickity`, `styled-components`, `Digital Ocean`]
  },
  {
    title: 'BioTech - Ecommerce',
    company: 'Teknofeet',
    description: `Created an eCommerce portal where we provided recommendation of
    products using customer biometrics of ankles and feet.`,
    tech: [`NEXTJS`, `GraphQl`, `Atomic Design`, `Vercel`]
  },
  {
    title: 'Skynet Admin Dashboard',
    company: 'TagTaste',
    description: `Feature requests and maintenance on TagTaste admin frontend.`,
    tech: [
      `ReactJs`,
      'Redux',
      `Antd`,
      `ChartJs`,
      `Husky`,
      'Jest',
      'Less',
      'NodeJs',
      'SQL',
      'Sequelize'
    ]
  },
  {
    title: 'TagTaste main webpage',
    company: 'TagTaste',
    description: `Site maintenance and feature requests.`,
    tech: [`ReactJs`, 'Redux', 'Sass']
  },
  {
    title: 'Algolia Integration in framework',
    company: 'Algolia - Commercetools',
    description: `Create a ready-to-use starter template app for commercetools marketplace to support algolia API.`,
    tech: [
      `Algolia`,
      `CommerceTools`,
      `ReactJs`,
      'ApolloGraphql',
      `TypeScript`,
      'husky',
      'GraphQl',
      'Jest',
      'AWS Lambda',
      'GCP2 cloud',
      'terraform'
    ]
  }
]
  .map((_, index) => ({ ..._, id: index }))
  .reverse();
