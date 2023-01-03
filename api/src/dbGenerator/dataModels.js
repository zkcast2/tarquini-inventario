const computer = {
    puesto: '',
    inventario: 'PC/Notebook',
    ubicacion: ['E', 'B', 'C', 'D', 'F'],
    usuario: ['Leandro Fernandez', 'Laura Martinez', 'Jhon Doe', 'Juan Rodriguez', 'Andrea Justkchent', 'Ramiro Gashturt', 'George Dash', 'Curtis Lopez'],
    mother: ['Asus', 'Logitech', 'Asrock', 'Biostar', 'ECS', 'Gigabyte'],
    microprocesador: ['i3 7100 3.9', 'i5 3492 2.4', 'i7 9593 3.4', 'AMD 203m 2.4', 'AMD 20a', 'Celeron 2.0 f30'],
    disco: ['Kingston SSD 120GB', 'Kingston SSD 256gb', 'Kingston HDD 1TB', 'Kingston SSD 128GB'],
    ram: ['4GB', '8GB', '16GB', '32GB'],
    serie: ['200000', '&', '999999'],
    codigodebarras: ['1293284824', '&', '12932848249'],
    os: ['Windows 10 Pro', 'Ubuntu 22.04', 'Windows 7 Pro', 'Windows 8 Pro'],
    grupolicencia: ['1923', '&', '9999'],
    idproducto: ['10000000000000000', '&', '100000000000000999'],
    programas: [
        ['Google Chrome', '7zip', 'Adobe Acrobat', 'UltraVNC', 'TeamViewer', 'AnyDesk', 'Zoom', 'Windows Defender', 'Microsoft Office', 'Libre Office'],
        ['Google Chrome', '7zip', 'Adobe Acrobat', 'UltraVNC', 'TeamViewer', 'Zoom', 'Essentials antivirus', 'Photoshop'],
        ['TeamViewer', 'Zoom', 'Office 2018', 'Photoshop'],
        ['TeamViewer', 'Zoom', 'NOD32', 'Adobe Illustrator'],
        ['Counter Strike', 'Adobe Acrobat', 'NOD32', 'Adobe Illustrator'],
        ['Brave browser', 'Zoom', 'VLC Player']
    ],

    impresora: ['HP 400 (SHOWROOM) CANON LBP6680 VENTA EXT', 'Hp 2005 AS92', 'HP 93454fb', 'Brother 23293L', '', ''],
    grupotrabajo: ['MOLINOS'],
    nombreequipo: ['1E00039'],
    usuariowindows: ['ADMIN / Leandro / USUARIO', 'Administrador', 'Florencia', 'Fernandez', 'USUARIO2', 'AdminUser'],
    usuariolinux: [''],
    backuplocal: [''],
    actualizacionso: ['ok', 'no', ''],
    accesodirectosv: ['no', 'ok', ''],
    cfgcorreo: ['no', 'ok'],
    habilitaradministrador: ['no', 'ok', ''],
    actualizacionwin: ['no', 'ok', ''],
    nrofacturacompra: ['no', 'ok', ''],
    passwifiubuntu: ['no', 'ok', ''],
    camaraweb: ['CAMARA WEBC/MIC 0010101A4920 ', 'Camara web logitech 2932', 'CamaraWeb asus 943'],
    licenciawinoffice: ['WINDOWS:  9999-9-99999-9999-2222', 'WINDOWS:  334324-9-23-4-111', 'Office:  2223-1-43243-546-123123', 'Office:  555-9-555-55555-2222'],
    filestream: ['no', 'ok', ''],
    cfgcarpetasadrive: 'ESCRITORIO // DOCUMENTOS // DESCARGAS',
    reglicplanillacontrol: ['no', 'ok', ''],
    entregaplanilla: ['no', 'ok', ''],
    observaciones: ['Verificar mails', 'No prende', 'Cambiar disco (falla)', 'Se cambio de sector', 'Se agregó ram']
}


const phone = {

    inventario: 'Telefono',
    puesto: [''],
    ubicacion: ['E', 'B', 'C', 'D', 'F'],
    usuario: ['Leandro Fernandez', 'Laura Martinez', 'Jhon Doe', 'Juan Rodriguez', 'Andrea Justkchent', 'Ramiro Gashturt', 'George Dash', 'Curtis Lopez'],
    marca: ['Samsung', 'Nokia', 'Xiaomi', 'LG', 'Motorola', 'iPhone'],
    nromodelo: ['1293284824', '&', '12932848249'],
    micro: ['A15 Bionic', 'A14 Bionic', 'Exynos 2100', 'Snapdragon 888', 'MediaTek Dimensity 900', 'Snapdragon 243', 'Exynos 500'],
    memoriainterna: ['64GB', '128GB', '256GB', '1TB'],
    ram: ['4GB', '8GB', '16GB', '32GB'],
    imei: ['232324', '&', '1232142'],
    serie: ['1293284824', '&', '12932848249'],
    codigodebarras: ['9358348', '&', '1293284824'],
    cfgcorreoempresa: ['no', 'ok', ''],
    wpbusiness: ['no', 'ok', ''],
    nrofactura: ['23214', '&', '233333'],
    fechafactura: ['23/12/2022', '11/10/2021', '11/40/2015', '05/10/1992', '15/09/2022'],
    proveedor: ['Tech solutions', 'Proveedor premium', 'Internet', 'Comprado en marketplace'],
    entregaplanilla: ['no', 'ok', ''],
    versionandroid: ['13.0', '', '', ''],
    microsd: ['16gb', '32gb', '', '', ''],
    fuente: [''],
    nro: ['23', '&', '500'],
    usuarioclaro: ['lea@mail.com', 'asdsaf@gmail.com', 'usuario@claro.com', 'nombre@mail.com', '', '', '', ''],
    accesorios: ['funda', 'cable nuevo', 'doble sim', '', ''],
    cfggmail: ['no', 'ok', ''],
    observaciones: ['hay que activar el numero', 'arreglar pantalla', 'reparar cam frontal', '', '']
}


const other = {

    inventario: 'Otro',
    puesto: '',
    ubicacion: ['E', 'B', 'C', 'D', 'F'],
    usuario: ['Leandro Fernandez', 'Laura Martinez', 'Jhon Doe', 'Juan Rodriguez', 'Andrea Justkchent', 'Ramiro Gashturt', 'George Dash', 'Curtis Lopez'],
    nombre: ['Teclado', 'Teclado y mouse', 'Parlante', 'Camara de seguridad', 'Disco Externo', 'USB multiple'],
    codigodebarras: ['23323', '&', '4211421'],
    articulo: '',
    marca: ['Logitech', 'Hik-vision', 'Asus', 'Razer', 'Audiolab', 'LG'],
    modelo: ['FB 239', 'Cart230', 'Ror20939', 'N-v9', '1203'],
    nrofactura: ['23214', '&', '233333'],
    nroserie: ['32', '&', '4125'],
    entregaplanilla: ['no', 'ok', ''],
    observaciones: ['En prueba', 'Dejar solo 1 semana', 'Usuario se niega a usarlo', 'Roto en la base', 'Rajado']
    }

module.exports = { computer, phone, other }



// ['Google Chrome', '7zip', 'Adobe Acrobat', 'UltraVNC', 'TeamViewer', 'AnyDesk', 'Zoom', 'Windows Defender', 'Microsoft Office', 'Libre Office'],
