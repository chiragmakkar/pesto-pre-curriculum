const describe = (desc, fn) => {
    console.log(desc)
    fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
    toBe: (assertion) => {
        console.log(`Expected - ${exp} | Got - ${assertion}`)
        if (exp === assertion) {
            console.log('pass')
            return true
        } else {
            console.log('fail')
            return false
        }
    }
})

const expect = (value) => matchers(value)
  
module.exports = {
    describe,
    expect,
    it,
    matchers
}