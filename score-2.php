<?php
//score-2.php Version1.0
//Sun 4 April 2017

$gameType=$_GET["gameType"];
$gameToPlayOther=$_GET["gameTargetOther"];
$player_1=$_GET["player_1"];
$player_2=$_GET["player_2"];
$player_3=$_GET["player_3"];
$noOfPlayers=$_GET["noOfPlayers"];

if ($player_1 == "")
   {
     $player_1 = "Player A";
   }
if ($player_2 == "")
   {
     $player_2 = "Player B";
   }
if ($player_3 == "")
   {
     $player_3 = "Player C";
   }

if ($gameType == "other")
   {
     $gameToPlay = $gameToPlayOther;
   }
else
   {
     $gameToPlay = $gameType;
   }


?>
<!DOCTYPE html>
<html>
 <head>
  <link rel="stylesheet" type="text/css" href="score.css">
  <script src="score.js"></script>
 </head>
   <body onload="setup_page(<?php echo $noOfPlayers; ?>)">
   <div id="wrapper">
   
   <!-- Sequence box -->
   <div id="seq_div">
        <!-- <div class="textClassDiv">player to throw:</div> -->
        <div id="seqTextOne">Player to throw:</div>
        <div class="inputClassDiv" id="nextThrowerId"><span id="nextThrower" ><?php echo $player_1; ?></span></div>
        <div id="hiddenPlayerSequence">1</div>
        <div id="hiddenNumberOfPlayers"><?php echo $noOfPlayers;?></div>
        <div id="hiddenGameToPlay"><?php echo $gameToPlay;?></div>  
        <div id="variousButtons">
             <button id="homePageButton" type="button" onclick="open_home_page()">Home</button>
             <button id="resetPage2Button" type="button" onclick="reset_page()">Reset</button>
        </div><!--variousButtons-->
   </div>
 
   <!--Back Button -->   
   <div id="back_div" id="homeButtonDiv">
      <!-- <button id="homePageButton" type="button" onclick="open_home_page()">Home Page</button> -->
   </div><!-- End back_div-->

   <!--Number of plyers-->   
   <!-- <div id="players_div">no of players</div> -->
    
   <!--Reset-->         
   <div id="reset_div">
      <!-- <button id="resetPage2Button" type="button" onclick="reset_page()">reset -->
   </div><!-- end reset div-->
  
   <!--Save results-->  
   <!-- <div id="save_div">save</div> -->

   <!-- p1_input_div -->
   <div id="p1_input_div">
     <!-- box 1 150/1600 AR = 3/2 -->
     <div id="p1NameDiv">
        <div class="inputClassDiv"><span id="playerNameOne" class="centerText"><?php echo $player_1; ?></span></div> 
     </div>
     
     <!-- box 2 50/1600 AR = 1/2 -->
     <div id="p1ThrowsDiv">
        <div class="inputClassDiv"><span id="p1ThrowsSoFar" class="centerText">0</span></div> 
     </div> 
   
     <!-- box 3 100/1600 AR = 2/2 -->
     <div id="p1NewScoreDiv">
        <div class="inputClassDiv"><input class="scoreInputField" id="p1ScoreInput" type="number" name="p1Score"></div> 
     </div> <!-- end of p1NewScoreDiv -->
  
    <!-- box 4 100/1600 AR = 2/2 -->
     <div id="p1ButtonDiv">
       <div class="inputClassDiv"><input type="button" id="buttonPlayer1" onclick="update_score(0)" value="Submit"></div> 
     </div> 
     
     <!-- box 5 100/1600 AR = 2/2 -->
     <div id="p1RemainDiv">
        <div class="inputClassDiv"><span id="p1Remain" class="centerText"><?php echo $gameToPlay; ?></span></div>  
     </div> 
  
 </div> <!-- End of p1_input_div -->


<!- P2 UNDER CONSTRUCTION  -->
    <!-- p2_input_div -->
   <div id="p2_input_div">
     <!-- box 1 150/1600 AR = 3/2 -->
     <div id="p2NameDiv">
          <div class="inputClassDiv"><span id="playerNameTwo" class="centerText"><?php echo $player_2; ?></span></div> 
     </div>
     
     <!-- box 2 50/1600 AR = 1/2 -->
     <div id="p2ThrowsDiv">
        <div class="inputClassDiv"><span id="p2ThrowsSoFar" class="centerText">0</span></div> 
     </div> 
   
     <!-- box 3 100/1600 AR = 2/2 -->
     <div id="p2NewScoreDiv">
       <div class="inputClassDiv"><input class="scoreInputField" id="p2ScoreInput" type="number" name="p2Score"></div> 
     </div> <!-- end of p2NewScoreDiv -->
  
    <!-- box 4 100/1600 AR = 2/2 -->
     <div id="p2ButtonDiv">
       <div class="inputClassDiv"><input type="button" id="buttonPlayer2" onclick="update_score(1)" value="Submit"></div> 
     </div> 
     
     <!-- box 5 100/1600 AR = 2/2 -->
     <div id="p2RemainDiv">
      <div class="inputClassDiv"><span id="p2Remain" class="centerText"><?php echo $gameToPlay; ?></span></div>  
     </div> 
  
 </div> <!-- End of p2_input_div --> 
