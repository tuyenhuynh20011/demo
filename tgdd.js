$(document).ready(function() {
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        autoplay: 10000
    })
});
function headerbot(c,name,icon)
{
    document.getElementById("main-menu").innerHTML+=
    `
    
        <li id="`+c+`">
            <a href="">
                <i class="`+icon+`"></i>
                <span>`+name+`</span>
            </a>
        </li>
     
    `
}
let a=["fas fa-mobile-alt","fas fa-laptop","fas fa-tablet-alt","fas fa-headphones","far fa-clock","fas fa-stopwatch","fas fa-desktop","fab fa-pinterest"]
let b=["Điện thoại","laptop","table","Phụ kiện","Đồng hồ thời trang","Đồng hồ thông minh","Pc,máy in","Mua sim giá rẻ"]
let c=["0","1","2","phukien","3","4","5","6","7","8","9"]
for(let i=0;i<a.length;i++)
{
    headerbot(c[i],b[i],a[i])
}
function popup()
{
    document.getElementById("phukien").innerHTML+=
    `
    <div class="popup">
    <div class="PKDD">
    <strong>Phụ kiện di động</strong>
    <a href="/sac-dtdd"><h3>Pin sạc dự phòng</h3></a>
    <a href="/sac-cap"><h3>Sạc, cáp</h3></a>
    <a href="/mieng-dan-man-hinh"><h3>Miếng dán màn hình</h3></a>
    <a href="/op-lung-flipcover"><h3>Ốp lưng điện thoại</h3></a>
    <a href="/op-lung-may-tinh-bang"><h3>Ốp lưng máy tính bảng</h3></a>
    <a href="/gay-tu-suong"><h3>Gậy tự sướng</h3></a>
    <a href="/gia-do-dien-thoai"><h3>Giá đỡ laptop, điện thoại</h3></a>
    <a href="/de-moc-dien-thoai"><h3>Đế, móc điện thoại</h3></a>
    <a href="/tui-chong-nuoc"><h3>Túi chống nước</h3></a>
    <a href="/tui-dung-airpods"><h3>Túi đựng Airpods</h3></a>
    <a href="/phu-kien-thong-minh"><h3>Phụ kiện iPad</h3></a>
    <br><br>
</div>                                 <div class="PKLT">
    <strong>Phụ kiện Laptop</strong>
    <a href="/chuot-may-tinh"><h3>Chuột máy tính</h3></a>
    <a href="/tui-chong-soc"><h3>Balo, túi chống sốc</h3></a>
    <a href="/mieng-lot-ban-phim"><h3>Miếng lót bàn phím</h3></a>
    <a href="/phan-mem"><h3>Phần mềm</h3></a>
</div>                                 <div class="PKCH">
    <strong>
        Thương hiệu hàng đầu
        <a href="/phu-kien/chinh-hang" class="">Xem tất cả</a>
    </strong>
    <a href="/phu-kien/apple"><h3>Apple</h3></a>
    <a href="/phu-kien/samsung"><h3>Samsung</h3></a>
    <a href="/phu-kien/sony"><h3>Sony</h3></a>
    <a href="/phu-kien/anker"><h3>Anker</h3></a>
</div>                            
     <div class="TBAT">
    <strong>Thiết bị âm thanh</strong>
    <a href="/tai-nghe"><h3>Tai nghe</h3></a>
    <a href="/loa-laptop"><h3>Loa</h3></a>
    <div class="TBLT">
        <strong>lưu trữ</strong>
        <a href="/the-nho-dien-thoai"><h3>Thẻ nhớ</h3></a>
        <a href="/usb"><h3>USB</h3></a>
        <a href="/o-cung-di-dong"><h3>Ổ cứng</h3></a>
    </div>
</div>                                
 <div class="PKK">
    <strong>Phụ kiện khác</strong>
    <a href="/thiet-bi-mang"><h3>Thiết bị mạng</h3></a>
    <a href="/camera-giam-sat"><h3>Camera giám sát, hành trình</h3></a>
    <a href="/phu-kien-oto"><h3>Phụ kiện ô tô</h3></a>
    <a href="/may-tinh-cam-tay"><h3>Máy tính cầm tay</h3></a>
    <a href="/thiet-bi-thong-minh"><h3>Thiết bị thông minh</h3></a>
    <a href="/quat-mini"><h3>Quạt mini</h3></a>
    <a href="/pin"><h3>Pin tiểu, pin điện thoại</h3></a>
</div>                                
    </div>

    `
}
popup()
let img=["https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg","https://cdn.tgdd.vn/Products/Images/42/235440/samsung-galaxy-a52-5g-thumb-black-600x600-600x600.jpg","https://cdn.tgdd.vn/Products/Images/42/233130/xiaomi-redmi-9t-6gb-110621-080650-400x400.jpg","https://cdn.tgdd.vn/Products/Images/42/229947/vivo-y12s-xanh-600x600.jpg","https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600-600x600.jpg"]
let salecode=["Giảm sốc từ 20-22/4","Sale cá tháng tư","Thu cũ đổi mới","Thu cũ đổi mới","VNPAY GIẢM 500.000đ"]
let phonename=["Iphone 12 Pro Max 128GB ","Samsung Galaxy A52 5G","Xiaomi Redmi 9t (6GB/128GB)","Vivo Y12s (3GB/32GB)","Samsung Galaxy S21 5G"]
let newprice=["30.890.000đ","9.290.000đ","4.590.000đ","2.990.000đ","20.990.000đ"]
let oldprice=["33.190.000đ","10.990.000đ","4.990.000đ","3.290.000đ","23.990.000đ"]
let ratestart=["10","108","12","90","76"]
function Products(img,salecode,phonename,newprice,oldprice,ratestart)
{
    document.getElementById("product__in").innerHTML+=
    `
    <div class="list__phone">
    <div class="tragop">
            <div class="tragop0">
                <a href="">Trả Góp 0%</a>
            </div>
    </div>    
  <a href="">
    <div class="product--img">
        <img src="`+img+`" alt="">
    </div>  
    <div class="list__phone--sale">
        <div class="sale--box">
                <a href="">`+salecode+`</a>
        </div>
    </div>
    <div class="list__phone--name">
            <a href="">`+phonename+`</a>
    </div>
    <div class="list__phone--price">
        <div class="listnewprice">
            <a href="">`+newprice+`</a>
        </div>
        <div class="listoldprice">
            <a href="">`+oldprice+`</a>
        </div>
    </div>
              
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>        
            <span> `+ratestart+` đánh giá</span>
    
  </a>
    `
}
for(let i=0;i<img.length;i++)
{
    Products(img[i],salecode[i],phonename[i],newprice[i],oldprice[i],ratestart[i])
}
function phoneitem(phoneitem__img, phoneitem__name,phoneitem__newprice,phoneitem__oldprice,phonerate)
{
    document.getElementById("phoneitem").innerHTML+=
    `
    <div class="phoneitem__list">
    <div class="phoneitem__tragop">
     <a href="">Trả góp 0%</a>
    </div>
    <div class="phoneitem__img">
        <img src="`+phoneitem__img+`" alt="">
    </div>
    <div class="phoneitem__name">
        <a href="">`+phoneitem__name+`</a> 
    </div>
    <div class="phoneitem__price">
    <div class="phoneitem__newprice">
        `+phoneitem__newprice+`
    </div>
    <div class="phoneitem__oldprice">
        `+phoneitem__oldprice+`
   </div>
   </div>
        
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
            <span>`+phonerate+` đánh giá</span>
    
    `
}
let phoneitem__img=["https://cdn.tgdd.vn/Products/Images/42/229885/TimerThumb/oppo-a15-black-600-test.jpg","https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg","https://cdn.tgdd.vn/Products/Images/42/222758/xiaomi-redmi-note-10-thumb-green-600x600-1-600x600.jpg"]
let phoneitem__name=["OPPO A15","Iphone 12 64GB","Xiaomi Redmi Note 10 (6GB/128GB)"]
let phoneitem__newprice=["3.190.000₫","21.990.000₫","5.490.000₫"]
let phoneitem__oldprice=["3.490.000₫","23.990.000₫","6.000.000đ"]
let phonerate=["10","132","32","89","20"]
for(let i=0;i<3;i++)
{
    phoneitem(phoneitem__img[i],phoneitem__name[i],phoneitem__newprice[i],phoneitem__oldprice[i],phonerate[i])
}

