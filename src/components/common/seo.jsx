import { Helmet } from 'react-helmet-async';

const AppSEO = () => (
  <Helmet>
    {/* Standard metadata tags */}
    <title>RP Solders Pvt. Ltd. - Tin-Lead Alloys & Solder Solutions</title>
    <meta
      name="description"
      content="Pioneers in Tin-Lead Alloys & Solder Wire, Sticks, Rods and Bars since 1999. We cater to Automotive, Radiators, Heat Exchangers, Electronics & Electrical industries."
    />
    <meta name="keywords" content="solder wire, solder sticks, solder rods, solder bars, tin-lead alloys, automotive solder, electronics solder, heat exchanger solder" />
    {/* End standard metadata tags */}
    {/* Facebook tags */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="RP Solders Pvt. Ltd. - Quality Solder Solutions" />
    <meta
      property="og:description"
      content="Leading manufacturer of Tin-Lead Alloys & Solder products since 1999. Serving Automotive, Electronics, and Heat Exchanger industries with premium quality solder solutions."
    />
    {/* End Facebook tags */}
    {/* Twitter tags */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="RP Solders Pvt. Ltd. - Tin-Lead Alloys & Solder Solutions" />
    <meta
      name="twitter:description"
      content="Pioneers in Tin-Lead Alloys & Solder Wire, Sticks, Rods and Bars since 1999. Trusted by Automotive, Radiators, Heat Exchangers, Electronics & Electrical industries."
    />
    {/* End Twitter tags */}
  </Helmet>
);

export default AppSEO;
