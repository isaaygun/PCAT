const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
//****************   MIDDLEWARE   *******************
app.use(express.static('public')); //Bir express uygulamasında statik dosyaları kullanmak için, express web çatısının express.static gömülü middleware fonksiyonu kullanılır. Bu statik dosyaları uygulamanın kök klasörü içerisindeki public isminde bir klasör oluşturup, statik dosyaların tamamını bu klasörün içerisine koyalım.
//kendi middleware fonksiyonumuzu oluşturalım.
const myLogger = (req, res, next) => {
  console.log('middleware log 1 çalıştı');
  next();
};
app.use(myLogger); //middleware i kullanıyoruz.
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'temp/index.html'))
});

//#region
/* app.get('/', (req, res) => {
  res.send('anasayfa');
});
app.get('/about', (req, res) => {
  const photo = {
    id: 1,
    name: 'photo name',
    description: 'photo description',
  };
  res.send(photo);
}); */
//#endregion
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
