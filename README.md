# Kişisel Web Sitem – samicakaloglu.com.tr

Bu proje, kendi kişisel web sitemi geliştirmek ve tamamen kendi kontrolümde bir ortamda yayına almak amacıyla oluşturuldu. React ve modern frontend araçları ile geliştirilen bu site, evimde kurduğum bir sunucu aracılığıyla internette yayınlanmaktadır.

## 🔧 Kullanılan Teknolojiler

- [React](https://reactjs.org/) – Kullanıcı arayüzünü oluşturmak için
- [Tailwind CSS]
- [Vite](https://vitejs.dev/) – Hızlı geliştirme ve build sistemi
- [Ubuntu Server](https://ubuntu.com/server) – Fiziksel sunucu işletim sistemi
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/) – Dış dünyadan sunucuya güvenli bağlantı için

## 💻 Sunucu Kurulumu

Projeyi evimdeki eski bir bilgisayara kurduğum Ubuntu Server üzerinde çalıştırdım:

1. Eski bir bilgisayara Ubuntu Server kurulumu yaptım.
2. React ile geliştirdiğim projeyi bu sunucuya aktardım.
3. Cloudflare Tunnel kullanarak statik dosyaları güvenli şekilde internete açtım.
4. Alan adımı ([www.samicakaloglu.com.tr](http://samicakaloglu.com.tr)) Cloudflare üzerinden yönlendirdim.
5. Böylece kendi evimde barındırılan bir kişisel web sitesi oluşturmuş oldum.

## 🌐 Yayın Adresi

📍 **samicakaloglu.com.tr**

## 📁 Projeyi Çalıştırmak

```bash
# Bağımlılıkları kur
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Build al (yayınlamak için)
npm run build
```
