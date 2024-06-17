export const products = [
    {
        id: 1,
        title: "Laptop HP",
        price: 750,
        description: "Laptop HP con procesador Intel i7, 16GB de RAM y 512GB SSD.",
        img: "https://www.pchmayoreo.com/pub/media/catalog/product/7/F/7F213LT_2.jpg",
        stock: 10,
        category: "Electronics",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1
    },
    {
        id: 2,
        title: "Samsung Galaxy S23",
        price: 600,
        description: "Samsung Galaxy con pantalla AMOLED de 6.5 pulgadas y 128GB de almacenamiento.",
        img: "https://images.samsung.com/mx/smartphones/galaxy-s23-ultra/buy/product_color_lavender.png",
        stock: 15,
        category: "Electronics",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1
    },
    {
        id: 3,
        title: "Televisor LG 55\"",
        price: 500,
        description: "Televisor LG 4K UHD con pantalla de 55 pulgadas y soporte para HDR.",
        img: "https://http2.mlstatic.com/D_NQ_NP_602729-MLA52218958596_102022-O.webp",
        stock: 8,
        category: "Electronics",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1
    },
    {
        id: 4,
        title: "Audífonos Sony",
        price: 120,
        description: "Audífonos inalámbricos Sony con cancelación de ruido y 30 horas de batería.",
        img: "https://mxsonyb2c.vtexassets.com/arquivos/ids/308892/38ea5815d12ab90a45b9b1a35520b794.jpg?v=637640820708270000",
        stock: 20,
        category: "Electronics",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1
    },
    {
        id: 5,
        title: "Reloj Inteligente Apple Watch",
        price: 400,
        description: "Apple Watch Serie 6 con GPS y monitor de salud integrado.",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-pink-sport-band-light-pink-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693282239049",
        stock: 12,
        category: "Wearables",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1
    },
    {
        id: 6,
        title: "Cámara Canon DSLR",
        price: 900,
        description: "Cámara Canon EOS Rebel T7 con lente 18-55mm y 24.1MP de resolución.",
        img: "https://www.canon.com.mx/datacenter/image/resize-center/328x328/imagenesproducto/fichero/4776_EOS_Rebel_T8i_01.jpg/",
        stock: 5,
        category: "Photography",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1
    },
    {
        id: 7,
        title: "Tablet iPad",
        price: 350,
        description: "Apple iPad con pantalla Retina de 10.2 pulgadas y 64GB de almacenamiento.",
        img: "data:image/jpeg;base64,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",
        stock: 18,
        category: "Tablets",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1
    },
    {
        id: 8,
        title: "Consola de videojuegos PlayStation 5",
        price: 500,
        description: "Consola de videojuegos Sony PlayStation 5 con unidad de disco y soporte para juegos 4K.",
        img: "https://m.media-amazon.com/images/I/61+gjRmdMfL._AC_UF1000,1000_QL80_.jpg",
        stock: 7,
        category: "Video Games",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1

    },
    {
        id: 9,
        title: "Bicicleta de montaña Trek",
        price: 800,
        description: "Bicicleta de montaña Trek con marco de aluminio y 21 velocidades.",
        img: "https://bicyclestore.mx/cdn/shop/files/Procaliber6-24-41615-B-Primary_e96f0f78-99df-4593-a795-4b2548ce645b_x1000.webp?v=1692279457",
        stock: 10,
        category: "Sports",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1

    },
    {
        id: 10,
        title: "Cafetera Nespresso",
        price: 150,
        description: "Cafetera Nespresso con sistema de cápsulas y función de espuma de leche.",
        img: "https://http2.mlstatic.com/D_NQ_NP_612360-MLU74357398933_022024-O.webp",
        stock: 25,
        category: "Home Appliances",
        randomNum: Math.floor(Math.random() * 100) + 1,
        randomNumStar: Math.floor(Math.random() * 5) + 1

    }
];
