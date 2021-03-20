module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Food Store',
    themeColor: "#333",
    iconPaths: {
      favicon32: './public/img/food_icons/favicon-32x32-dunplab-manifest-34510.png',
      favicon16: './public/img/food_icons/favicon-16x16-dunplab-manifest-34510.png',
      appleTouchIcon: './public/img/food_icons/apple-icon-152x152-dunplab-manifest-34510.png',
      msTileImage: './public/img/food_icons/apple-icon-144x144-dunplab-manifest-34510.png'
    },
    manifestOptions: {
      background_color: "#fff",
      icons: [
        {
          src: "./public/img/food_icons/android-icon-192x192-dunplab-manifest-34510.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./public/img/food_icons/apple-icon-152x152-dunplab-manifest-34510.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "./public/img/food_icons/android-icon-192x192-dunplab-manifest-34510.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "./public/img/food_icons/apple-icon-152x152-dunplab-manifest-34510.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    }
  }
}
