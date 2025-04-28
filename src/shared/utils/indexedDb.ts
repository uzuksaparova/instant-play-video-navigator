const dbName = "videoDB";
const storeName = "videos";

const openDB = async () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBRequest).result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      resolve((event.target as IDBRequest).result);
    };

    request.onerror = () => {
      reject(new Error("Failed to open IndexedDB"));
    };
  });
};

// Store a video as Blob in IndexedDB
export const storeVideo = async (id: string, videoBlob: Blob) => {
  const db = await openDB();
  const transaction = db.transaction(storeName, "readwrite");
  const store = transaction.objectStore(storeName);
  store.put({ id, videoBlob });

  return new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () =>
      reject(new Error("Failed to store video in IndexedDB"));
  });
};

// Retrieve a video from IndexedDB
export const getVideo = async (id: string) => {
  const db = await openDB();
  const transaction = db.transaction(storeName, "readonly");
  const store = transaction.objectStore(storeName);
  const request = store.get(id);

  return new Promise<Blob | null>((resolve, reject) => {
    request.onsuccess = () => resolve(request.result?.videoBlob || null);
    request.onerror = () => reject(new Error("Failed to retrieve video"));
  });
};
