class Sorter {
  constructor() {
    this.arr = [];
    this.compare = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
     return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {

    indices.sort( (a, b) => a - b );

    let compareIndexes = [];

    for (let i = 0; i < indices.length; i++) {
      compareIndexes.push(this.arr[indices[i]]);
    }

    compareIndexes.sort(this.compare);

    for (let i = 0; i < indices.length; i++) {

      this.arr.splice(indices[i], 1, compareIndexes[i]);
    }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;