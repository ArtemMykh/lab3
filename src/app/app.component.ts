import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {title:"Zieit", text: "Zaporizhzhia Institute of Economics and Information Technologies (ZIEIT) is a private institute of higher education in the city of Zaporizhzhia, Ukraine, with branches in the cities of Melitopol and Kryvyi Rih.", id: 1},
    {title:"React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 2},
    {title:"Angular", text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.", id: 3},
    {title:"Vue", text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces", id: 4},
    {title:"Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 5}
  ]
    updatePosts (event: Post){
  
    this.posts.unshift(event)
    }
    removeIdPost(id:number) {
this.posts = this.posts.filter((item)=>item.id!=id)
}
  }
export  interface  Post {
  title: string
  text: string
  id?: number
  }
