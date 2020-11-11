<!DOCTYPE html>
<html>
<head>
  <script src="js/jquery.min1.js"></script>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
  <link href="css/jquery.datetimepicker.min.css" rel="stylesheet" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <script src="js/bootstrap-datepicker.js"></script>
  <script src="js/jquery.datetimepicker.full.min.js"></script>
	<title>Отчёты</title>
        <link rel="icon" href="/images/favicon.ico">
</head>
<body>

  <div class="wrapper">
    <div class="content">
      <div class="container">
        <div class="content__row">
          <div class="content__head" id = 'content__head' style="display: flex; justify-content: center; background-color: #0B6FA4; padding: 10px;">
            <a href="php/person.php" class="nameee" style="text-align: center; font-size: 35px;  text-decoration: none; color: #fff;">Добавить клиента</a>
          </div>
          <div id="feturemenu">
            <p href="#" class="nameee" style="text-align: center; font-size: 35px; text-decoration: none; display: block;color: #000; margin: 10px;">Отчёт</p></div>
          <div class="content__body">
            <p id = "from">С</p>
            <input type="date" name="start_date" id="start_date" class="form-control" autocomplete="off" placeholder = "Дата" />
            <p id = "to">По</p>
            <input type="date" name="start_date" id="end_date" class="form-control" autocomplete="off" placeholder = "Дата"/>
            <select name="nameselect20" id="nameselect20" onchange="didnt2();"> 
              <option VALUE="rec_n">Все цеха</option>
            </select>

            <input type="button" id="getUser" class = "button button5" value="Поиск"/>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>


<div class="exportDiv">
<input type="button" id = "exportBTN" class="button button5" value="Экспортировать в PDF" style="display: none">
</div>
<div id="content"></div>

<div id="myTable">

<!-- here goes our data! -->
</div>


<script src="js/fun.js"></script>

<script>if (!window.Promise) window.Promise = {prototype: null}; // Needed for jspdf IE support</script>
<!-- 1.3.5 (no custom fonts), 1.4.1, 1.5.3 -->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.debug.js"></script>-->
<script src="examples/libs/jspdf.debug.js"></script>
<script src="examples/mitubachi-normal.js"></script>

<script src="examples/libs/faker.min.js"></script>
<script src="dist/jspdf.plugin.autotable.js"></script>

<script src="examples/examples.js"></script>

<script src="js/"></script>

<!-- Some scripts to make the examples work nicely -->
<script>



</script>
</body>
</html>