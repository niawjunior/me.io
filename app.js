var div = document.createElement('div');
div.innerHTML =  `
<section class="section-0">
<div class="p-4">
  <div >
    <h4 id="parent" class="text-center mt-4" style="font-size: 20px;">เรียนจบแล้วพี่ๆ ทำงานอะไร?</h4>
  </div>
  <hr style="width:230px;"/>
  </div>
  <div class="text-center mt-2">
  <img class="img-profile" src="images/me.jpg" alt="">
  </div>
  <div class="section-0-body mt-2 p-3">
  <h4 class="text-center text-body">ชื่อจริง พสุพล บุญแสน ชื่อเล่น เนี้ยว อายุ 25 ปี</h4>
  <h4 class="text-center text-body">คณะ ครุศาสตร์อุตสาหกรรม สาขา วิศวกรรมคอมพิวเตอร์</h4>
  <h4 class="text-center text-body mt-3">TEC#7 ห้อง 2</h4>
  <div class="mt-5 text-center">
    <a href="#" class="scroll-down" address="true"></a>
  </div>
  </div>
</section>
<section class="section-1">
<div class="p-4">
  <h4 class="text-section date">1 ตุลาคม 2017 ถึง 30 พฤศจิกายน 2018</h4>
  <div class="text-center" style="margin-top: 50px;">
    <img class="section-image-1" src="images/domecloud-1.png" alt="">
    <p class="text-section mt-5">บริษัท DomeCloud</p>
    <p class="text-section mt-2">ตำแหน่ง Web Programmer</p>
    <p class="text-section mt-2">สิ่งที่ทำ Frontend, Backend, Blockchain</p>
  </div>
</div>
</section>
<section class="section-2">
  <div class="p-4">
    <h4 class="text-section date">1 พฤศจิกายน 2018 ถึง 28 กุมภาพันธ์ 2019</h4>
    <div class="text-center" style="margin-top: 50px;">
      <img class="section-image-1" src="images/allianz.png" alt="">
      <p class="text-section mt-5">บริษัท Allianz Technology</p>
      <p class="text-section mt-2">ตำแหน่ง Frontend Developer</p>
      <p class="text-section mt-2">สิ่งที่ทำ Design and Develop Website</p>
    </div>
  </div>
</section>
<section class="section-3">
    <div class="p-4">
      <h4 class="text-section date">1 มีนาคม 2019 ถึง ปัจจุบัน</h4>
      <div class="text-center" style="margin-top: 50px;">
        <img class="section-image-1" src="images/KGISL.png" alt="">
        <p class="text-section mt-5">บริษัท KG Information system private Limited (KGiSL)</p>
        <p class="text-section mt-2">ตำแหน่ง Frontend Developer Onsite ที่ ธนาคารแห่งประเทศไทย</p>
        <p class="text-section mt-2">สิ่งที่ทำ Design and Develop Website</p>
      </div>
    </div>
  </section>
`
document.querySelector('#main').appendChild(div);