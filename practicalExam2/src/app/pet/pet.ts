import { Activity } from './activities';

export class Pet {
  id: number;
  name: string;
  image: string;
  likes: number;
  activities: Activity[];

  constructor(
    id: number,
    name: string,
    image: string,
    likes: number,
    activities: Activity[]
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.likes = likes;
    this.activities = activities;
  }
}
