function typeOf (obj) {
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
//Object.prototype.toString会返回"[object Type]"字符串