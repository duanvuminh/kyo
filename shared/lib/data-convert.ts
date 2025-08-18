export function mapDocs<T>(
  snapshot: FirebaseFirestore.QuerySnapshot,
  mapFn: (doc: FirebaseFirestore.QueryDocumentSnapshot) => T
): T[] {
  return snapshot.docs.map(mapFn);
}

export function mapDatas<I, T>(data: I[], mapFn: (doc: I) => T): T[] {
  return data.map(mapFn);
}

export function mapSingleData<I, T>(data: I, mapFn: (doc: I) => T): T {
  return mapFn(data);
}
