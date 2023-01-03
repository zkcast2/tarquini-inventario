import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dataHandlerService } from 'src/app/services/data handler/data-handler';
import { PostdataService } from 'src/app/services/postdata/postdata.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { Computer } from 'src/app/models/computer';
import { newComputer } from 'src/app/models/newcomputer';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {


  @ViewChild('detail', { static: true }) detail: ElementRef;

  @ViewChild('createComputer', { static: true }) createComputer: ElementRef;

  @ViewChild('createPhone', { static: true }) createPhone: ElementRef;

  @ViewChild('createOther', { static: true }) createOther: ElementRef;


  constructor(
    private route: ActivatedRoute,
    private getPuestos: dataHandlerService,
    private modalService: NgbModal,
    private post: PostdataService,
    private router: Router) { }




  paramsId: string;
  public sector: any;
  public selected: any;
  public sectorlength: number;
  public newComputer: FormGroup
  public newPhone: FormGroup
  public newOther: FormGroup


  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.paramsId = params['sector'];
      this.getPuestos.setSector(this.paramsId);
      this.getPuestos.getSector$.subscribe((res) => { this.sector = res; this.sectorlength })
    });

    this.newComputer = new FormGroup({
      inventario: new FormControl('PC/Computadora'),
      ubicacion: new FormControl(''),
      usuario: new FormControl(''),
      mother: new FormControl(''),
      microprocesador: new FormControl(''),
      ram: new FormControl(''),
      disco: new FormControl(''),
      codigodebarras: new FormControl(''),
      os: new FormControl('')
    })

    this.newPhone = new FormGroup({
      inventario: new FormControl('telefono'),
      ubicacion: new FormControl(''),
      usuario: new FormControl(''),
      marca: new FormControl(''),
      nromodelo: new FormControl(''),
      micro: new FormControl(''),
      ram: new FormControl(''),
      imei: new FormControl(''),
      codigodebarras: new FormControl(''),
    })

    this.newOther = new FormGroup({
      inventario: new FormControl('otro'),
      nombre: new FormControl(''),
      usuario: new FormControl(''),
      ubicacion: new FormControl(''),
      marca: new FormControl(''),
      modelo: new FormControl(''),
      nroserie: new FormControl(''),
      codigodebarras: new FormControl(''),
    })

  }


  handleModal(content: any) {
    // console.log(element)
    // this.selected = element
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  testType(e: any) {
    return e == 'caracteristicas'
  }

  showInfo() {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  countItems() {

    if (this.sector.Computers || this.sector.Phones || this.sector.Others) {
      let total = [...this.sector.Computers, ...this.sector.Phones, ...this.sector.Others]
      return total.length
    } else { return 0 }

  }

  deleteSector() {
    Swal.fire({
      title: `Seguro que quieres eliminar el sector ${this.sector.nombre}?`,
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Si, eliminar ${this.sector.nombre}`,
    }).then((result) => {
      if (result.isDenied) {
        this.post.deleteSector(this.sector.id).subscribe(res => console.log(res))
        Swal.fire('Eliminado!', '', 'success')
        this.router.navigate(['/home']);
      }
    })
  }


  postNewComputer() {
    this.post.createComputer(this.newComputer.value, this.paramsId).subscribe((res) => {
      this.modalService.dismissAll(this.detail);
      this.router.navigate([`/detail/${res.newComputer.id}`]);
    })
  }


  postNewPhone() {
    this.post.createPhone(this.newPhone.value, this.paramsId).subscribe((res) => {
      this.modalService.dismissAll(this.detail);
      this.router.navigate([`/phonedetail/${res.newPhone.id}`]);
    })
  }

  postNewOther() {
    console.log(this.newOther.value)
    this.post.createOther(this.newOther.value, this.paramsId).subscribe((res) => {

      this.modalService.dismissAll(this.detail);
      this.router.navigate([`/otherdetail/${res.newOther.id}`]);
    })
  }
}
