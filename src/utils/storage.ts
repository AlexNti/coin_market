interface StorageShape {
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
  setItem: (key: string, item: string) => void;
  clear: () => void;
}

class Storage {
  storageInstance: StorageShape;

  constructor(storageInstance: StorageShape) {
    this.storageInstance = storageInstance;
  }

  write(key: string, data: any) {
    const storedShape = data instanceof Object ? JSON.stringify(data) : data;
    this.storageInstance.setItem(key, storedShape);
  }

  read<T = string>(key: string): T | null {
    const data = this.storageInstance.getItem(key);
    if (data === null) {
      return null;
    }

    try {
      return JSON.parse(this.storageInstance.getItem(key) || '') as T;
    } catch (e) {
      return data as unknown as T;
    }
  }

  delete(key: string) {
    this.storageInstance.removeItem(key);
  }

  clear() {
    this.storageInstance.clear();
  }
}

const local = new Storage(localStorage);
const session = new Storage(sessionStorage);

const storage = { local, session };

export default storage;
