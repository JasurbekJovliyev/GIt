// Bootsrap-bu HTML CSS va JAVASCRIPTDAN tashkil topgan CSS Framworki hisoblanadi
                          // 1-dars BREAKPOINTS VA CONTAINERS
// BREAKPOINTS-qurilmamizning kengligiga qarab web sahifamiz o'z kontentini o'zgartiruvchi 
//-nuqtalar.Bu nuqtalarda veb sahifamiz odatda boshqa ko'rinishga o'tib qurilmaga moslashadi
//-Bootstrap o'zining breakpoints qiymatlariga ega.   Bootstrapda breakpointlar 6 ta:
//X-smail <576px,   Smail=sm>=576px,  Medium=md>=768px,  Large=lg>=992px, Extra large=xl>=1200px, Extraextra large =xxl>=1400px
//Container-Bootstrapning asosiy qurilmalaridan bo'lib u elementlarni o'zida saqlash surish
//- va markazga joylashtirish uchun ishlatiladi. Botstrapning Grid tizimini ishlatish uchun
//-Container dan foydalanish majburiy. Containerning 3 xil turi mavjud
//1.class="container"- bu classni bersak ikki yon va ustki qismidan joy qoladi bu bootsrapning o'ziga xos xususiyati
//2.class="container-fluid"-barcha breakpoint qiymatlarda ham butun brauzerga yoyiladi (width:100%)
//3.container-{breakpoint}-ko'rsatilgan breakpointgacha width uchun 100% qiymatini belgilab beradi
//-masalan class="container-sm", class="container-md", class="container-lg", class="container-xl"
                                       //GRID
//GRID TIZIMI(SYSTEM)-mobile-first yondashuvig asoslangan 12 ustun yordamida har xil korinishdagi layoutlar
//-yaratish imkoniyatini beruvchi tizim. Grid bir necha CSS klasslar to'plamidan iborat 
//Grid CONTAINER,ROW(QATOR) VA COLUMN(USTUN)LARDAN IBORAT TIZIM HISOLANADI.
              //Grid system qoidalari: 1)rows(qatorlar) har doim container ichida joylashgan bo'lishi kerak
//2) Gorizontal ustunlar qatorini yaratish uchun rows(qatorlar)dan foydalaning
//3) kontent har doim columns (ustunlar) ichida joylashadi
 /* <div class="container">
    <div class="row">
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
    </div>
  </div> */
                                   //GRID(2-qism)
//Botstrapning grid tizimi yordamida turli xil o'lchovga ega bo'lgan qurilmalar uchun
//- moslashuvchi (responsive)layout yaratish mumkin.uning uchun bootstraoning "breakpoint"
//larining class-infixidan foydalaniladi  
                                      //columns
//Columns- bootstrapning asosiy Grid tizimi bolib u qator(row) ni 
//bir necha bolaklarga boladi va ichida kontent saqlaydi.                                    
