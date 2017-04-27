<?php
//Version1.0
//Sun 23 Oct 2016

?>
<!DOCTYPE html>
<html>
 <head>
  <!-- <link rel="stylesheet" type="text/css" href="darts-score.css"> -->
  <link rel="stylesheet" type="text/css" href="darts-score-page-1.css">
  <script src="darts-score.js" type="text/javascript"></script>
 </head>

  <body onload="setup_page()">
   <div id="wrapper">
    <div id="selection-div"> 
    <form name="myForm" action="score-2.php" onsubmit="return validateForm()" method="get">
       <table id="table-select-game">
         
         <tr>
             <td>501</td>
             <td><input id="input_radio_1" type="radio" name="gameType" value="501" checked></td>
             <td>Default</td>
         </tr>
         
         <tr>
             <td>301</td>
             <td><input id="input_radio_2" type="radio" name="gameType" value="301"></td>
             </td><td></td>
         </tr>
          
         <tr>
            <td>Other</td>
            <td><input id="input_radio_3" type="radio" name="gameType" value="other"></td></td>
            <td></td>
         </tr>      

         <tr>
              <td>Other target</td>
              <td><input id="gameTargetOther" type="text" name="gameTargetOther" value=""></td>
              <td>(1 to 9999)</td>
         </tr>
         <tr>
              <td>Players</td>
              <!-- <td><input id="numberOfPlayers" type="text" name="numberOfPlayers" value=""></td> -->
              <td>
                 <select id="numberOfPlayers" onchange="addNameForm()" name="noOfPlayers">
                   <option value="1"  selected>1</option>
                   <option value="2">2 </option>
                   <option value="3">3</option>
                 </select>
              </td> 
              <td>(1 to 3)</td>
         </tr>

         <tr id="player_1_tr">
              <td>Player 1</td>
              <td><input id="player_1" type="text" name="player_1" value=""></td>
              <td></td>
         </tr>
         <tr id="player_2_tr">
              <td>Player 2</td>
              <td><input id="player_2" type="text" name="player_2" value=""></td>
              <td></td>
         </tr>      
         <tr id="player_3_tr">
              <td>Player 3</td>
              <td><input id="player_3" type="text" name="player_3" value=""></td>
              <td></td>
         </tr>    


         <tr>
              <td></td>
              <td><input id="input_submit" type="submit" value="Submit"> </td>
              <td></td>
         </tr>
         <tr>
              <td></td>
              <td><input id="input_reset" type="reset"></td>
         </tr>  
  
       </table> <!--Table select end -->
               
    </form> 
    </div> <!-- End selection-div -->
<div id="demo"></div>
   </div> <!--Wrapper Div End -->
  </body>
</html>
