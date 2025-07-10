class ListNodeee<K, V> {
  key: K;
  val: V;
  next: ListNodeee<K, V> | null;

  constructor(key: K, val: V, next: ListNodeee<K, V> | null) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class Hashmap<K, V> {
  private buckets: Array<ListNodeee<K, V> | null>;
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.buckets = new Array(this.size).fill(null);
  }

  hash(key: K): number {
    const strK = String(key);
    let hash = 0;
    for (let i = 0; i < strK.length; i++) {
      hash += strK.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key: K, val: V): void {
    const index = this.hash(key);
    this.buckets[index] = new ListNodeee(key, val, null);
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const entry = this.buckets[index];
    if (entry && entry.key == key) {
      return entry.val;
    }
    return undefined;
  }
  remove(key: K) {
    const index = this.hash(key);
    const entry = this.buckets[index];

    if (entry && entry.key === key) {
      this.buckets[index] = null;
    }
  }

  display() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        console.log(i, this.buckets[i]);
      }
    }
  }
}

const map = new Hashmap(50);
map.set("Name", "Taofeek");
map.set("Department", "Physics");
console.log(map.get("Name"));
map.display();
map.remove("Name");
console.log("++++++");
map.display();
