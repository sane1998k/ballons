
  var arrr2 = new Object();
//let tableResult = document.getElementById("myTable");
var clicks = 0;
  let sum = new Object();



var amm = new Object();

function exportToPdf() {
  document.getElementById('start_date').hidden = true;
    document.getElementById('end_date').hidden = true;
  document.getElementById('nameselect20').hidden = true;
  document.getElementById('getUser').hidden = true;

  //document.getElementById('exportBTN').hidden = true;
  window.print();
}




function didnt2() {
          var d = document.getElementById("nameselect20");
        var text = d.options[d.selectedIndex].value;
        return text
}

$(document).ready(function(){

        getBuild();
  // document.getElementById('textResult').hidden = true;
var el5 = document.getElementById('exportBTN');
    $('#getUser').on('click',function(){


          sum['com9t'] = 0;


        var start_date = $('#start_date').val();
        var end_date = $('#end_date').val();
        var nameselect20 = didnt2();
        $.ajax({
            type:'POST',
            url:'php/getData.php',
            dataType: "json",
            data:{start_date:start_date,
              end_date:end_date,
            nameselect20:nameselect20},
            success:function(data){
                if(data.status == 'ok'){
                  el5.style.display = 'initial';
                  // for (var bbc in data.result2) {
                  //   amm.push(data.result2[bbc])
                  // }
                  amm = data.result2
                 // console.log(typeof data.resul2)
                  del();
                  del2();
                  main(data.result, amm);
                  // document.getElementById('textResult').hidden = false;
                    //document.getElementById("myTable").appendChild(buildTable2(arrr2, sumResult));
                      arrr2 = []

                }else{

                    alert("Данные не найдены...");
                } 
            }
        });

 

          
    });
});

function removeDups(s) {
let charArray = s.split("");
  for (let i = 0; i < charArray.length; i++) {
    for (let j = i + 1; j < charArray.length; j++)
      if (charArray[i] == charArray[j]) {
        charArray.splice(j, 1);
        j--;
      }
  }
  return charArray.join("");
}




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

function getBuild() {
          var start_date = $('#start_date').val();
          var end_date = $('#end_date').val();
        var nameselect20 = didnt2();
        $('#nameselect20').html("<option>загрузка...</option>"); // показываем что мол загружаем
        $('#nameselect20').attr('disabled', true);//делаем недоступным второй список
          $.post('php/getBuild.php', {start_date:start_date,
            end_date:end_date,
              nameselect20:nameselect20}, function(data) {//запрашиваем AJAXом данные, передаем выбранный параметр
                $('#nameselect20').html(data);//данные загружаем во второй список
                $('#nameselect20').attr('disabled', false);//снимаем блок со второго списка
            });
}

function getUnique(arr){
    var rez = new Array();
    rez.push(arr[0].idp);
    arr.forEach(function(item,i){
    if(!(rez.indexOf(item.idp) + 1))
        rez.push(item.idp);
    });
    return rez;
}



function getValue(array, search) {
  var i = array.length;
  while (i--) {
      if (array[i].height === search) {
         return array[i];
      }
  }
}

// food
// function buildTable(data, names, food) {
function buildTable(data, names) {
    var table = document.createElement("table");
    table.className="gridtable";
    table.id = "tbl";
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
 
    var headRow2 = document.createElement("tr");
  
      var tdTest = document.createElement("td");
      tdTest.colSpan = 1;
      


      var thHead = document.createElement("th");
      var thHeadTwo = document.createElement("th");
      // var arrs = ["задание, кг", "факт, кг"]

      // th.appendChild(document.createTextNode(names[0][`com${ i }n`]));
      // th.colSpan = 1;


 

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");


    // td1.appendChild(document.createTextNode(Number(parseFloat(food[`com${i}t`]).toFixed(3))))
    // td2.appendChild(document.createTextNode(Number(parseFloat(food[`com${i}f`]).toFixed(3))))

   // td1.appendChild(document.createTextNode(parseFloat(Math.floor(food['com1t'] * 100) / 100 )))
   // td2.appendChild(document.createTextNode(parseFloat(Math.floor(food['com1f'] * 100) / 100 )))
    //tr1.appendChild(td1); 

  





        // thHead.appendChild(document.createTextNode(arrs[0]))
        // thHeadTwo.appendChild(document.createTextNode(arrs[1]))


        //headRow.appendChild(thHead);
        //headRow.appendChild(thHeadTwo);
        // headRow2.appendChild(th); 
      
      // th.colSpan = 1;
      var arrsss = ['дата', 'доза', 'тара', 'вес', 'остаток', 'цена', 'клиент', 'Номер цилиндра']
      for (var i = 0; i <= 7; i++) {
        var th=document.createElement("th");
         th.appendChild(document.createTextNode(arrsss[i]));
         th.colSpan = 1;
         headRow2.appendChild(th);
      }
    
     // headRow2.appendChild(th); 
     
      //console.log(el['com1n'])

      
      
      // if (ell === "Height") {
      // th.colSpan = 2;
      // }


    // for (var i = 0; i < names.length; i++) {
      
    
    //   var th=document.createElement("th");
    //   // if (ell === "Height") {
    //   // th.colSpan = 2;
    //   // }
    //   th.appendChild(document.createTextNode(names[i]['com'+i+'n']));
    //   headRow2.appendChild(th);
    // }
          




    thead.appendChild(headRow2);
    //thead.appendChild(headRow);
    table.appendChild(thead);
    // table.appendChild(tfoot); 
    // /alert(data)
        
for (var key in data) {
    // skip loop if the property is from prototype
    if (!data.hasOwnProperty(key)) continue;

    var obj = data[key];
    var tr = document.createElement("tr");
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;

        // your code
        //alert(prop + " = " + obj[prop]);
        

              var td = document.createElement("td");
        td.colSpan = 1;

        td.appendChild(document.createTextNode(obj[prop]))
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}







    table.appendChild(tbody);

    return table;
}


