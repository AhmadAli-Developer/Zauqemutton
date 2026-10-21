const fs = require("fs");

// On Windows FAT32/exFAT drives, readlink on regular files throws EISDIR instead of EINVAL.
// Webpack expects EINVAL for non-symlinks, so we normalize EISDIR/UNKNOWN to EINVAL.
const origReadlink = fs.readlink;
const origReadlinkSync = fs.readlinkSync;

if (origReadlink) {
  fs.readlink = function (path, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    return origReadlink.call(fs, path, options, (err, linkString) => {
      if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
        const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
        e.code = "EINVAL";
        e.errno = -4071;
        e.syscall = "readlink";
        e.path = path;
        return callback(e);
      }
      return callback(err, linkString);
    });
  };
}

if (origReadlinkSync) {
  fs.readlinkSync = function (path, options) {
    try {
      return origReadlinkSync.call(fs, path, options);
    } catch (err) {
      if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
        const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
        e.code = "EINVAL";
        e.errno = -4071;
        e.syscall = "readlink";
        e.path = path;
        throw e;
      }
      throw err;
    }
  };
}

if (fs.promises && fs.promises.readlink) {
  const origPromisesReadlink = fs.promises.readlink;
  fs.promises.readlink = async function (path, options) {
    try {
      return await origPromisesReadlink.call(fs.promises, path, options);
    } catch (err) {
      if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
        const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
        e.code = "EINVAL";
        e.errno = -4071;
        e.syscall = "readlink";
        e.path = path;
        throw e;
      }
      throw err;
    }
  };
}
