module.exports = {
    transpileDependencies: ['vuetify'],
    css: {
        loaderOptions: {
            scss: {
                // Here we can use the newer SCSS flavor of Sass.
                // Note that there *is* a semicolon at the end of the below line
                additionalData: `@import "@/assets/scss/_variables.scss";`
            }
        }
    }
};
