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

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})

function moreproduct(number,note,img)
{
   
        document.getElementById("more-product").innerHTML+=
    `
    <div class="item-border`+number+`">
        <div class="img-border">
                <img src="`+img+`" alt="">
                <p>`+note+`</p>
        </div>
    </div>
    `
    
}
let number=["1","2","3","4"]
let fas=["null","null","null","null","null","fas fa-medal",]
let img=["https://cdn.tgdd.vn/Products/Images/42/228743/iphone-12-pro-max-vang-new-600x600-200x200.jpg","https://cdn.tgdd.vn/Products/Images/42/228743/iphone-12-pro-max-trang-bac-600x600-200x200.jpg","https://cdn.tgdd.vn/Products/Images/42/228743/iphone-12-pro-max-xanh-duong-new-600x600-200x200.jpg","https://cdn.tgdd.vn/Products/Images/42/228743/iphone-12-pro-max-xam-new-600x600-200x200.jpg"]
let note=["vàng đồng","Bạc","Xanh Dương","Xám","Ảnh chụp từ camera"]
for(let i=0;i<number.length;i++)
{
    moreproduct(number[i],note[i],img[i])
}
    
function parameter(paraname,paranumber)
{
    document.getElementById("parameter__list").innerHTML+=
    `
    <li class="parameter__list--item">
        <div class="p1">`+paraname+`</div>
        <div class="p2">`+paranumber+`</div>
    </li>
    
    `
}
let paraname=["Màn hình :","Hệ điều hành:","Camera sau:","Camera trước:","Chip:","RAM:","Bộ nhớ trong:","SIM:","Pin, Sạc:"]
let paranumber=["OLED, 6.7',Super Retina XDR","iOS 14","3 camera 12 MP","12 MP","Apple A14 Bionic","6 GBGB","256 GBGB","1 Nano SIM, & 1, eSIMHỗ trợ 5G","3687 mAhmAh, 20WW"]
for(let i=0;i<9;i++)
{
    parameter(paraname[i],paranumber[i])
}