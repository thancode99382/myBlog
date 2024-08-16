"use client";
import LayoutDefault from "@/components/layout/layoutDefault/LayoutDefault";
import { db } from "@/firebase/config";
import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  content: string;
  id: string;
  urlImg:string
  [key: string]: any;
}

export default function ViewDetail({ params }: { params: { id: string } }) {
  const [document, setDocument] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params.id) {
      setError("Invalid ID");
      return; // Exit early if no valid ID
    }

    const docRef = doc(db, "blogs", params.id);

    const unsubscribe = onSnapshot(
      docRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          setDocument({
            ...docSnapshot.data(),
            id: docSnapshot.id,
          } as Blog);
          setError(null); // Clear any previous errors
        } else {
          setDocument(null);
          setError("No document found with the given ID.");
        }
      },
      (error) => {
        console.error("Error fetching document:", error);
        setDocument(null);
        setError("Error fetching document.");
      }
    );

    // Cleanup function to unsubscribe from Firestore listener
    return () => unsubscribe();
  }, [params.id]);

  return (
    <div>
      <LayoutDefault>
        <div className="flex md:mx-36">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : document ? (
            <div>
              <div className="mb-6 font-bold text-2xl">{document.title}</div>
           <img src={document.urlImg} className="rounded-2xl my-6" alt="" /> 
              <div>{document.content}</div>
            </div>
          ) : (
            <div className="three-body h-screen">
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
</div>
          )}
        </div>
      </LayoutDefault>
    </div>
  );
}
