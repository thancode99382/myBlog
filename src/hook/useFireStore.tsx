"use client"
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where, Query, WhereFilterOp } from "firebase/firestore";
import { db } from "../firebase/config";

interface Condition {
  fieldName: string;
  operator: WhereFilterOp;
  compareValue: any[];
}

interface DocumentData {
  id: string;
  [key: string]: any;
}

const useFireStore = (collectionName: string, condition?: Condition) => {
  const [documents, setDocuments] = useState<DocumentData[]>([]);

  useEffect(() => {
    let collectionRef: Query = collection(db, collectionName);

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }

      collectionRef = query(
        collectionRef,
        where(condition.fieldName, condition.operator, condition.compareValue)
      );
    }

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocuments(documents);
    });

    return () => unsubscribe();
  }, [collectionName, condition]);

  return documents;
};

export default useFireStore;
