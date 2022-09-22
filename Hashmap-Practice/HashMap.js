class HashMap {
  constructor(size = 10) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    const map = this.keyMap;
    const hash = this._hash(key);
    if (map[hash]) {
      map[hash].push([key, value]);
    } else {
      map[hash] = [[key, value]];
    }
    return true;
  }
  get(key) {
    const map = this.keyMap;
    const hash = this._hash(key);
    if (!map[hash]) return undefined;
    else if (map[hash].length === 1) return map[hash][0];
    // else return map[hash].find((kv) => kv[0] === key);
    else {
      for (let i = 0; i < map[hash].length; i++) {
        if (map[hash][i][0] === key) {
          return map[hash][i][1];
        }
      }
    }
  }
  keys() {
    const map = this.keyMap;
    const keys = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i]) {
        for (let j = 0; j < map[i].length; j++) {
          keys.push(map[i][j][0]);
        }
      }
    }
    return keys;
  }
  values() {
    const map = this.keyMap;
    const values = [];

    for (let i = 0; i < map.length; i++) {
      if (map[i]) {
        for (let j = 0; j < map[i].length; j++) {
          let includes = false;
          for (let k = 0; k < values.length; k++) {
            if (map[i][j][1] === values[k]) {
              includes = true;
            }
          }
          !includes && values.push(map[i][j][1]);
        }
      }
    }

    return values;
  }
}

const map = new HashMap();

map.set("maroon", "1");
map.set("yellow", "2");
map.set("olive", "2");
map.set("salmon", "5");
map.set("lightcoral", "5");
map.set("mediumvioletred", "6");
map.set("plum", "5");
// map.set("plum", "69");

console.log(map.keys());
