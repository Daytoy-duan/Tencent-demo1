const amapfile = require('./amap-wx')

// 实例化
const map = new amapfile.AMapWX({
    key: "f805fb9cdcbfe3a496c3b70a764fe02c"
});

module.exports = {
    map
}