import { AudioPlayer } from "@/components/audio-player";
import { SvgFromUrl } from "@/components/svg-from-url";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent } from "@/components/ui/card";
import { svgURLFromWord } from "@/lib/dictionary";
import {
  ArrowBigRight,
  Eye,
  Pencil,
  Play,
  RefreshCcw,
  Trash,
} from "lucide-react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const word = decodeURI(id);
  // const practice = await getPractice(word);
  return (
    <div className="prose px-2 mx-auto">
      <Card>
        <CardContent className="flex justify-center items-center h-64">
          <SvgFromUrl url={svgURLFromWord(word)} />
        </CardContent>
        <CardAction className="flex justify-end px-2">
          <Button variant="ghost" className="text-muted">
            <ArrowBigRight />
          </Button>
          <Button variant="ghost" className="text-muted">
            <Play />
          </Button>
          <Button variant="ghost" className="text-muted">
            <Eye />
          </Button>
          <Button variant="ghost" className="text-muted">
            <Pencil />
          </Button>
          <AudioPlayer text={word} />
          <Button variant="ghost" className="text-muted">
            <RefreshCcw />
          </Button>
          <Button variant="ghost" className="text-muted">
            <Trash />
          </Button>
        </CardAction>
      </Card>
    </div>
  );
}
