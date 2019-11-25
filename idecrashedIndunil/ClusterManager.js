module.exports = function() {
    this.clusters = [];

    this.clusters["c"] = {
        host: process.env.EndPoint_redisC,
        port: 6379,
        clusterModeEnabled: false
    };
};