var usedata;
  $.ajax({
    type: "GET",
    url: "./legodata2.json",
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
        legoList += `<li><div class="img"><img src="${usedata[i].Photo}" alt="">`;
        legoList += `<div class="title"><img src="${usedata[i].TitlePhoto}" alt=""></div></div>`;
        legoList += `<div class="info"><strong>${usedata[i].Title}</strong>`;
        legoList += `<p>${usedata[i].Sentence}</p>`;
        legoList += `<p>${usedata[i].Go}</p></div></li>`
    }
    $('#section .legoproduct').append(`<ul class="llist">${legoList}</ul>`) 
  }
  