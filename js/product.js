var usedata;
  $.ajax({
    type: "GET",
    url: "./legodata.json",
    beforeSend: function (xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    },
    success: function (data) {
      usedata = data;
      lego();
    },
    error: function (abc) {
      alert(abc.status + "오류발생");
    },
  })

  
  function lego() {
    var legoList = "";
    for (let i in usedata) {
        var price = usedata[i].Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') //정규표현식은 그떄마다 찾아쓰기
        legoList += `<li><div class="img"><img src="${usedata[i].Photo}" alt=""></div>`;
        legoList += `<div class="info"><strong>${usedata[i].New}</strong>`;
        legoList += `<p>${usedata[i].Title}</p>`;
        legoList += `<p>${price}원</p><p>장바구니 담기</p></div></li>`
    }
    $('#section .legoproduct').append(`<ul class="llist">${legoList}</ul>`) 
  }
  