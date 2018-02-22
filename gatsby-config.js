module.exports = {
  siteMetadata: {
    title: 'Anormal Space',
    siteUrl: `https://anormal.space`,
  },
  plugins: [
      
    'gatsby-plugin-react-helmet', 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `raleway`,
          `source sans pro\:300,400,800` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          ]
        }
      },         
          
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Anormal Space",
        short_name: "anormal  🌌",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#2196f3",
        display: "standalone",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-87464563-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    `gatsby-transformer-sharp`,
`gatsby-plugin-sharp`,
{
  resolve: "gatsby-source-wordpress",
  options: {
    /*
      * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
      * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
      */
    baseUrl: "api.anormal.space",
    // The protocol. This can be http or https.
    protocol: "http",
    // Indicates whether the site is hosted on wordpress.com.
    // If false, then the asumption is made that the site is self hosted.
    // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
    // If your site is hosted on wordpress.org, then set this to false.
    hostingWPCOM: false,
    // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
    // This feature is untested for sites hosted on Wordpress.com.
    // Defaults to true.
    useACF: true,
    auth: {
     
      // then add your clientId, clientSecret, username, and password here
     
      wpcom_user: "paul.cozma@sm-design.ro",
      wpcom_pass: "nnijJ*P*pS^pvHON",
    },
    // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
    // It can help you debug specific API Endpoints problems
    verboseOutput: false,
    // Search and Replace Urls across WordPress content
    searchAndReplaceContentUrls: {
      sourceUrl: "http://api.anormal.space",
      replacementUrl: "http://api.anormal.space",
    },
  },
},
  ],
};
