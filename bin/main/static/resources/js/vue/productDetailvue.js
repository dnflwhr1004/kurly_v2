"use strict"
var productDetailVue = productDetailVue || {}
productDetailVue ={
	productDetailVue_go:()=>{
		return `<style>
       .content-txt{
           color: #333;
           font-size: 15px;
           letter-spacing: -1px;
       } 
       .prod-quantity{
            width: 30px;
            height: 24px;
            border: 0;
            background-color: #fff;
            color: #000;
            font-size: 20px;
            text-align: center;
            letter-spacing: -0.2px;
        }
        .qtn-btn-up-down{
            height: 23px;
            width: 23px;
            font-size: 12px;
            text-align: center;
            letter-spacing: -0.2px;
        }
   </style>
    <div class="container" style="padding: 3%;">
        <div class="row">
            <div class="col-md-5" >
                <img style="width: 100%;" src="/resources/img/products/1509331889847l0.jpg" alt="">
            </div>
            <div class="col-md-7">
                <h1 style="font-size: 25px; color: #333;letter-spacing: -1px;">[베베쿡] 바르게 만든 한우 된장국 200g</h1>
                <br>
                <h1 style="font-size: 25px; color: #333;letter-spacing: -1px; ">2,576 <span  style="font-size: 18px;">원</span></h1>
                <hr style="border: 0.5px solid #eee;">
                <div class="row">
                    <span class="col-md-4 content-txt" >판매단위</span>
                    <span class="col-md-7 content-txt"  > 1팩</span>
                </div>
                <div class="row">
                    <span class="col-md-4 content-txt" style="margin-top: 2%">중량/용량</span>
                    <span class="col-md-7 content-txt" style="margin-top: 2%"> 500g</span>
                </div>
                <hr style="border: 0.5px solid #eee;">
                <div class="row">
                    <span class="col-md-4 content-txt" >배송구분</span>
                    <span class="col-md-7 content-txt" > 샛별배송/택배배송</span>
                </div>
                <hr style="border: 0.5px solid #eee;">
                <div class="row">
                    <span class="col-md-4 content-txt" >포장타입</span>
                    <span class="col-md-7" >
                    <h1 class="content-txt"> 냉동/종이포장</h1>
                    <h1 style="color: #333;font-size: 12px;letter-spacing: -1px;"> 택배배송은 에코포장이 스티로폼으로 대체됩니다. </h1>
                    </span>
                </div>
                <hr style="border: 0.5px solid #eee;">
                <div class="row">
                    <span class="col-md-4 content-txt" >상품 정보</span>
                    <span class="col-md-7 content-txt" style="text-align: justify;" >
                    -돼지고기,대두,밀 함유, 쇠고기, 닭고기 ,난류,고등어,오징어,새우,전복,땅콩,호두,우유,토마토 와 같은 시설에서 제조
                    우리집 강아지는 복슬강아지 학교갔다 돌아오면 멍멍멍 , 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세
                    </span>
                </div>
                <hr style="border: 0.5px solid #eee;">
                <div class="row ">
                    <span class="col-md-4 content-txt">구매수량</span>
                    <img id="prod-minus" class="qtn-btn-up-down" src="/img/minus.png" alt="">   
                    <input type="text" id="prodQtn" class="prod-quantity" readonly="readonly"  value="1" >
                    <img id="prod-plus" class="qtn-btn-up-down" src="/img/more.png"  alt="">
                </div>
                <hr style="border: 0.5px solid #eee;">
                <div class="row ">
                    <span class="col-md-6" style="opacity: 0">d</span>
                    <span class="col-md-6 content-txt">총상품금액: &nbsp;
                    <span style="font-weight: 600;font-size: 23px;">6,500</span>
                     원</span>
                </div>
                <div class="row ">
                    <span class="col-md-6" style="opacity: 0">d</span>
                    <button class="col-md-5" type="button" style="width: 40%; height:50px;background-color: #5f0080;color: #fff;border-radius: 5px;letter-spacing: -1px;font-weight: 500; margin-top: 5%;">
                    장바구니 담기
                    </button>
                </div>
            </div>
        </div>
        <!--고객후기 시작-->
        <div style="padding: 6%;">
           <ul class="nav nav-tabs" style="border-color: #5f0080;">
              <li class="nav-item">
                <a class="nav-link active" href="#" style="color:#5f0080;letter-spacing: -1px;font-weight: 600;font-size: 13px;border-color: #5f0080 #5f0080 #fff;">고객후기 (<span id="totalReview">0</span>)</a>
              </li>
            </ul>
            <!--댓글-->
            <div style="padding: 5%;">
               <div style="border-bottom : 1px solid #eee;text-align: justify;padding: 3%">
                   <div>Rachel</div>
                   <div>산타바바라 여행동안 편안하고 아늑한 곳에서 머물 수 있어서 너무 좋았다. 사진과 같이 깔끔하고 지내기에 불편함이 없었다. 호스트 역시 친절하고 따뜻하게 대해주었다.</div>
                   <div>2016년 2월</div>
               </div>
               <!--댓글 입력창 시작-->
               <div>
                   <div style="border : 1px solid #eee;border-radius:9px ; text-align: justify;padding: 3%; margin-top: 2%;">
                       <div>Rachel</div>
                       <textarea name="" id="" cols="30" rows="5" style="border: 0px solid #fff;width: 100%;"></textarea>
                       <button  type="button" style="width: 20%;height:40px;background-color: #5f0080;color: #fff;border-radius: 5px;letter-spacing: -1px;font-weight: 500; margin-top: 5%; margin-left: 80%;">
                        작성 완료
                       </button>
                   </div>
               </div>
                <!—댓글 입력창 끝—>
            </div>
        </div>
        <!—고객후기 끝—>
    </div>
    
<script>
     var prodQtn =$('#prodQtn').val();
    prodQtn =1;
    console.log(prodQtn);
    $('#prod-minus').click(e=>{
        e.preventDefault()
        prodQtn =prodQtn-1;
        if(prodQtn>=0){
           $('#prodQtn').val(prodQtn);
           }else{
               alert('수량이 0입니다');
               $('#prodQtn').val(0);
           }

    });
    $('#prod-plus').click(()=>{
        prodQtn =prodQtn+1;
        console.log(prodQtn);
        $('#prodQtn').val(prodQtn);
    });
</script>
`
	}
}