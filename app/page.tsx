import { ChatWidget } from "@/components/chat-widget";
import { MdxWrapperStyle } from "@/components/mdx-wrapper-style";
import SchemeLinkGenerator from "@/components/scheme_link_generator";

export default function Page() {
  return (
    <MdxWrapperStyle>
      <ChatWidget />
      <SchemeLinkGenerator />
    </MdxWrapperStyle>
  );
}
