import { Corona } from "./Corona";

export class patient{
  

    constructor( public Id:number,public Name:string,public LastName:string, public City:string,
      public Street:string,public Number:number, public DateOfBirth:Date
      ,public Phone:string,public CellPhone:string){
		
      }
}