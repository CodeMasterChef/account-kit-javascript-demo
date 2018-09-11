const config = {
    production: {
        port : 3333,
        address: '0.0.0.0'
    },
    default: {
        port : 3333,
        address: 'localhost'
    }
}

module.exports = config[process.env.NODE_ENV] || config.default;