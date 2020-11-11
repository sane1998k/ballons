 <?php

     include('db.php');
    //$_POST['nameselect']
    $value = $_POST['article_title'];
    $num = $_POST['num'];
    $query2 = "SELECT * FROM clientele";
    $result2 = pg_query($query2) or die('Ошибка запроса: ' . pg_last_error());;
    while($row = pg_fetch_array($result2))
    {
        if ($value == $row['nam'] || $num == $row['num']) {
         // $query3 = "UPDATE clientele SET num='$value', nam='$value' WHERE num='$value' AND nam='$value'";
         // $result3 = pg_query($db, $query3);
        echo json_encode(array("statusCode"=>201));
        exit;
        }
    }
    $query = "INSERT INTO clientele(num,nam) VALUES('$num','$value')";
    $result = pg_query($db, $query);
      if (!$result) {
        echo json_encode(array("statusCode"=>201));
        echo "Error while executing the query: " . $query;
        exit;
      }

      echo json_encode(array("statusCode"=>200));
    ?>