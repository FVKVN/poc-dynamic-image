module.exports = {
    siteMetadata: {
        title: 'poc - dynamic images for de lijn',
        siteUrl: 'https://www.yourdomain.tld',
        description: 'POC voor een campagne van de Lijn',
        image: '/gatsby-icon.png',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: `${__dirname}/src/assets/svg/`,
                },
            },
        },
    ],
};
