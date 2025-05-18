// import { db } from "@/lib/firebase-admin";
// import { FieldValue } from "firebase-admin/firestore";

// export async function deleteFieldFromAllDocs() {
//   const snapshot = await db.collection("dictionary").get();

//   const batchSize = 500;
//   let batch = db.batch();
//   let opCount = 0;

//   for (const doc of snapshot.docs) {
//     batch.update(doc.ref, {
//       pronunciationWithSoundUrl: FieldValue.delete(),
//     });
//     opCount++;

//     if (opCount % batchSize === 0) {
//       await batch.commit();
//       batch = db.batch();
//     }
//   }

//   if (opCount % batchSize !== 0) {
//     await batch.commit();
//   }

//   console.log(`✅ Đã xóa field 'pronunciationWithSoundUrl' khỏi ${opCount} documents.`);
// }

// export const addKanjiToDatabase = (): void => {
//   for (const key in hantuList) {
//     const { hantu } = hantuList[key];
//     const wordDTO = {
//       words: key,
//       type: "kanji",
//       hantu: hantu,
//       content: null,
//     };
//     const docRef = db.collection("dictionary").doc(wordDTO.words);
//     docRef.set(wordDTO);
//   }
// };

// export const addGrammarToDatabase = (): void => {
//   grammarList.forEach((element) => {
//     const docRef = db.collection("dictionary").doc(element.words);
//     docRef.set(element);
//   });
// };
