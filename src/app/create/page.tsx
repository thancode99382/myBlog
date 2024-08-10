"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { db } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LayoutDefault from "@/components/layout/layoutDefault/LayoutDefault";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
  urlImg: z.string(),
});

export default function Create() {
  const router = useRouter();
  const notify = () => toast("Bạn đã tạo thành công");
  const notifyWarning = () => toast("Nội dung của bạn không đầy đủ ");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      urlImg: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if(values.title==""||values.description==""||values.content==""||values.urlImg==""){
      notifyWarning()
      return
    } 
    try {

      
      const docRef = await addDoc(collection(db, "blogs"), {
        title: values.title,
        description: values.description,
        content: values.content,
        urlImg: values.urlImg,
        createdAt: serverTimestamp(),
      });
      console.log("result from database" + docRef);
      notify()
      router.push("/news")
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    
    form.reset();
  }

  return (
    <div>
      <LayoutDefault>
        <div>
          <div className="font-bold text-2xl mb-6">Tạo blog</div>
          <div className=" ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 "
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tiêu đề </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập tiêu đề của bạn vào"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Miêu tả </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập miêu tả của bạn vào"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nội dung </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder=" Nhập nội dung của bản vào"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="urlImg"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link ảnh cho bài blog</FormLabel>
                      <FormControl>
                        <Input placeholder="Dán url ảnh vào" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Tạo</Button>
              </form>
            </Form>
          </div>
        </div>
      </LayoutDefault>
    </div>
  );
}
