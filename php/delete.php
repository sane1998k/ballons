 <?php
include('db.php');
    //$_POST['nameselect']
    $value = $_POST['article_title'];
    $num = $_POST['num'];

    $query2 = "SELECT * FROM clientele";
    $result2 = pg_query($query2) or die('Ошибка запроса: ' . pg_last_error());;
    while($row = pg_fetch_array($result2))
    {
        if ($value == $row['nam'] && $num == $row['num']) {
        echo json_encode(array("statusCode"=>200));
        $test = 1;
        } 
    }

    if ($test == 2) {
        echo json_encode(array("statusCode"=>201));
        exit;
    }

    $query = "DELETE FROM clientele WHERE num='$num' AND nam='$value'";
    $result = pg_query($db, $query);
      if (!$result) {
        echo json_encode(array("statusCode"=>201));
        exit;
      }
      //echo json_encode(array("statusCode"=>200));
    ?>