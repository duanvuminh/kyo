"use client";
import { CenterMessage } from "@/component/center-message";
import { Button } from "@/component/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/component/ui/tabs";
import { useEditBox } from "@/feature/update-content/component/edit-box/use-edit-box";
import Markdown from "react-markdown";

export function EditBox() {
  const { words, value, handleChange, handleSubmit } = useEditBox();

  return words ? (
    <>
      <h1>{words}</h1>
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
    </>
  ) : (
    <CenterMessage>
      Nội dung hiện tại không tồn tại
      <br />
      Bạn hãy thử lại sau
    </CenterMessage>
  );
}
