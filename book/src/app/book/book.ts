import { Editorial } from "../editorial/editorial";

export class Book {
 id: number;
 name: string;
 isbn: string | number;
 description: string;
 image: string;
 publishingdate: any;
 editorial: Editorial;

  constructor(
    id: number,
    name: string,
    isbn: string | number,
    description: string,
    image: string,
    publishingdate: any,
    editorial: Editorial
  ) {
   this.id = id;
   this.name = name;
   this.isbn = isbn;
   this.description = description;
   this.image = image;
   this.publishingdate = publishingdate;
   this.editorial = editorial;
 }
}
