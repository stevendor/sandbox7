export class User {
    public _id: string;
    public name: string;
    public telefon: number;
    public activ: boolean;

    constructor(_id: string, name: string, telefon: number, activ: boolean) {
        this.name = name;
        this.telefon = telefon;
        this.activ = activ;
        this._id = _id;
    }
}
