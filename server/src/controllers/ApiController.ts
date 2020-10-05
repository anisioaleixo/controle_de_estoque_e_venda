import {Request,Response} from 'express';

export class ApiController{
    index(req:Request,res:Response){
        return res.send("Hello Word do controller");
    }
}