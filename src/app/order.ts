import { Dishs } from "./dishs"
import { Tables } from "./table"

export interface Orders {

   dateOrder:any,
   nbPlace:any,
   idUser:any,
   status:any
   tables:Tables,
   dish:Dishs[]



}