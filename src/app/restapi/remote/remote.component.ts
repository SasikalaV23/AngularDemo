import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
 users:any=[]
  constructor(private restapi:RestapiService) { }
 getAllUsers()
 {
  //this.restapi.getRemoteUsers().subscribe(function(data){
    //console.log(data)
    //this.users = data
    //console.log(this.users)
  //}, function(error){
    //console.log(error)
 // })

 this.restapi.getRemoteUsers().subscribe((response)=>
 {
   console.log(response)
   this.users=response
   console.log(this.users)
 })
 }
  ngOnInit() {
    this.getAllUsers()
  }

}
