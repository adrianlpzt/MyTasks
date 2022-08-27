export class Task {

    id: string
    constructor(title:String, content:String){

        this.title=title;
        this.content=content;

    }

    title: String;
    content: String;
    isCompleted: Boolean=false;

}