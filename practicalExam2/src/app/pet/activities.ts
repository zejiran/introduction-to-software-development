export class Activity {
  id: number;
  name: string;
  date: Date;

  constructor(
    id: number,
    name: string,
    date: Date
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
  }
}
