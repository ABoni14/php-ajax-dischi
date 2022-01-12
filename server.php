<?php
require_once __DIR__. "/database.php";

$filterDiscs = [];

if (isset($_GET['genre'])){
  foreach($discs as $disc){
    if ($disc['genre'] == $_GET['genre']){
      $filterDiscs[] = $disc;
    }
  }
} else if (isset($_GET['author'])){
  foreach($discs as $disc){
    if ($disc['author'] == $_GET['author']){
      $filterDiscs[] = $disc;
    }
  }
} else {
  $filterDiscs = $discs;
}

header('Content-Type: application/json; charset="UTF-8"');
echo json_encode($filterDiscs);
?>