window.onload=function() {
        // var start_date = '2020-07-14';
        // $.ajax({
        //     type:'POST',
        //     url:'php/getData.php',
        //     dataType: "json",
        //     data:{start_date:start_date},
        //     success:function(data){
        //       amm = data.result;
        //         if(data.status == 'ok'){

                  

        //         }else{

        //             alert("User not found...");
        //         } 
        //     }
        // });

}

function del() {
    for (var i = 0; i <= 400; i++) {
          var elem = document.getElementById('tbl');
          if (elem !== null) {
    elem.parentNode.removeChild(elem);


  }
    }

    return false;
}

function del2() {
    for (var i = 0; i <= 20; i++) {
          var elem = document.getElementById('tbl2');
          if (elem !== null) {
    elem.parentNode.removeChild(elem);


  }
    }

    return false;
}

function sumOfAllElements(arr1, arr2) {
  sumOfArr1 = arr1.reduce((sum, el) => sum + el, 0);
  sumOfArr2 = arr2.reduce((sum, el) => sum + el, 0);
  
  return sumOfArr1 + sumOfArr2;
}

function sum11(obj) {
 // return Object.keys(obj).reduce((sum,key, index, arras)=>sum+=parseFloat(obj[key]||0),0);
 return Object.keys(obj).reduce((sum1,key, index, arras)=>sum1+=parseFloat(sum1[key]||0),0);
}

function sumBodyFrom( obj ) {
  var sum1 = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum1 += parseFloat( obj[el] );
    }
  }

  return sum1;
}





function convert_to_float(a) { 
          
        // Type conversion 
        // of string to float 
        var floatValue = +(a); 
          
        // Return float value 
        return floatValue;  
    }  




function main(arrrr, names) {
  









  var mainResult = 0;

  var t = 0
  var arrr = new Array();

// for (var i = 0; i < 10; i++) {

arrr = arrrr;

arrr2 = names;



// food
  document.getElementById("content").appendChild(buildTable(arrr, arrr2));

  arrr = []

}
// MOUNTAINS.forEach(function(ell) {
//   arrrr += ell.com1t
// });
// }
var dataNow = new Date();
jQuery.datetimepicker.setLocale('ru');
   // $('#start_date').datetimepicker({
   //        //minDate: '2020-07-20',
   //        timepicker: false,
   //        datepicker: true,
   //        format: 'Y-m-d', // formatDate
   //        hours12: false,
   //        step: 1
   //    });
  document.getElementById('start_date').value = `${dataNow.getFullYear()}-${('0'+(dataNow.getMonth()+1)).slice(-2)}-${dataNow.getDate()}`;
   jQuery.datetimepicker.setLocale('ru');
//    $('#end_date').datetimepicker({
// //          startDate: '+1971/05/01',
//           //minDate: '2020-07-20',
//           timepicker: false,
//           datepicker: true,
//           format: 'Y-m-d', // formatDate
//           hours12: false,
//           step: 1
//        //   value: new Date().getFullYear()
//       });

   document.getElementById('end_date').value = `${dataNow.getFullYear()}-${('0'+(dataNow.getMonth()+1)).slice(-2)}-${dataNow.getDate()}`;

    document.getElementById('exportBTN').onclick = function() {
        var el1 = document.getElementById('start_date');
        var el11 = document.getElementById('end_date');
        var el2 = document.getElementById('getUser');
        var el3 = document.getElementById('nameselect20');

        var el5 = document.getElementById('exportBTN');
        var el6 = document.getElementById('from');
        var el7 = document.getElementById('to');
        var el8 = document.getElementById('feturemenu');
        var el9 = document.getElementById('content__head');
        el1.style.display === 'none' ? el1.style.display = 'initial' : el1.style.display = 'none';
        el11.style.display === 'none' ? el11.style.display = 'initial' : el11.style.display = 'none';
        el2.style.display === 'none' ? el2.style.display = 'initial' : el2.style.display = 'none';
        el3.style.display === 'none' ? el3.style.display = 'initial' : el3.style.display = 'none';

        el5.style.display === 'none' ? el5.style.display = 'initial' : el5.style.display = 'none';
        el6.style.display === 'none' ? el6.style.display = 'initial' : el6.style.display = 'none';
        el7.style.display === 'none' ? el7.style.display = 'initial' : el7.style.display = 'none';
        el8.style.display === 'none' ? el8.style.display = 'initial' : el8.style.display = 'none';
        el9.style.display === 'none' ? el9.style.display = 'initial' : el9.style.display = 'none';
        window.print();
        setTimeout(
  () => {
    el1.style.display = 'initial';
    el11.style.display = 'initial';
    el2.style.display = 'initial';
    el3.style.display = 'initial';
    el5.style.display = 'initial';
    el6.style.display = 'initial';
    el7.style.display = 'initial';
        el8.style.display = 'initial';
        el8.style.textAlign = 'center';
    el9.style.display = 'flex';
    el9.style.justifyContent = 'center'
    el9.style.padding = '10px'
  },
  1 * 100
);
    }
   