//* import mercadopago from "mercadopago";

//mercadopago.configure({
//  access_token: process.env.MP_ACCESS_TOKEN
//});
// 
//const preference = {
//  items: [
//    {
//      title: "Produto Exemplo",
//      quantity: 1,
//      currency_id: "BRL",
//      unit_price: 50.0
//    }
//  ]
//};
//
//mercadopago.preferences.create(preference)
//  .then(function (response) {
//    console.log("Preference ID:", response.body.id);
//  }).catch(function (error) {
//    console.log(error);
//  });