"use client";
import { CenterMessage } from "@/components/center-message";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/stores/hook";
import { selectContent, selectWord } from "@/stores/slice-message";
import { useState } from "react";
import Markdown from "react-markdown";
import { toast } from "sonner";

export function EditBox() {
  const words = useAppSelector(selectWord);
  const content = useAppSelector(selectContent);
  const [value, setValue] = useState(content);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = async () => {
    const res = await fetch("/api/update-content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ words, content: value }),
    });

    const result = (await res.json()) as {
      success: boolean;
    };
    if (result.success) {
      toast("Cảm ơn bạn đã chỉnh sửa góp ý đã được xử lý.");
    }
  };
  return words ? (
    <Tabs defaultValue="account" className="prose mx-auto">
      <TabsContent value="account">
        <textarea
          className="w-full border-none focus:border-none focus:outline-none focus:ring-0 pt-2 px-1 min-h-screen"
          value={value}
          onChange={handleChange}
        ></textarea>
      </TabsContent>
      <TabsContent value="password">
        <div className="px-1 min-h-screen">
          <Markdown>{value}</Markdown>
        </div>
      </TabsContent>
      <TabsList className="sticky bottom-8 flex gap-2 px-1 w-full">
        <TabsTrigger value="account">Viết</TabsTrigger>
        <TabsTrigger value="password">Xem trước</TabsTrigger>
        <div className="flex-grow" />
        <Button variant="ghost" onClick={handleSubmit}>
          Gửi
        </Button>
      </TabsList>
    </Tabs>
  ) : (
    <CenterMessage>
      Nội dung hiện tại không tồn tại
      <br />
      Bạn hãy thử lại sau
    </CenterMessage>
  );
}
