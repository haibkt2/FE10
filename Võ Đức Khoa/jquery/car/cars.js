var cars = [
    {
      id : 0,
      imageUrl : './img/lexus.jpg',
      imageAlt : 'Lexus',
      inputId : 'lexus',
      price : 1,
      nameCar : 'Lexus'
    },
    {
      id : 2,
      imageUrl : './img/bim.jpg',
      imageAlt : 'BWM',
      inputId : 'bim',
      price : 1,
      nameCar : 'BWM i8'
    },
    {
      id : 3,
      imageUrl : './img/audi.jpg',
      imageAlt : 'Audi',
      inputId : 'audi',
      price : 1,
      nameCar : 'Audi'
    },
    {
      id : 4,
      imageUrl : './img/lambo.jpg',
      imageAlt : 'Lambo',
      inputId : 'lambo',
      price : 1,
      nameCar : 'Lamborghini'
    },
    {
      id : 5,
      imageUrl : './img/vinfast.jpg',
      imageAlt : 'vinfast',
      inputId : 'vinfast',
      price : 1,
      nameCar : 'VinFast'
    },
    {
      id : 6,
      imageUrl : './img/mercedes.jpg',
      imageAlt : 'Mercedes',
      inputId : 'mercedes',
      price : 1,
      nameCar : 'Mescedes'
    }
]
var dataCars = JSON.stringify(cars);
localStorage.setItem('item',dataCars);

