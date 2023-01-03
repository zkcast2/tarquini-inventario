import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/app/models/phone';
import { FetchDataService } from 'src/app/services/fetchdata/fetch-data.service';
import { dataHandlerService } from 'src/app/services/data handler/data-handler';
import { PostdataService } from 'src/app/services/postdata/postdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-phonedetail',
  templateUrl: './phonedetail.component.html',
  styleUrls: ['./phonedetail.component.css']
})
export class PhonedetailComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private getPuestos: dataHandlerService,
    private http: FetchDataService,
    private post: PostdataService,
    private router: Router,
  ) { }


  paramsId: string;
  current: Phone;
  phone: FormGroup;

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.paramsId = params['id'];
      this.http.getPhone(this.paramsId).subscribe((res) => {
        this.current = res

        this.phone = new FormGroup({
          inventario: new FormControl(res.inventario),
          puesto: new FormControl(res.puesto),
          ubicacion: new FormControl(res.ubicacion),
          usuario: new FormControl(res.usuario),
          marca: new FormControl(res.marca),
          nromodelo: new FormControl(res.nromodelo),
          micro: new FormControl(res.micro),
          memoriainterna: new FormControl(res.memoriainterna),
          ram: new FormControl(res.ram),
          imei: new FormControl(res.imei),
          serie: new FormControl(res.serie),
          codigodebarras: new FormControl(res.codigodebarras),
          cfgcorreoempresa: new FormControl(res.cfgcorreoempresa),
          wpbusiness: new FormControl(res.wpbusiness),
          nrofactura: new FormControl(res.nrofactura),
          fechafactura: new FormControl(res.fechafactura),
          proveedor: new FormControl(res.proveedor),
          entregaplanilla: new FormControl(res.entregaplanilla),
          versionandroid: new FormControl(res.versionandroid),
          microsd: new FormControl(res.microsd),
          fuente: new FormControl(res.fuente),
          nro: new FormControl(res.nro),
          usuarioclaro: new FormControl(res.usuarioclaro),
          accesorios: new FormControl(res.accesorios),
          cfggmail: new FormControl(res.cfggmail),
          observaciones: new FormControl(res.observaciones)
        });

      })
    });

  }

  showinfo() {
    console.log(this.phone)
  }

  checkList(e: string) {
    let notShow = ['ubicacion', 'observaciones', 'puesto', 'usuario', 'marca', 'modelo', 'nromodelo', 'SectorId', 'id', 'createdAt', 'updatedAt', 'ram', 'imei', 'micro', 'inventario', ]
    if (notShow.includes(e)) return false
    else return true
  }

  editPhone() {
    this.post.editPhone(this.current.id, this.phone.value).subscribe(res => console.log(res))
  }
  

  deletePhone() {

    Swal.fire({
      title: `Seguro que quieres eliminar este telefono?`,
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Si, eliminar.`,
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire('Eliminado!', '', 'success')
        this.post.deleteOther(this.current.id).subscribe(res => this.router.navigate(['/home']))
      } 
    })

  }

  returnName(name: string) {
    if (name === 'accesorios') return 'Accesorios'
    if (name === 'cfgcorreoempresa') return 'Configuración correo empresa'
    if (name === 'cfggmail') return 'Configuración Gmail' 
    if (name === 'codigodebarras') return 'Código de barras'
    if (name === 'entregaplanilla') return 'Entrega planilla para firmar'
    if (name === 'fechafactura') return 'Fecha de factura'
    if (name === 'fuente') return 'Fuente'
    if (name === 'memoriainterna') return 'Memoria interna'
    if (name === 'microsd') return 'MicroSD'
    if (name === 'nro') return 'Número'
    if (name === 'nrofactura') return 'N° Factura'
    if (name === 'proveedor') return 'Proveedor'
    if (name === 'serie ') return 'N° de serie'
    if (name === 'usuarioclaro') return 'Usuario Claro'
    if (name === 'versionandroid') return 'Version android'
    if (name === 'wpbusiness') return 'Whatsapp Business'
    return name
  }


}
