<?php
include('db.php');
    $data = array();

    $date = $_POST['start_date'] ?? '2020-07-14';
    

    //$_POST['nameselect']
    $ooo = $_POST['nameselect'];
    $ooo2 = $_POST['nameselect20'];
    //get user data from the databases
    if ($ooo2 == "Все имена") {
        $query = "SELECT * FROM glav WHERE dat BETWEEN '".$_POST['start_date']." 00:00:00' AND '".$_POST['end_date']." 23:59:59'";
    } else {
    $query = "SELECT * FROM glav WHERE client = '".$ooo2."' AND dat BETWEEN '".$_POST['start_date']." 00:00:00' AND '".$_POST['end_date']." 23:59:59'";
}
    $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
    if(pg_num_rows($result)){
    while($row = pg_fetch_array($result))
    {

    $sub_array = array();
    $sub_array2 = array();

    $sub_array['dat'] = $row["dat"];
    $sub_array['dose'] = $row["dose"];

//    $sub_array['mix'] = $row["mix"];

    //$sub_array['otv_f'] = $row["otv_f"];
    
    //$sub_array['weig_par_t'] = $row["weig_par_t"];
    //$sub_array['weig_par_f'] = $row["weig_par_f"];

    $sub_array['tare'] = $row["tare"];
    $sub_array['weight'] = $row["weight"];

    $sub_array['remainder'] = $row["remainder"];
    $sub_array['price'] = $row["price"];

    $sub_array['client'] = $row["client"];
    $sub_array['cylinderNumber'] = $row["cylinderNumber"];


if ($ooo == "linea") {
   
}


    if ($ooo == "linea") {

}



    $userData[] = $sub_array;
    $userData2[] = $sub_array2;

    

{
//     $d = explode(" ",$d);
// unset($d[1]);
// $d = implode(" ",$d);
//         echo $d;


}

        }   
    //echo print_r($b);
        //$userData = $query->fetch_assoc();
        $data['status'] = 'ok';
        $data['result'] = $userData;
        $data['result2'] = $userData2;
    }else{
        $data['status'] = 'err';
        $data['result'] = '';
    }
    
    //returns data as JSON format
    echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>