<!- P2 UNDER CONSTRUCTION END -->

   
    
   <!- P3 UNDER CONSTRUCTION  -->
    <!-- p3_input_div -->
   <div id="p3_input_div">
     <!-- box 1 150/1600 AR = 3/2 -->
     <div id="p3NameDiv">
       <div class="inputClassDiv"><span id="playerNameThree" class="centerText"><?php echo $player_3; ?></span></div> 
     </div>
     
     <!-- box 2 50/1600 AR = 1/2 -->
     <div id="p3ThrowsDiv">
       <div class="inputClassDiv"><span id="p3ThrowsSoFar" class="centerText">0</span></div> 
     </div> 
   
     <!-- box 3 100/1600 AR = 2/2 -->
     <div id="p3NewScoreDiv">
       <div class="inputClassDiv"><input class="scoreInputField" id="p3ScoreInput" type="number" name="p3Score"></div> 
     </div> <!-- end of pNewScoreDiv -->
  
    <!-- box 4 100/1600 AR = 2/2 -->
     <div id="p3ButtonDiv">
       <div class="inputClassDiv"><input type="button" id="buttonPlayer3" onclick="update_score(2)" value="Submit"></div> 
     </div> 
     
     <!-- box 5 100/1600 AR = 2/2 -->
     <div id="p3RemainDiv">
       <div class="inputClassDiv"><span id="p3Remain" class="centerText"><?php echo $gameToPlay; ?></span></div>  
     </div> 
  
 </div> <!-- End of p3_input_div --> 
