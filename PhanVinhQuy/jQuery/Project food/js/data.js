var foods = [
    {
        id: 0,
        name: "Noodle",
        price: 40000,
        input_name: "number_pho",
        input_id: "number_pho",
        img_scr: "../img/pho.jpg",
        img_alt: "pho"
    },
    {
        id: 1,
        name: "Soup",
        price: 50000,
        input_name: "number_soup",
        input_id: "number_soup",
        img_scr: "../img/soup.jpg",
        img_alt: "soup"
    },
    {
        id: 2,
        name: "Vegetable",
        price: 30000,
        input_name: "nuber_vegetable",
        input_id: "nuber_vegetable",
        img_scr: "../img/salad.jpg",
        img_alt: "vegetable"
    },
    {
        id: 3,
        name: "Sushi",
        price: 70000,
        input_name: "number_sushi",
        input_id: "number_sushi",
        img_scr: "../img/sushi.jpg",
        img_alt: "sushi"
    },
    {
        id: 4,
        name: "Udon",
        price: 20000,
        input_name: "number_udon",
        input_id: "number_udon",
        img_scr: "../img/udon.jpg",
        img_alt: "udon"
    },
    {
        id: 5,
        name: "Beef",
        price: 150000,
        input_name: "number_beef",
        input_id: "number_beef",
        img_scr: "../img/beff.jpg",
        img_alt: "beef"
    },
];
// lọc food trong data
function filterFood(name) {
    return foods.filter(x => {
        return x.name === name;
    })[0];
}
