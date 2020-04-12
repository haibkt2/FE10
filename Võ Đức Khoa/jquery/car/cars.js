var cars = [
    {
      id : 0,
      imageUrl : './img/lexus.jpg',
      imageAlt : 'Lexus',
      inputId : 'lexus',
      price : 2222,
      nameCar : 'Lexus'
    },
    {
      id : 2,
      imageUrl : './img/bim.jpg',
      imageAlt : 'BWM',
      inputId : 'bim',
      price : 1111,
      nameCar : 'BWM i8'
    },
    {
      id : 3,
      imageUrl : './img/audi.jpg',
      imageAlt : 'Audi',
      inputId : 'audi',
      price : 3333,
      nameCar : 'Audi'
    },
    {
      id : 4,
      imageUrl : './img/lambo.jpg',
      imageAlt : 'Lambo',
      inputId : 'lambo',
      price : 5555,
      nameCar : 'Lamborghini'
    },
    {
      id : 5,
      imageUrl : './img/vinfast.jpg',
      imageAlt : 'vinfast',
      inputId : 'vinfast',
      price : 9999,
      nameCar : 'VinFast'
    },
    {
      id : 6,
      imageUrl : './img/mercedes.jpg',
      imageAlt : 'Mercedes',
      inputId : 'mercedes',
      price : 8888,
      nameCar : 'Mescedes'
    }
]
var dataCars = JSON.stringify(cars);
localStorage.setItem('item',dataCars);

