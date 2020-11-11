 <?php
include('db.php');
    //$_POST['nameselect']
    $oldvalue = $_POST['oldvalue'];
    $newvalue = $_POST['newvalue'];
    $oldvalue2 = $_POST['oldvalue2'];
    $newvalue2 = $_POST['newvalue2'];
        $numoldvalue = $_POST['numoldvalue'];
    $numnewvalue = $_POST['numnewvalue'];
    echo $oldvalue;
    echo $newvalue;
        // echo 'new ' . $numnewvalue . ' ' . $namnewvalue . ' old ' .$numoldvalue. ' ' .$namoldvalue;
         $query3 = "UPDATE clientele SET (num, nam) = ('$newvalue2', '$newvalue') WHERE num='$oldvalue2' and nam='$oldvalue'";
         $result3 = pg_query($db, $query3);
      if (!$result3) {
        echo json_encode(array("statusCode"=>201));
        echo "Error while executing the query: " . $query;
        exit;
      }

      echo json_encode(array("statusCode"=>200));
    ?>