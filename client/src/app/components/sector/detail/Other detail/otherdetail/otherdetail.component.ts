import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Other } from 'src/app/models/other';
import { FetchDataService } from 'src/app/services/fetchdata/fetch-data.service';
import { dataHandlerService } from 'src/app/services/data handler/data-handler';
import { PostdataService } from 'src/app/services/postdata/postdata.service';
import {Router} from "@angular/router"
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otherdetail',
  templateUrl: './otherdetail.component.html',
  styleUrls: ['./otherdetail.component.css']
})
export class OtherdetailComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private getPuestos: dataHandlerService,
    private http: FetchDataService,
    private post: PostdataService,
    private router: Router,
  ) { }


  paramsId: string;
  current: Other;
  other: FormGroup;

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.paramsId = params['id'];
      this.http.getOther(this.paramsId).subscribe((res) => {
        this.current = res

        this.other = new FormGroup({
          inventario: new FormControl(res.inventario),
          puesto: new FormControl(res.puesto),
          ubicacion: new FormControl(res.ubicacion),
          usuario: new FormControl(res.usuario),
          nombre: new FormControl(res.nombre),
          codigodebarras: new FormControl(res.codigodebarras),
          articulo: new FormControl(res.articulo),
          marca: new FormControl(res.marca),
          modelo: new FormControl(res.modelo),
          nrofactura: new FormControl(res.nrofactura),
          nroserie: new FormControl(res.nroserie),
          entregaplanilla: new FormControl(res.entregaplanilla),
          observaciones: new FormControl(res.observaciones)
        });

      })
    });

  }

    checkList(e: string) {
    let notShow = ['ubicacion', 'nombre', 'marca', 'modelo', 'inventario', 'nroserie', 'puesto', 'SectorId', 'id', 'createdAt', 'updatedAt', 'usuario', 'codigodebarras', 'observaciones']
    if (notShow.includes(e)) return false
    else return true
  }
  
  
  showinfo() {
    console.log(this.other)
  }

  editOther() {
    console.log(this.other.value)
    this.post.editOther(this.current.id, this.other.value).subscribe(res => console.log(res))
  }

  deleteOther() {

    Swal.fire({
      title: `Seguro que quieres eliminar ${this.current.nombre}?`,
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Si, eliminar ${this.current.nombre}`,
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire('Eliminado!', '', 'success')
        this.post.deleteOther(this.current.id).subscribe(res => this.router.navigate(['/home']))
      } 
    })

  }


  returnName(name: string) {
    if (name === 'articulo') return 'Nombre alternativo'
    if (name === 'entregaplanilla') return 'Entrega planilla para firmar'
    if (name === 'nrofactura') return 'N° de factura'
    return name
  }
}