function phoneitem2(phoneitem2__img, phoneitem2__name,phoneitem2__newprice,phoneitem2__oldprice){
document.getElementById("phoneitem2").innerHTML+=
`
     <div class="phoneitem__list">
     <div class="phoneitem__tragop">
         <a href="">Trả góp 0%</a>
         </div>
        <div class="phoneitem__img">
        <img src="`+phoneitem2__img+`" alt="">
        </div>
    <div class="phoneitem__name">
         <a href="">`+phoneitem2__name+`</a> 
    </div>
    <div class="phoneitem__price">
        <div class="phoneitem__newprice">
        `+phoneitem2__newprice+`
        </div>
        <div class="phoneitem__oldprice">
         `+phoneitem2__oldprice+`               
   </div>
      </div>
          
        <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
            <span>19 đánh giá</span>
   `
}

let phoneitem2__img=["https://cdn.tgdd.vn/Products/Images/42/226101/samsung-galaxy-a72-thumb-balck-600x600-600x600.jpg","https://cdn.tgdd.vn/Products/Images/42/236260/vsmart-star-5-thumb-green-600x600-3-600x600.jpg","https://cdn.tgdd.vn/Products/Images/42/236431/vivo-y72-5g-blue-600x600.jpg"]
let phoneitem2__name=["Samsung Galaxy A72","Vsmart Star 5 (3GB/64GB)","Vivo Y72 5G"]
let phoneitem2__newprice=["11.490.000₫","2.890.000₫","5.490.000₫"]
let phoneitem2__oldprice=["3.490.000₫","23.990.000₫","6.000.000đ"]
for(let i=0;i<3;i++)
{
    phoneitem2(phoneitem2__img[i],phoneitem2__name[i],phoneitem2__newprice[i],phoneitem2__oldprice[i])
}

