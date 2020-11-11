<?php

include('db.php');
    //$_POST['nameselect']
    $ooo = $_POST['nameselect'];
    $ooo2 = $_POST['nameselect2'];
    $resString = '';#переменная для отправки ответа
    //get user data from the databases

        $query = "SELECT * FROM clientele";
    $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
    

    while($row = pg_fetch_array($result))
    {


//    $resString .= '<option value="'.$row["nam"].'">' . $row['nam'] . ';</option>';#формируем ответ для  списка (в javascript-части его уже ждут и загружают)
    $sub_array = array();
    // $sub_array['num'] = $row["num"];
    // $sub_array['nam'] = $row["nam"];
    //$sub_array['rec_n'] = $row["rec_n"];
    $resString .= '\t<option value="' . $row['num'] . ' ' . $row['nam'] . '"></option>\n';
    //$userData[] = $sub_array;
    // $userData[] = $sub_array;

    }

    
   

        //$userData = $query->fetch_assoc();

    

    
    
    //returns data as JSON format
    // $string_array = explode(";", $resString);
    // $final_array = array_unique($string_array);
    // $final_string = implode(";", $final_array);
    echo $resString;

?>