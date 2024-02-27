
var RandomizedSet = function() {
  this.arr = [];    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.arr.includes(val)) {
    return false;
  }
  
  this.arr.push(val);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  let index = this.arr.indexOf(val);
  if (index === -1) {
    return false;
  }
  
  this.arr.splice(index, 1);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let len = this.arr.length;
  let random = Math.floor(Math.random() * len);
  random = random % len;
  return this.arr[random];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */