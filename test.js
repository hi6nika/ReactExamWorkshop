function a(s) {
  return JSON.stringify(s);
}

console.log(a({
  imgUrl:
     "https://images.pistonheads.com/nimg/40746/bmw-m6-m6-S4040750-2.jpg",make : 'bmw' ,
  model: "e63",
  condition: "brand New",
  year: "2009",
  body: "coupe",
  price: 20000,
})
)