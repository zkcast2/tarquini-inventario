import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dataHandlerService } from 'src/app/services/data handler/data-handler';
import { PostdataService } from 'src/app/services/postdata/postdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dataHandler: dataHandlerService,
    private post: PostdataService,
    private modalService: NgbModal) { }


  test: any[]
  sector: FormGroup;
  
  ngOnInit(): void {

    this.sector = new FormGroup({
      sectorName: new FormControl(''),
    });

  }

  getAllElements() {
    this.dataHandler.getAllElements()
  }

  cleanFilters() {
    this.dataHandler.cleanFilter()
  }

  handleModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  createSector() {
    this.post.createSector(this.sector.value.sectorName).subscribe(res =>{ console.log(res); this.dataHandler.setAllSectores()})
    ;

  }

  public handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.value.length === 0) {
      this.dataHandler.cleanFilter()
    } else { 
      this.dataHandler.filterByLetters(input.value) }

  }

}
