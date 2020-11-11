<?php
	$db = pg_connect("host=localhost dbname=postgres user=postgres password=123")
    or die('Не удалось соединиться: ' . pg_last_error());
?>