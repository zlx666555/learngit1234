function pageInit(){bannerBox=$(".goods-content-banner").find(".swiper-wrapper"),bannerSlide=bannerBox.find(".swiper-slide").clone(!1),imgBox=$(".img-box"),contentBox=$(".goods-content-text");var e=sessionStorage.getItem("goodsID");getContentData(e)}function getContentData(e){$.ajax({url:"http://datainfo.duapp.com/shopdata/getGoods.php",type:"post",data:"goodsID="+e,dataType:"JSONP",success:function(e){console.log(e),loadPageData(e)}})}function loadPageData(e){e=e[0];var n=JSON.parse(e.imgsUrl),o=JSON.parse(e.goodsBenUrl),t=e.goodsName,a=e.price,i=e.discount,r=a,p=e.buynumber,d=e.detail.split("。");0!=i&&(i=1*i,r=1*a/(i/10),r=r.toFixed(2)),bannerBox.empty(),imgBox.empty(),contentBox.empty();for(var s in o){var g=bannerSlide.clone(!1);g.find("img").attr("src",o[s]),bannerBox.append(g)}$(".goods-name").text(t),$(".price").find("span").text(a),$(".price").find("del").text(r),$(".shop-number").find("span").text(p);for(var c in n){var x=$("<img />");x.attr("src",n[c]),imgBox.append(x)}new Swiper(".swiper-container",{autoplay:1e3,loop:!0});for(var l in d){var m=$("<li></li>");m.text(d[l]),contentBox.append(m)}}var bannerBox,bannerSlide,imgBox,contentBox;pageInit();