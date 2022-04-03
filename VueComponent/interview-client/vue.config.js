const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        watchOptions: {
            aggregateTimeout: 500,
            poll: 5000,
            ignored: '/node_modules/'
        }
    }
});