<!- P3 UNDER CONSTRUCTION END -->

   <div id="p1_history_div">
    <table id=table1 class="playerStatsTable">
     <tr id="p1row0"><td id="p1r0c0"></td><td id="p1r0c1"></td><td id="p1r0c2"></td><td id="p1r0c3"></td></tr>
     <tr id="p1row1"><td id="p1r1c0"></td><td id="p1r1c1"></td><td id="p1r1c2"></td><td id="p1r1c3"></td></tr>
     <tr id="p1row2"><td id="p1r2c0"></td><td id="p1r2c1"></td><td id="p1r2c2"></td><td id="p1r2c3"></td></tr>
     <tr id="p1row3"><td id="p1r3c0"></td><td id="p1r3c1"></td><td id="p1r3c2"></td><td id="p1r3c3"></td></tr>
     <tr id="p1row4"><td id="p1r4c0"></td><td id="p1r4c1"></td><td id="p1r4c2"></td><td id="p1r4c3"></td></tr>
     <tr id="p1row5"><td id="p1r5c0"></td><td id="p1r5c1"></td><td id="p1r5c2"></td><td id="p1r5c3"></td></tr>
     <tr id="p1row6"><td id="p1r6c0"></td><td id="p1r6c1"></td><td id="p1r6c2"></td><td id="p1r6c3"></td></tr>
     <tr id="p1row7"><td id="p1r7c0"></td><td id="p1r7c1"></td><td id="p1r7c2"></td><td id="p1r7c3"></td></tr>
     <tr id="p1row8"><td id="p1r8c0"></td><td id="p1r8c1"></td><td id="p1r8c2"></td><td id="p1r8c3"></td></tr>
     <tr id="p1row9"><td id="p1r9c0"></td><td id="p1r9c1"></td><td id="p1r9c2"></td><td id="p1r9c3"></td></tr>
     </table>   
   </div> <!--end p2_history_div -->      
 
  <div id="p2_history_div">
    <table id=table2 class="playerStatsTable">
     <tr id="p2row0"><td id="p2r0c0"></td><td id="p2r0c1"></td><td id="p2r0c2"></td><td id="p2r0c3"></td></tr>
     <tr id="p2row1"><td id="p2r1c0"></td><td id="p2r1c1"></td><td id="p2r1c2"></td><td id="p2r1c3"></td></tr>
     <tr id="p2row2"><td id="p2r2c0"></td><td id="p2r2c1"></td><td id="p2r2c2"></td><td id="p2r2c3"></td></tr>
     <tr id="p2row3"><td id="p2r3c0"></td><td id="p2r3c1"></td><td id="p2r3c2"></td><td id="p2r3c3"></td></tr>
     <tr id="p2row4"><td id="p2r4c0"></td><td id="p2r4c1"></td><td id="p2r4c2"></td><td id="p2r4c3"></td></tr>
     <tr id="p2row5"><td id="p2r5c0"></td><td id="p2r5c1"></td><td id="p2r5c2"></td><td id="p2r5c3"></td></tr>
     <tr id="p2row6"><td id="p2r6c0"></td><td id="p2r6c1"></td><td id="p2r6c2"></td><td id="p2r6c3"></td></tr>
     <tr id="p2row7"><td id="p2r7c0"></td><td id="p2r7c1"></td><td id="p2r7c2"></td><td id="p2r7c3"></td></tr>
     <tr id="p2row8"><td id="p2r8c0"></td><td id="p2r8c1"></td><td id="p2r8c2"></td><td id="p2r8c3"></td></tr>
     <tr id="p2row9"><td id="p2r9c0"></td><td id="p2r9c1"></td><td id="p2r9c2"></td><td id="p2r9c3"></td></tr>
     </table>   
   </div> <!--end p2_history_div -->  

  <div id="p3_history_div">
    <table id=table3 class="playerStatsTable">
     <tr id="p3row0"><td id="p3r0c0"></td><td id="p3r0c1"></td><td id="p3r0c2"></td><td id="p3r0c3"></td></tr>
     <tr id="p3row1"><td id="p3r1c0"></td><td id="p3r1c1"></td><td id="p3r1c2"></td><td id="p3r1c3"></td></tr>
     <tr id="p3row2"><td id="p3r2c0"></td><td id="p3r2c1"></td><td id="p3r2c2"></td><td id="p3r2c3"></td></tr>
     <tr id="p3row3"><td id="p3r3c0"></td><td id="p3r3c1"></td><td id="p3r3c2"></td><td id="p3r3c3"></td></tr>
     <tr id="p3row4"><td id="p3r4c0"></td><td id="p3r4c1"></td><td id="p3r4c2"></td><td id="p3r4c3"></td></tr>
     <tr id="p3row5"><td id="p3r5c0"></td><td id="p3r5c1"></td><td id="p3r5c2"></td><td id="p3r5c3"></td></tr>
     <tr id="p3row6"><td id="p3r6c0"></td><td id="p3r6c1"></td><td id="p3r6c2"></td><td id="p3r6c3"></td></tr>
     <tr id="p3row7"><td id="p3r7c0"></td><td id="p3r7c1"></td><td id="p3r7c2"></td><td id="p3r7c3"></td></tr>
     <tr id="p3row8"><td id="p3r8c0"></td><td id="p3r8c1"></td><td id="p3r8c2"></td><td id="p3r8c3"></td></tr>
     <tr id="p3row9"><td id="p3r9c0"></td><td id="p3r9c1"></td><td id="p3r9c2"></td><td id="p3r9c3"></td></tr>
     </table>   
   </div> <!--end p3_history_div -->  


<script>

  var p1ArrayOfP1ThrowsArray = [];
  var p1ThrowsArray = [];
  var p2ArrayOfP2ThrowsArray = [];
  var p2ThrowsArray = [];
  var p3ArrayOfP3ThrowsArray = [];
  var p3ThrowsArray = [];

  p1ThrowsArray = [0,'<?php echo $gameType?>'];
  p1ArrayOfP1ThrowsArray[0] = p1ThrowsArray;
  p2ThrowsArray = [0,'<?php echo $gameType?>'];
  p2ArrayOfP2ThrowsArray[0] = p2ThrowsArray;
  p3ThrowsArray = [0,'<?php echo $gameType?>'];
  p3ArrayOfP3ThrowsArray[0] = p3ThrowsArray;

  document.getElementById("buttonPlayer1").disabled = false;
  document.getElementById("buttonPlayer2").disabled = true;
  document.getElementById("buttonPlayer3").disabled = true;

  document.getElementById("p1ScoreInput").focus();
  document.getElementById("p1ScoreInput").select();  

  var rowsInTable = document.getElementById("table1").rows.length;
  

  function validateForm() 
  {
    var x = document.forms["formPlayer1"]["p1Score"].value;
    alert(x);
    if (x == "")
       {
         alert("Name must be filled out");
         return false;
       }
   
  }
</script> 
   </div> <!--Wrapper Div End -->
  </body>
</html>

























