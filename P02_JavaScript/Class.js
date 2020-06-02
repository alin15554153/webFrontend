class test {
    constructor(){
        this.num = 1
        this.getters = {}
        Object.defineProperty(this.getters, 'prop', {
            get: () => this.num *2
        })
    }
}
// export default test
