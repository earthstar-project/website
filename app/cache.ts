import LRU from "lru-cache";

declare global {
  var cache: LRU<string, any>;
}

let cache: LRU<string, any>;

if (process.env.NODE_ENV === "production") {
  cache = new LRU({
    maxAge: 1000 * 60 * 60,
  });
} else {
  if (!global.cache) {
    global.cache = new LRU({
      maxAge: 1000 * 10,
    });
  }
  cache = global.cache;
}

export default cache;