function accessories(accessories__img,accessories__name,accessories__newprice,accessories__oldprice,rate)
{
    document.getElementById("accessories--product").innerHTML+=
    `
    <div class="accessories__list">
     <a href="">
        <div class="accessories__img">
                <img src="`+accessories__img+`" alt="">
        </div>
        <div class="accessories__name">
               <a href="">`+accessories__name+`</a>   
        </div>
        <div class="accessories__price">
            <div class="accessories__newprice">
                <strong>`+accessories__newprice+`</strong>                               
            </div>
            <div class="accessories__oldprice">
                <span>`+accessories__oldprice+`</span>
            </div>    
        </div>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <span>`+rate+` đánh giá </span>

    </a>
                </div>
    `
}
let accessories__img=["https://cdn.tgdd.vn/Products/Images/57/226703/226703-400x400.jpg","https://cdn.tgdd.vn/Products/Images/58/228492/cap-micro-1m-xmobile-ltm-02-xanh-reu-ava-1-400x400.jpg","https://cdn.tgdd.vn/Products/Images/55/83106/the-nho-microsd-200gb-class10uhs1-fix-400x400.jpg","https://cdn.tgdd.vn/Products/Images/54/231148/bluetooth-true-wireless-mozard-dt920-den-ava-400x400.jpg","https://cdn.tgdd.vn/Products/Images/75/218169/usb-otg-31-64gb-sandisk-sdddc3-den-ava-1-400x400.jpg"]
let accessories__name=["Xiaomi VXN4286GL","Cáp Micro USB Xmobile LTM-02","Thẻ nhớ MicroSD 200 GB SanDisk Class 10","Tai nghe Bluetooth True Wireless Mozard DT920","USB OTG 3.1 64GB Type C Sandisk SDDDC3 Đen"]
let accessories__newprice=["341.000₫","100.000₫","1.190.000₫","760.000₫","450.000₫"]
let accessories__oldprice=["400.000₫","150.000đ","1.690.000₫","950.000₫","500.000đ"]
let rate=['10',"12","40","5","35"]
for(let i=0;i<accessories__img.length;i++)
{
    accessories(accessories__img[i],accessories__name[i],accessories__newprice[i],accessories__oldprice[i],rate[i])
}
function accessorieslegit(accessorieslegit__img,accessorieslegit__name,accessorieslegit__newprice,accessorieslegit__oldprice,rate2){
document.getElementById("accessories__legit--product").innerHTML+=
`
<div class="accessorieslegit__list">
     <a href="">
        <div class="accessorieslegit__img">
                <img src="`+accessorieslegit__img+`" alt="">
        </div>
        <div class="accessorieslegit__name">
               <a href="">`+accessorieslegit__name+`</a>   
        </div>
        <div class="accessorieslegit__price">
            <div class="accessorieslegit__newprice">
                <strong>`+accessorieslegit__newprice+`</strong>                               
            </div>
            <div class="accessorieslegit__oldprice">
                <span>`+accessorieslegit__oldprice+`</span>
            </div>    
        </div>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <span>`+rate2+` đánh giá </span>

    </a>
                </div>
`    
}
let accessorieslegit__img=["https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-400x400.jpg","https://cdn.tgdd.vn/Products/Images/54/236025/airpods-2-wireless-charge-apple-mrxj2-ava-400x400.jpg","https://cdn.tgdd.vn/Products/Images/54/236016/bluetooth-airpods-2-apple-mv7n2-imei-ava-400x400.jpg","https://cdn.tgdd.vn/Products/Images/54/227725/tai-nghe-chup-tai-bluetooth-sony-wh-1000xm4-avatar-1-400x400.jpg","https://cdn.tgdd.vn/Products/Images/2162/230897/loa-bluetooth-jbl-boombox-2-den-ava-1-400x400.jpg"]
let accessorieslegit__name=["Tai nghe Bluetooth AirPods Pro Wireless Charge Apple MWP22","Tai nghe Bluetooth AirPods 2 Wireless charge Apple MRXJ2","Tai nghe Bluetooth AirPods 2 Apple MV7N2","Tai nghe Bluetooth Chụp Tai Sony WH-1000XM4","Loa Bluetooth JBL Boombox 2"]
let accessorieslegit__newprice=["5.490.000₫","4.490.000₫","3.490.000₫","8.490.000₫","9.690.000₫"]
let accessorieslegit__oldprice=["6.490.000₫","4.990.000₫","3.790.000₫","9.300.000đ","10.200.000đ"]
let rate2=["18","29","35","23","56"]

