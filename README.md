# projectLeaderBoard
Backend icin kullanilan npm paketleri:
express, mongoose,dotenv, bcrypt, cokie-parser,body-parser passport, passport-local, passport-jwt, jsonwebtoken, redis, cors, ...
express: API ve static dosyaları barındırmak için oluşturulan web sunucusu için kullanıldı.
body-parser: Ekspress sunucusuna gönderilen istek gövdesini ayrıştırmak için kullanıldı.
dotenv: Kimlik bilgilerinin yüklenmesi için kullanıldı.
mongoose: MongoDB islemlerinin (baglantilar, model olusumlari v.b) yapilmasi icin kullanildi.
bcrypt: Sifrenin veritabaninda hashlenerek saklanmasi icin kullanildi.
passport: kimlik dogrulama islemleri icin kullanildi.
passport-local: Sunucuda bir kullanıcı adı ve sifre ile kimlik dogrulamak icin kullanildi.
passport-jwt ve jsonwebtoken: JSON web token ile kimlik dogrulamasi icin kullanildi.
cookie-parser: Cookie header'in icerisinden JWT'nin ayristirilmasi ve req.cookies kisminin bu JWT ile doldurulmasi icin kullanildi.
redis: veritabanındaki yükün azaltılması ve cache layer olarak kullanılması dusunulerek eklendi ancak kullanilmadi. Haftalik verilerin burada tutulup ardindan expire date gectikten sonra silinmesi planlanmisti.
cors: Client tarafindaki uygulamalar ile HTTP protokolu uzerinden (SSL sertifikasi olmadan) iletisim kurulabilmesi icin kullanildi. Bu paket ile CORS hatalari giderildi.

{
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.0.5",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "passport-local": "^1.0.0",
    "redis": "^3.1.2"
}

Kullanılan veritabanı:
Atlas ile MongoDB Cloud

Frontend icin kullanilan JS kütüphaneleri:
Bootsrap, JQuerry, DataTables, ...

