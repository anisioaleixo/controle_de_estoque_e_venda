import {Request,Response} from 'express';

export class UserController{
    show(req:Request,res:Response){
        return res.send("Hello Word do controller");
    }
    showById(){}
    create(){}
    update(){}
    delete(){}
}