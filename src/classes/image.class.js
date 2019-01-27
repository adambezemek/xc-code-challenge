
class Image {
  constructor (opts) {
    this._vm = {}

    Object.assign(this, opts)
  }

  get src () {
    return `assets/images/${this.filename}.png`
  }
}

export default Image
