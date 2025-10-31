// server.js
import 'dotenv/config'; // carrega variáveis do .env em process.env (apenas em dev)
import express from "express";
import cors from "cors";

// Create a new express application instance
const app = express();

// App configuration
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// SDK do Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";

// Adicione credenciais
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN, // ← Troque por sua chave privada
});

// Routes Ping
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Route to create preference mp

app.post ("/create-preference", (req, res) => {
  
  const preference = new Preference(client);

  preference.create({
    body: {
      items: [
        {
          title: 'Meu produto',
          quantity: 1,
          unit_price: 2000
        }],
      back_urls: {
        success: "https://site-gym-weld.vercel.app/success",
        failure: "https://site-gym-weld.vercel.app/failure",
        pending: "https://site-gym-weld.vercel.app/pending"
      },
      auto_return: "approved",
    }
  })
    .then((data) => {
      console.log(data);
      //Object data contains all information about our Preference
      res.status(200).json({
        preference_id: data.id,
        preference_url: data.init_point,
      })
    })
    .catch(() => {
      res.status(500).json({"error":"error creating preference"})
    });

});


// Start server
app.listen(8080, () => {
  console.log("The server is now running on Port 8080");
});
