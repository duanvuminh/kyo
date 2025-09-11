export class Infor {
  constructor(public objectID: string, public content: string) {}
}

export interface InforPage {
  inforList: Infor[];
  nextPage?: string;
  limit: number;
}
