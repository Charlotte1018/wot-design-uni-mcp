/**
 * 简单的内存缓存工具类
 */
export class Cache<T extends Record<string, any>> {
  private cache: Map<keyof T, any>;

  constructor() {
    this.cache = new Map();
  }

  get<K extends keyof T>(key: K): T[K] | undefined {
    return this.cache.get(key);
  }

  set<K extends keyof T>(key: K, value: T[K]): void {
    this.cache.set(key, value);
  }

  has<K extends keyof T>(key: K): boolean {
    return this.cache.has(key);
  }

  delete<K extends keyof T>(key: K): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}