for(let i=0;i<accessorieslegit__img.length;i++)
{
    accessorieslegit(accessorieslegit__img[i],accessorieslegit__name[i],accessorieslegit__newprice[i],accessorieslegit__oldprice[i],rate2[i])
}

function watch(watch__img,watch__name,watch__newprice,watch__oldprice,watchrate)
{
    document.getElementById("watch--product").innerHTML+=
    `
    <div class="watch__list">
     <a href="">
        <div class="watch__img">
                <img src="`+watch__img+`" alt="">
        </div>
        <div class="watch__name">
               <a href="">`+watch__name+`</a>   
        </div>
        <div class="watch__price">
            <div class="watch__newprice">
                <strong>`+watch__newprice+`</strong>                               
            </div>
            <div class="watch__oldprice">
                <span>`+watch__oldprice+`</span>
            </div>    
        </div>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>

        <span>`+watchrate+` đánh giá </span>

    </a>
                </div>
    `
}
let watch__img=["https://cdn.tgdd.vn/Products/Images/7077/229044/apple-watch-s6-40mm-vien-nhom-day-cao-su-ava-400x400.jpg","https://cdn.tgdd.vn/Products/Images/7077/226475/samsung-galaxy-watch-3-41mm-thum-400x400.jpg","https://cdn.tgdd.vn/Products/Images/7077/232899/mi-watch-255520-015535-400x400.jpg","https://cdn.tgdd.vn/Products/Images/7077/229033/apple-watch-s6-lte-40mm-vien-nhom-day-cao-su-ava-400x400.jpg","https://cdn.tgdd.vn/Products/Images/7077/231681/beu-b2-hong-400x400.jpg"]
let watch__name=["Apple Watch S6 40mm viền nhôm dây cao su","Samsung Galaxy Watch 3 41mm viền thép dây da","Mi Watch","Apple Watch S6 LTE 40mm viền nhôm dây cao su","BeU B2"]
let watch__newprice=["9.990.000₫","5.990.000₫","3.090.000₫","12.792.000₫","690.000₫"]
let watch__oldprice=["400.000₫","150.000đ","1.690.000₫","950.000₫","500.000đ"]
let watchrate=["10","2","108","90","13"]
for(let i=0;i<watch__img.length;i++)
{
    watch(watch__img[i],watch__name[i],watch__newprice[i],watch__oldprice[i],watchrate[i])
}
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() { 
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const carouselSlide =document.querySelector('.carousel-slide');
const carouselImg=document.querySelectorAll('.carousel-slide img')

const prevBtn=document.querySelector('#prevBtn');
const nextBtn=document.querySelector('#nextBtn');

let counter=1;
const size=carouselImg[0].clientWidth;

carouselSlide.style.transform='translateX('+ (-size * counter) +'px)';


nextBtn.addEventListener('click',() => {
    carouselSlide.style.transition= "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translateX('+ ( -size * counter )+'px)';
});
prevBtn.addEventListener('click',()=>{
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform='translateX('+( -size * counter)+'px)';
});
document.getElementById("nextBtn").addEventListener("click", function() {
    console.log(carouselImg[counter]);
    if(carouselImg[counter].id==='lastclone')
    {
        carouselSlide.style.transition="none";
        counter=carouselImg.length-counter;
        carouselSlide.style.transform='translateX('+( -size * counter)+'px)';
    }
   
  });