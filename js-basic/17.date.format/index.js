

Date.prototype.format = function (formatStr) {

    this.$y = this.getFullYear()
    this.$M = this.getMonth()
    this.$D = this.getDate()
    this.$W = this.getDay()
    this.$H = this.getHours()
    this.$m = this.getMinutes()
    this.$s = this.getSeconds()
    this.$ms = this.getMilliseconds()

    const str = formatStr || new Date()
    const { $H, $m, $M } = this

    const padStart = (string, length, pad) => {
        const s = String(string)
        if (!s || s.length >= length) return string
        return `${Array((length + 1) - s.length).join(pad)}${string}`
    }

    const get$H = num => (
        padStart($H % 12 || 12, num, '0')
    )

    const matches = {
        YY: String(this.$y).slice(-2),
        YYYY: padStart(this.$y, 4, '0'),
        M: $M + 1,
        MM: padStart($M + 1, 2, '0'),
        D: this.$D,
        DD: padStart(this.$D, 2, '0'),
        d: String(this.$W),
        H: String($H),
        HH: padStart($H, 2, '0'),
        h: get$H(1),
        hh: get$H(2),
        m: String($m),
        mm: padStart($m, 2, '0'),
        s: String(this.$s),
        ss: padStart(this.$s, 2, '0'),
        SSS: padStart(this.$ms, 3, '0'),
    }
    const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
    return str.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match])
}

console.log(new Date().format('YYYY/MM/DD HH:mm:ss'))