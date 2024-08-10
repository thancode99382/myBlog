"use client";
import LayoutDefault from "@/components/layout/layoutDefault/LayoutDefault";
import CardBlog from "@/components/news/CardBlog";
import { db } from "@/firebase/config";
import {
  collection,
  DocumentData,
  onSnapshot,
  Query,
} from "firebase/firestore";


import React, { useEffect, useState } from "react";

export default function News() {
  const [documents, setDocuments] = useState<DocumentData[]>([]);

  useEffect(() => {
    const collectionRef: Query = collection(db, "blogs");

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocuments(documents);
    });

    // Cleanup function to unsubscribe from Firestore listener
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <LayoutDefault>
        
        <div className="flex flex-wrap gap-2 justify-center mt-10">
          {documents.length > 0 ? (
            documents.map((item) => (
              <CardBlog
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                content={item.content}
                urlImg={item.urlImg}
                // Pass additional props if needed
              />
            ))
          ) : (
            <div className="font-semibold text-lg ">Thêm blog thú vị</div>
          )}
        </div>
      </LayoutDefault>
    </div>
  );
}
