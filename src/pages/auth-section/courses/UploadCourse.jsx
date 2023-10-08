import {
  getFirestore,
  collection,
  addDoc,
  writeBatch,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../middleware/firebase";

const dummyCourses = [
  // same as your data structure
];

const uploadCourses = async () => {
  const batch = writeBatch(db);

  for (const course of dummyCourses) {
    const courseRef = await addDoc(collection(db, "courses"), {
      title: course.title,
      description: course.description,
      createdBy: course.createdBy,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      courseType: course.courseType,
    });

    for (const module of course.modules) {
      const moduleData = {
        title: module.title,
        index: module.index,
        type: module.type,
        courseId: courseRef.id, // Reference to parent course
      };
      batch.set(collection(db, "modules"), moduleData);

      for (const content of module.contents) {
        const contentData = {
          title: content.title,
          index: content.index,
          type: content.type,
          content: content.content,
          exerciseInfo: content.exerciseInfo,
          moduleId: moduleData.id, // Reference to parent module
        };
        batch.set(collection(db, "contents"), contentData);
      }
    }
  }

  await batch.commit();
};

uploadCourses()
  .then(() => {
    console.log("Courses uploaded successfully");
  })
  .catch((error) => {
    console.log("Error uploading courses:", error);
  });
