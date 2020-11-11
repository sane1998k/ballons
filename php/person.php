<!DOCTYPE html>
<html lang="en">
<head>
	<script src="../js/jquery.min1.js"></script>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../css/person.css">
	<title>Document</title>
</head>
<body>
	<div class="wrapper">
		<head class="head">
			<div class="container__head ">
				<div class="head__body">
					<div class="head__text">
						<a href="../index.php">Отчёт</a>
					</div>
				</div>
			</div>
		</head>

		<div class="content">
			<div class="main">
				<div class="container">
					<div class="main__row">
						<div class="main__body">
							<p>Добавить клиента</p>
						</div>
						<div class="form">
							<input name="nameselect2" id="nameselect2" list="nameselect22" placeholder="Название" autocomplete="off" />
							<input type="text" name="num" class="num" id="num" placeholder="Номер" onkeypress='validate(event)' autocomplete="off">
			            <div class="btns">
			            	<input type="button" name="add" class="btnAdd button5" id='btnAdd' value="Добавить">
			            </div>
			            
			            <input type="button" name="delete" class="button5" value="Удалить">
			            <datalist id="nameselect22"></datalist>
			            <datalist id="nameselect222"></datalist>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script src="../js/crud.js"></script>
</body>
</html>