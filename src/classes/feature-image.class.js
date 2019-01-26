
class FeatureImage {
  constructor(opts) {
    this._vm = {};

    Object.assign(this, opts);
  }

  get imgSrc() {
    return `assets/images/${this.image.filename}.png`;
  }
}

export default FeatureImage;
