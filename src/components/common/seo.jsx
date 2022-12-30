import { Helmet } from 'react-helmet-async';

const AppSEO = () => (
  <Helmet>
    {/* Standard metadata tags */}
    <title>FullStack Developer - Ahren Pradhan!</title>
    <meta
      name="description"
      content="Ahren Pradhan is a fullstack developer who can help one jump start their project."
    />
    {/* End standard metadata tags */}
    {/* Facebook tags */}
    <meta property="og:type" content="article" />
    <meta property="og:title" content="FullStack Developer for web and app" />
    <meta
      property="og:description"
      content="Ahren Pradhan is a fullstack developer who can help one jump start their project"
    />
    {/* End Facebook tags */}
    {/* Twitter tags */}
    <meta name="twitter:creator" content="ahrenpradhan" />
    <meta name="twitter:card" content="article" />
    <meta name="twitter:title" content="FullStack Developer for web and app" />
    <meta
      name="twitter:description"
      content="Ahren Pradhan is a fullstack developer who can help one jump start their project"
    />
    {/* End Twitter tags */}
  </Helmet>
);

export default AppSEO;
