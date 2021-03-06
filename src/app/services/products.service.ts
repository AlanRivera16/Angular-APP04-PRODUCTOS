import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private Products:any[] = 
  [
    {
      id: 1,
      brand: "Samsung",
      department: 'SmartPhones',
      model: 'Galaxy A10S 32GB',
      description: [
        'Procesador Exynos de ocho núcleos a 2GHz',
        ' 2GB de RAM, 32GB de almacenamiento interno',
        ' MicroSD de hasta 512GB',
      ],
      rating: 3.5,
      price: 2984.0,
      msi: false,
      img: 'assets/img/1-1img.JPG',
    },
    {
      id: 2,
      brand: "Samsung",
      department: 'SmartPhones',
      model: 'Galaxy S20 Ultra 128gb',
      description: [
        'Pantalla de 6.9 pulgadas Infinity-O Quad HD',
        ' Dynamic AMOLED 2.0',
        '12 GB de RAM',
        'batería de 5000 mAh',
        'MicoSD hasta 1TB ',
      ],
      rating: 4.5,
      price: 29998.0,
      msi: true,
      meses: [3, 6, 12],
      img: 'assets/img/1-2img.JPG',
    },
    {
      id: 3,
      brand: "Motorola",
      department: 'SmartPhones',
      model: 'Moto One Zoom 128GB',
      description: [
        'Sistema Operativo Android 9 Pie',
        'Procesador Octa core 2.0 GHz',
        'Cámara cuádruple de 48 + 5 + 8 + 16 MP',
        'cámara frontal de 25 MP ',
      ],
      rating: 4,
      price: 8129.0,
      msi: true,
      meses: [3, 6, 12],
  
      img: 'assets/img/1-3img.JPG',
    },
    {
      id: 4,
      brand: "Motorola",
      department: 'SmartPhones',
      model: 'Moto One Macro 64GB',
      description:
        ['Sistema Operativo Android 9 Pie',
        'Procesador Octa core 2.0 GHz',
        'cámara triple de 13MP + 2MP (prof) + 2MP (macro) + ToF',
        ' batería de 4,000 mAh',],
      rating: 4,
      price: 3999.0,
      msi: false,
      img: 'assets/img/1-4img.JPG',
    },
    {
      id: 5,
      brand: 'Xiaomi',
      department: 'SmartPhones',
      model: 'Redmi Note 8 64GB',
      description:
        ['Cámara trasera cuádruple 64+8+2+2 Mpx',
         'Cámara frontal 13', '4 GB RAM', 
         'Batería de 4000 mAh', 
         'procesador Snapdragon 665 de ocho núcleos'],
      rating: 4,
      price: 4176.0,
      msi: true,
      meses: [3, 6, 12],
      img: 'assets/img/1-5img.JPG',
    },
    {
      id: 6,
      brand: 'Xiaomi',
      department: 'SmartPhones',
      model: 'Redmi Note7 32gb',
      description:
        ['Cámara trasera dual 48MP + 5MP aI super pixel 4 en 1 de 1.6μm.', '4 GB RAM, Batería de 4000 mAh', 'Procesador Kryo octa-core de 14nm'],
      rating: 3.5,
      price: 4399.0,
      msi: false,
      img: 'assets/img/1-6img.JPG',
    },
    {
      id: 7,
      brand: 'Fujifilm',
      department: 'Fotografía',
      model: 'Instax Mini 9',
      description:
        ['fotografías del tamaño de una tarjeta de crédito', 'espejo para selfies,Flash integrado', '2 baterías AA'],
      rating: 4,
      price: 1969.0,
      msi: false,
      img: 'assets/img/2-1img.JPG',
    },
    {
      id: 8,
      brand: 'Fujifilm',
      department: 'Fotografía',
      model: 'Instax Mini LiPlay',
      description:
        [' logra fotos en 90 segundos', 'pantalla LCD de 2.7 Pulgadas', 'Temporizador de 10s y 2s', 'Compatible con Instax Mini LiPlay App'],
      rating: 4.5,
      price: 4499.0,
      msi: true,
      meses: [3, 6, 12],
      img: 'assets/img/2-2img.JPG',
    },
    {
      id: 9,
      brand: 'Canon',
      department: 'Fotografía',
      model: 'Canon EOS Rebel T7',
      description:
        [' Conectividad WiFi', 'Compatibilidad NFC', 'Pocesador Digic 4+', 'Cuenta con lente EF-S18-55mm', '24.1 Megapíxeles, pantalla de 3 pulgadas'],
      rating: 4.5,
      price: 9299.0,
      msi: true,
      meses: [3, 6, 12],
      img: 'assets/img/2-3img.JPG',
    },
    {
      id: 10,
      brand: 'Canon',
      department: 'Fotografía',
      model: 'Zoom T7I 18-55ISSTM',
      description:
        ['Pantalla Touch de ángulo variable', 'Grabadora de video Full HD', 'Tecnología Digic 7','Conectividad Wi-Fi y Bluetooth', '24.2 Megapíxeles'],
      rating: 4.8,
      price: 23799.0,
      meses: [3, 6, 12],
      msi: true,
      img: 'assets/img/2-4img.JPG',
    },
    {
      id: 11,
      brand: 'Nikon',
      department: 'Fotografía',
      model: 'D7100 Body',
      description:
        ['Resolución de 24 Megapíxeles', 'tecnología HD-SLR', 'enfoque automático ultra-preciso', 'pantalla de 3.2 pulgadas'],
      rating: 4.3,
      price: 24749.0,
      msi: true,
      meses: [3, 6, 12],
      img: 'assets/img/2-5img.JPG',
    },
    {
      id: 12,
      brand: 'Nikon',
      department: 'Fotografía',
      model: 'Réflex A100',
      description:
        ['Resolución de 20 Megapíxeles', 'ultra compacto', 'muy fácil de transportar',  'Incluye 17 modos de escena', 'pantalla de 2.7 pulgadas, zoom 5x'],
      rating: 4,
      price: 3799.0,
      msi: false,
      meses: [3, 6, 12],
      img: 'assets/img/2-6img.JPG',
    },
    {
      id: 13,
      brand: 'Mabe',
      department: 'Línea Blanca',
      model: 'Mini Split Inverter',
      description:
        ['Mantiene fresco y limpio el aire de tu hogar', 'Capacidad de 12,000 BTUs', '115 volts', 'tubería acanalada 100% de cobre para mayor eficiencia','Temperatura desde 16-30 grados centígrados'],
      rating: 4,
      price: 9890.0,
      msi: true,
      meses: [3, 6, 12],
  
      img: 'assets/img/3-1img.JPG',
    },
    {
      id: 14,
      brand: 'Mabe',
      department: 'Línea Blanca',
      model: 'Frigobar RMF0260XMXB',
      description:
        ['Sistema de enfriamiento manual', 'Puerta reversible', 'abre hacia la izquierda o derecha,Compacto y muy práctico'],
      rating: 4,
      price: 3359.0,
      msi: true,
      meses: [3, 6, 12],
  
      img: 'assets/img/3-2img.JPG',
    },
    {
      id: 15,
      brand: 'Samsung',
      department: 'Línea Blanca',
      model: 'Refrigerador RT29K5710S8/EM',
      description:
        ['11 Pies', 'Despachador Silver', 'Digital Inverter ahorro de energía de hasta 40% vs modelo convencionaa','Twin Cooling Plus comida más fresca hasta un 70%'],
      rating: 4,
      price: 7490.0,
      msi: true,
      meses: [3, 6, 12],
      img: 'assets/img/3-3img.JPG',
    },
    {
      id: 16,
      brand: 'Samsung',
      department: 'Línea Blanca',
      model: 'Microhondas AME8114ST/XAX',
      description:
        ['1.1 Pies Cúbicos Negro con Placa de Acero','8 menús preestablecidos','Permite descongelar y hervir,  potencia de 1600 w'],
      rating: 3.5,
      price: 1990.0,
      msi: true,
      meses: [3, 6, 12],
  
      img: 'assets/img/3-4img.JPG',
    },
  ]; 

  constructor() { }
  public getProducts (){
    return this.Products;
}
}
