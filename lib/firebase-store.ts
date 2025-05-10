export function mapDocs<T>(
  snapshot: FirebaseFirestore.QuerySnapshot,
  mapFn: (doc: FirebaseFirestore.QueryDocumentSnapshot) => T
): T[] {
  return snapshot.docs.map(mapFn);
}
