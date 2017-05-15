import reduce from "ramda/src/reduce";
import keys from "ramda/src/keys";

const
    log = function (target) {
        return function (level) {
            return function (message) {
                return target[level](message)
            }
        }
    };

class Logger {
    constructor(target) {
        this.LOG_STATUS_FLAGS = reduce((p, v) => (Object.assign({}, p, { [v]: v })), {}, ["ERROR", "WARN", "INFO", "DEBUG", "SILLY"].map(x => x.toLowerCase()));
        this.target = target;
        reduce((p, v) => (Object.assign(p, { [v]: log(this.target)(v) })), this, keys(this.LOG_STATUS_FLAGS));
    }
};
// global.LOG_STATUS_FLAGS = LOG_STATUS_FLAGS;
// global.logger = logger;

module.exports = Object.assign({}, new Logger(console));