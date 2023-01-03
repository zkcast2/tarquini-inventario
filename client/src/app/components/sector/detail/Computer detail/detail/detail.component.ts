import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetchdata/fetch-data.service';
import { dataHandlerService } from 'src/app/services/data handler/data-handler';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; 
import { Computer } from 'src/app/models/computer';
import { PostdataService } from 'src/app/services/postdata/postdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  @ViewChild('programa', { static: true }) programa: ElementRef;

  constructor(
    private route: ActivatedRoute, 
    private getPuestos: dataHandlerService, 
    private http: FetchDataService,
    private post: PostdataService,
    private router: Router,
    private formbuilder: FormBuilder
    ) { }

  paramsId: string;
  current: Computer;
  computer: FormGroup;
  programas: string[] = ['Google Chrome', '7zip', 'Adobe Acrobat', 'UltraVNC', 'TeamViewer', 'AnyDesk', 'Zoom', 'Windows Defender', 'Microsoft Office', 'Libre Office']
  programasMixed: string[];

  async ngOnInit(): Promise<void> {

    this.route.params.subscribe(async (params) => {
      this.paramsId = params['id'];

      this.http.getComputer(this.paramsId).subscribe((res) => {
        this.current = res

        this.computer = new FormGroup({
          accesodirectosv: new FormControl(res.accesodirectosv),
          actualizacionso: new FormControl(res.actualizacionso),
          actualizacionwin: new FormControl(res.actualizacionwin),
          backuplocal: new FormControl(res.backuplocal),
          camaraweb: new FormControl(res.camaraweb),
          cfgcarpetasadrive: new FormControl(res.cfgcarpetasadrive),
          cfgcorreo: new FormControl(res.cfgcorreo),
          codigodebarras: new FormControl(res.codigodebarras),
          disco: new FormControl(res.disco),
          entregaplanilla: new FormControl(res.entregaplanilla),
          filestream: new FormControl(res.filestream),
          grupolicencia: new FormControl(res.grupolicencia),
          grupotrabajo: new FormControl(res.grupotrabajo),
          habilitaradministrador: new FormControl(res.habilitaradministrador),
          idproducto: new FormControl(res.idproducto),
          impresora: new FormControl(res.impresora),
          licenciawinoffice: new FormControl(res.licenciawinoffice),
          microprocesador: new FormControl(res.microprocesador),
          mother: new FormControl(res.mother),
          nombreequipo: new FormControl(res.nombreequipo),
          nrofacturacompra: new FormControl(res.nrofacturacompra),
          observaciones: new FormControl(res.observaciones),
          os: new FormControl(res.os),
          passwifiubuntu: new FormControl(res.passwifiubuntu),
          programas: new FormControl(res.programas),
          puesto: new FormControl(res.puesto),
          ram: new FormControl(res.ram),
          reglicplanillacontrol: new FormControl(res.reglicplanillacontrol),
          serie: new FormControl(res.serie),
          ubicacion: new FormControl(res.ubicacion),
          usuario: new FormControl(res.usuario),
          usuariolinux: new FormControl(res.usuariolinux),
          usuariowindows: new FormControl(res.usuariowindows),
        });

        this.programasMixed = [...new Set([...res.programas, ...this.programas])] 
       
      })
    });


  }

  checkList(e: string) {
    let notShow = ['SectorId', 'createdAt', 'disco', 'id', 'inventario', 'microprocesador', 'mother', 'os', 'puesto', 'ram', 'ubicacion', 'updatedAt', 'usuario', 'observaciones', 'programas']
    if (notShow.includes(e)) return false
    else return true
  }

  editComputer() {
    this.post.editComputer(this.current.id, this.computer.value).subscribe(res => console.log(res))
  }

  handlePrograma(Programa:string) {

    if (this.programasMixed.some(e => e.toLowerCase() === Programa.toLowerCase())) {
      {return alert(`Ya existe ${Programa} en la lista`)}
    } else {
      this.post.editComputer(this.current.id, {programas: [...this.current.programas, Programa]}).subscribe(res => {
        // this.http.getComputer(this.paramsId).subscribe(ress => {
        //   this.current = ress;
        //   this.programasMixed = [...new Set([...ress.programas, ...this.programas])]
        // })
        this.ngOnInit()
      });
    }
  }

  handleCheck(Programa: string) {

    if (this.current.programas.some((e:string) => e.toLowerCase() === Programa.toLowerCase())) {
      let filter = this.current.programas.filter((e:string) => e !== Programa);
      this.post.editComputer(this.current.id, {programas: filter}).subscribe(res => {
        this.ngOnInit()
      })
    } else {

      this.post.editComputer(this.current.id, {programas: [...this.current.programas, Programa]}).subscribe(res => {
        this.ngOnInit()
      })
    }
  }

  showInfo() {
    console.log(this.computer.value)
  }

  deleteComputer() {

    Swal.fire({
      title: `Seguro que quieres eliminar este telefono?`,
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Si, eliminar.`,
    }).then((result) => {
      if (result.isDenied) {
        this.post.deleteComputer(this.current.id).subscribe(res => {
          Swal.fire('Eliminado!', '', 'success');
          this.router.navigate([`sectores/${this.current.SectorId}`])
        }
    )} 
    })

  }

  returnName(name: string) {
    if (name === 'accesodirectosv') return 'Acceso directo a servidor'
    if (name === 'actualizacionso') return 'Actualización S.O.'
    if (name === 'actualizacionwin') return 'Actualización Windows'
    if (name === 'backuplocal') return 'Backup local'
    if (name === 'camaraweb') return 'Camara Web'
    if (name === 'cfgcarpetasadrive') return 'Config. carpetas locales a drive'
    if (name === 'cfgcorreo') return 'Configuración correo'
    if (name === 'codigodebarras') return 'Código de barras'
    if (name === 'entregaplanilla') return 'Entrega planilla para firmar'
    if (name === 'filestream') return 'Instalar File Stream de drive'
    if (name === 'grupolicencia') return 'Grupo licencia'
    if (name === 'grupotrabajo') return 'Grupo de trabajo'
    if (name === 'habilitaradministrador') return 'Habilitar administrador'
    if (name === 'idproducto')return 'ID Producto'
    if (name === 'impresora')return 'Impresora instalada'
    if (name === 'licenciawinoffice')return 'Clave licencia Windows/Office'
    if (name === 'nombreequipo')return 'Nombre del equipo'
    if (name === 'nrofacturacompra')return 'N° factura de compra'
    if (name === 'passwifiubuntu')return 'Eliminar password de wifi Ubuntu'
    if (name === 'reglicplanillacontrol')return  'Registrar Lic. planilla control'
    if (name === 'serie')return 'N° de serie'
    if (name === 'usuariolinux')return 'Usuario de Linux'
    if (name === 'usuariowindows')return 'Usuario de Windows'

    return name

  }
  
}

