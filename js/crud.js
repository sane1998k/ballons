
$(document).ready( function() 
   {
    getBuild();



$('input[name=update]').click( 
        function () 
        {
          // alert(` old: ${numoldvalue}, ${namoldvalue}; new ${numnewvalue}, ${namnewvalue}`)
                  $.ajax({
            type:'POST',
            url:'update.php',
            data:{namoldvalue:namoldvalue,
            namnewvalue:namnewvalue,
            numoldvalue:numoldvalue,
            numnewvalue:numnewvalue
          },
            success:function(data){
              var data = JSON.parse(data);
                if(data.statusCode == 200){
                  alert("Пользователь изменен")

                  // location.reload()
                }else{

                    alert("Ошибка добавления");
                } 
            }
        });

        })




    $('input[name=nameselect2]').keyup (
      function() {
        var named99 = $('#nameselect2').val();
        if (named99 !== '') {
        var numEl = parseInt(named99.match(/\d+/))
        var namEl = named99.replace(/[0-9]/g, '')
        namEl = namEl.trim()
        if (isNaN(numEl)) {numEl = ''}
        document.getElementById("num").value = numEl
        document.getElementById("nameselect2").value = namEl


      } else {
        document.getElementById("num").value = ''
      }
      }
      )


function onChangeTest(textbox) {
      console.log("New value: " + textbox.value + "\n" + "Old value: " + textbox.oldvalue);
}

    // обрабатываем событие нажатия на кнопку "Добавить новый товар"   
    $('input[name=add]').click( 
        function () 
        {
          if ((document.getElementById("num").value === '') || (document.getElementById("nameselect2").value === '')) {
            alert('Заполните все поля')
          } else {

           var article_title = $('#nameselect2').val();
           var num = $('.num').val();

           // отправляем AJAX запрос
           // $.ajax(
           //    {
           //       type: "POST",
           //       url: 'php/add.php',
           //       data: "article_title=" + article_title,
           //       success: function(response) 
           //       {
           //          if(response == "OK")
           //          {
           //             alert("Товар " + article_title + " добавлен!");
           //             location.reload();
           //          }
           //          else
           //          alert("Ошибка в запросе! Сервер вернул вот что: " + response);
           //       }
           //    }
           //    );

        $.ajax({
            type:'POST',
            url:'add.php',
            data:{article_title:article_title,
            num:num
          },
            success:function(data){
              var data = JSON.parse(data);
                if(data.statusCode == 200){
                  alert("Пользователь добавлен")
                  location.reload()
                }else{

                    alert("Ошибка добавления");
                } 
            }
        });
        }}
     );

    $('input[name=delete]').click( 
        function () 
        {
           var article_title = $('#nameselect2').val();
           var num = $('.num').val();
           // отправляем AJAX запрос
           // $.ajax(
           //    {
           //       type: "POST",
           //       url: 'php/add.php',
           //       data: "article_title=" + article_title,
           //       success: function(response) 
           //       {
           //          if(response == "OK")
           //          {
           //             alert("Товар " + article_title + " добавлен!");
           //             location.reload();
           //          }
           //          else
           //          alert("Ошибка в запросе! Сервер вернул вот что: " + response);
           //       }
           //    }
           //    );

        $.ajax({
            type:'POST',
            url:'delete.php',
            data:{article_title:article_title,
            num:num
          },
            success:function(data){
              var data = JSON.parse(data);
                if(data.statusCode == 200){
                  alert("Пользователь удалён")
                  location.reload()
                }else{

                    alert("Ошибка удаления");
                } 
            }
        });
        }
     );

   });

function removeDuplicateWords (s) {
  // your perfect code...
var str = s.split(";");
var result = [];
for(var i = 0; i < str.length - 1 ; i++){
    //if(result.indexOf(str[i]) == -1) result.push(str[i]);
    if(result.indexOf(str[i]) === -1){
      console.log(str[i]);
      result.push(str[i]);
    } 
}
 return result.join(";");
}

function didnt2() {
          var d = document.getElementById("nameselect22");
        var text = d.value;
        return text
}

function getBuild() {
      var nameselect22 = didnt2();
       $('#nameselect22').html("<option>загрузка...</option>"); // показываем что мол загружаем
        $('#nameselect22').attr('disabled', true);//делаем недоступным второй список
          $.post('getBuild2.php', {
              nameselect22:nameselect22}, function(data) {
                $('#nameselect22').html(data);//запрашиваем AJAXом данные, передаем выбранный параметр
                $('#nameselect22').attr('disabled', false);//снимаем блок со второго списка
            });
}



function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}