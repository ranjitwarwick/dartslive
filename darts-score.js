function setup_page()
{
  var browser_width = window.innerWidth;
  var browser_height = window.innerHeight;
  var browser_ar = browser_width / browser_height;
   
  wrapper_width = browser_width * 0.9;
  wrapper_height = wrapper_width / browser_ar;
  document.getElementById("wrapper").style.width = wrapper_width + "px"; 
  document.getElementById("wrapper").style.height = wrapper_height + "px"; 
  document.getElementById("gameTargetOther").style.width = "50px";
  document.getElementById("gameTargetOther").style.height = "10px";
  document.getElementById("gameTargetOther").style.fontSize = "12px";  
  document.getElementById("selection-div").style.width = "300px";
  
  //document.getElementById("numberOfPlayers").style.fontSize = "12px";  
  document.getElementById("player_1").style.width = "50px";
  document.getElementById("player_2").style.width = "50px";
  document.getElementById("player_3").style.width = "50px";
  document.getElementById("player_2_tr").style.display = "none"; 
  document.getElementById("player_3_tr").style.display = "none";


  wrapper_size = object_details_rectangle("wrapper");
  wrapper_ar = wrapper_size[0] / wrapper_size[1];

  
  
  //table size
  table_width =  wrapper_size[0] * 0.8;
  table_height =  wrapper_size[1] * 0.8;
  //document.getElementById("table-select-game").style.width = "10px";
  
  
  //document.getElementById("table-select-game").style.fontSize = "10px";
  var x = document.getElementById("table-select-game").rows[0].cells;
  x[2].style.fontSize = "10px";
  var x = document.getElementById("table-select-game").rows[3].cells;
  x[2].style.fontSize = "10px";
  //document.getElementById("table-select-game").style.height = "200px";
  //document.getElementById("table-select-game").style.width = "200px";
  //document.getElementById("gameTargetOther").style.width = "50px";
  //document.getElementById("input_radio_1").style.transform = "scale(0.5)";
  //document.getElementById("input_radio_2").style.transform = "scale(0.5)";
  //document.getElementById("input_radio_3").style.transform = "scale(0.5)";
  create_html_for_page_ajax(wrapper_size[0],wrapper_size[1]);
}

// ---------------------------- Setup page 2 -------------------------------

function setup_page_2()
{
  var browser_width = window.innerWidth;
  var browser_height = window.innerHeight;
  var browser_ar = browser_width / browser_height;
   
  wrapper_width = browser_width * 0.95;
  wrapper_height = wrapper_width / browser_ar;
  document.getElementById("wrapper").style.width = wrapper_width + "px"; 
  document.getElementById("wrapper").style.height = wrapper_height + "px";

  wrapper_ar = wrapper_width / wrapper_height;

  if (browser_ar >= 1)
     {
       // score_div and keypad_div side by side 

     }
  else
     {
       // score_div and keypad_div stacked 

     }

  score_div_w =  (wrapper_width / 2) * 0.98;
  score_div_h =  (wrapper_height) * 0.98;
  keypad_div_w = score_div_w;
  keypad_div_h = score_div_h;
   
  document.getElementById("score-div").style.width = score_div_w + "px";
  document.getElementById("score-div").style.height = score_div_h + "px";
  document.getElementById("keypad-div").style.width = keypad_div_w + "px";
  document.getElementById("keypad-div").style.height = keypad_div_h + "px";

  document.getElementById("keypad-container").style.width = (keypad_div_w * 0.98) + "px";
  document.getElementById("keypad-container").style.height = (keypad_div_h * 0.98) + "px"; 

  //LCD width and height (width=0.5 height=0.1 (of keypad-div)
  LCD_w = keypad_div_w * 0.5;
  LCD_h = keypad_div_h * 0.1;

  document.getElementById("LCD-display").style.width = LCD_w + "px";
  document.getElementById("LCD-display").style.height = LCD_h + "px"; 

  LCD_display_ar = 4.75;
  LCD_display_w = keypad_div_w / 2;
  LCD_display_h = LCD_display_w / LCD_display_ar;
  LCD_display_text_font_size = LCD_display_h * 0.8;
  document.getElementById("LCD-display").style.fontSize = LCD_display_text_font_size + "px"; 
  

  document.getElementById("LCD-display").style.width = LCD_display_w + "px";
  document.getElementById("LCD-display").style.height = LCD_display_h + "px";


  keypad_buttons_wrapper_ar = 1;
  keypad_buttons_wrapper_w = document.getElementById("keypad-container").style.width;
  x=parseInt(keypad_buttons_wrapper_w);
  keypad_buttons_wrapper_w = x * 0.6;
  

  document.getElementById("keypad-buttons-wrapper").style.width = keypad_buttons_wrapper_w + "px";
  document.getElementById("keypad-buttons-wrapper").style.height = keypad_buttons_wrapper_w + "px";
  
  //constants
   buttons_per_row = 3;
   buttons_per_col = 4;
  //ratio of keyboard wrapper to button 15/100
  button_to_wrapper_ratio = 15 / 100;
  outer_padding_ratio = 25/100;
  gap_between_buttons_ratio = (5/100) / 2;

  padding_w = keypad_buttons_wrapper_w * outer_padding_ratio;
  gap_w = keypad_buttons_wrapper_w * gap_between_buttons_ratio;

  button_w = keypad_buttons_wrapper_w * button_to_wrapper_ratio;
  button_h= button_w;
  //total_buttons_length
  var total_buttons_width = button_w * buttons_per_row;
  var total_unused_width = keypad_buttons_wrapper_w - total_buttons_width;
   
  var total_buttons_height = button_w * buttons_per_col;
  var total_unused_height = keypad_buttons_wrapper_w - total_buttons_height;
  var top_padding_h_ratio = 15/100;
  var padding_h = keypad_buttons_wrapper_w * top_padding_h_ratio;
  var button_gap_h_ratio = (2/100);
  var gap_h = keypad_buttons_wrapper_w * button_gap_h_ratio;


  //font size adjustments
  var  numbered_buttons_array= document.getElementsByClassName('keypad-button-text'),
         i = numbered_buttons_array.length;
    numbered_button_font_size = button_w * 0.8;
    while(i--) 
    {
        numbered_buttons_array[i].style.fontSize =  numbered_button_font_size + "px";
    } 

  
  reset_cancel_button_font_size = button_w * 0.3;
  document.getElementById("keypad-button-reset-text").style.fontSize = reset_cancel_button_font_size + "px";
  document.getElementById("keypad-button-cancel-text").style.fontSize = reset_cancel_button_font_size + "px";

  vertical_align_adjust = button_w * 0.3;
  document.getElementById("keypad-button-reset-text").style.top = vertical_align_adjust + "px";
  document.getElementById("keypad-button-cancel-text").style.top = vertical_align_adjust + "px";
   
  x_pos_col_1 = padding_w;
  x_pos_col_2 = padding_w + button_w + gap_w;
  x_pos_col_3 = padding_w + button_w + gap_w + button_w + gap_w;

  y_pos_row_1 = padding_h;
  y_pos_row_2 = padding_h + button_h + gap_h;
  y_pos_row_3 = padding_h + button_h + gap_h + button_h + gap_h;
  y_pos_row_4 = padding_h + button_h + gap_h + button_h + gap_h + button_h + gap_h;

  //button 1
  x_pos =  x_pos_col_1;
  y_pos = y_pos_row_1;
  document.getElementById("keypad-button-1").style.left = x_pos + "px";
  document.getElementById("keypad-button-1").style.top = y_pos + "px";

  //button 2
  x_pos = x_pos_col_2;
  y_pos = y_pos_row_1;   
  document.getElementById("keypad-button-2").style.left = x_pos + "px";
  document.getElementById("keypad-button-2").style.top = y_pos + "px";

  //button 3
  x_pos = x_pos_col_3;
  y_pos = y_pos_row_1;   
  document.getElementById("keypad-button-3").style.left = x_pos + "px";
  document.getElementById("keypad-button-3").style.top = y_pos + "px";

  //button 4
  x_pos = x_pos_col_1;
  y_pos = y_pos_row_2;  
  document.getElementById("keypad-button-4").style.left = x_pos + "px";
  document.getElementById("keypad-button-4").style.top = y_pos + "px";

  //button 5
  x_pos = x_pos_col_2;
  y_pos = y_pos_row_2;
  document.getElementById("keypad-button-5").style.left = x_pos + "px";
  document.getElementById("keypad-button-5").style.top = y_pos + "px";

  //button 6
  x_pos = x_pos_col_3;
  y_pos = y_pos_row_2;
  document.getElementById("keypad-button-6").style.left = x_pos + "px";
  document.getElementById("keypad-button-6").style.top = y_pos + "px";

  //button 7
  x_pos = x_pos_col_1;
  y_pos = y_pos_row_3;
  document.getElementById("keypad-button-7").style.left = x_pos + "px";
  document.getElementById("keypad-button-7").style.top = y_pos + "px";

  //button 8
  x_pos = x_pos_col_2;
  y_pos = y_pos_row_3;
  document.getElementById("keypad-button-8").style.left = x_pos + "px";
  document.getElementById("keypad-button-8").style.top = y_pos + "px";

  //button 9
  x_pos = x_pos_col_3;
  y_pos = y_pos_row_3;
  document.getElementById("keypad-button-9").style.left = x_pos + "px";
  document.getElementById("keypad-button-9").style.top = y_pos + "px";

  //button reset
  x_pos = x_pos_col_1;
  y_pos = y_pos_row_4;
  document.getElementById("keypad-button-reset").style.left = x_pos + "px";
  document.getElementById("keypad-button-reset").style.top = y_pos + "px";
  
  //button 0
  x_pos = x_pos_col_2;
  y_pos = y_pos_row_4;
  document.getElementById("keypad-button-0").style.left = x_pos + "px";
  document.getElementById("keypad-button-0").style.top = y_pos + "px";

  //button cancel
  x_pos = x_pos_col_3;
  y_pos = y_pos_row_4;
  document.getElementById("keypad-button-cancel").style.left = x_pos + "px";
  document.getElementById("keypad-button-cancel").style.top = y_pos + "px";


  var  keypad_array= document.getElementsByClassName('keypad_button_class'),
         i = keypad_array.length;

    while(i--) 
    {
        keypad_array[i].style.width =  button_w + "px";
        keypad_array[i].style.height =  button_w + "px";
    }
 


  document.getElementById("keypad-button-enter").style.width = LCD_display_w + "px";
  document.getElementById("keypad-button-enter").style.height = LCD_display_h + "px";
  document.getElementById("keypad-button-enter").style.fontSize = LCD_display_text_font_size + "px"; 
 
  //wrapper_size = object_details_rectangle("wrapper");
  //wrapper_ar = wrapper_size[0] / wrapper_size[1];
  //create_html_for_page_ajax(wrapper_size[0],wrapper_size[1]);

// -------------------- Score Div Setup ------------------------------//

//all divs inside are based on the following 2 dimensions: score_div_w and score_div_h

// player turn Div

var player_turn_ar = 766 / 317;
var player_turn_scale_w = 200 / 766;
var player_turn_scale_h = 80 / 317;
var player_turn_w = player_turn_scale_w * score_div_w;
var player_turn_h = player_turn_w / player_turn_ar;
document.getElementById("player_turn").style.width = player_turn_w + "px";
document.getElementById("player_turn").style.height = player_turn_h + "px";


// #new-game-div, #save-data-div,#throws-count
// various divs of equal size

var various_divs_ar = 100 /80;
var various_divs_scale_w = 100 /766;
var various_divs_scale_h = 80 /766;

var various_divs_w = various_divs_scale_w * score_div_w;
var various_divs_h = various_divs_w / various_divs_ar;

document.getElementById("new-game-div").style.width = various_divs_w + "px";
document.getElementById("new-game-div").style.height = various_divs_h + "px";

document.getElementById("save-data-div").style.width = various_divs_w + "px";
document.getElementById("save-data-div").style.height = various_divs_h + "px";

document.getElementById("throws-count").style.width = various_divs_w + "px";
document.getElementById("throws-count").style.height = various_divs_h + "px";

// position
x_pos = 20;
y_pos = 20;
document.getElementById("homeButtonDiv").style.left = x_pos + "px";
document.getElementById("homeButtonDiv").style.top = y_pos + "px";

x_pos = 200;
y_pos = 20;
document.getElementById("player_turn_wrapper").style.left = x_pos + "px";
document.getElementById("player_turn_wrapper").style.top = y_pos + "px";

x_pos = 388;
y_pos = 20;
document.getElementById("throws-count").style.left = x_pos + "px";
document.getElementById("throws-count").style.top = y_pos + "px";


x_pos = 514;
y_pos = 20;
document.getElementById("new-game-div").style.left = x_pos + "px";
document.getElementById("new-game-div").style.top = y_pos + "px";

x_pos =  630;
y_pos = 20;
document.getElementById("save-data-div").style.left = x_pos + "px";
document.getElementById("save-data-div").style.top = y_pos + "px";


var throw_stats_ar = 1;
var throw_stats_scale_w = 730 / 765;
var throw_stats_scale_h = 730 / 860;
var throw_stats_w = throw_stats_scale_w * score_div_w;
var throw_stats_h = throw_stats_w / throw_stats_ar;
var throw_stats_top_scale = 140 / 860;
var throw_stats_top = throw_stats_top_scale * throw_stats_h;
var throw_stats_padding_LR_scale = 34 / 765;
var throw_stats_padding_LR = throw_stats_padding_LR_scale * throw_stats_w;

document.getElementById("p1-throw-stats").style.width = throw_stats_w + "px";
document.getElementById("p1-throw-stats").style.height = throw_stats_h + "px";

x_pos = throw_stats_padding_LR / 2;
y_pos = throw_stats_top;
document.getElementById("p1-throw-stats").style.left = x_pos + "px";
document.getElementById("p1-throw-stats").style.top = y_pos + "px";

}



// returns width and height of a rectangular object like div.
// parameter is something like id of a div object.
function object_details_rectangle(object_id)
{
  var myObject = document.getElementById(object_id);
  var width = myObject.clientWidth;
  var height = myObject.clientHeight;
  var objectDetails = [width,height]
  return objectDetails;   
}  

function create_html_for_page_ajax(wrapper_w,wrapper_h)
{
 var ajaxRequest;
 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer Browsers
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         // Something went wrong
         alert("Your browser broke!");
         return false;
      }
   }
 }
 ajaxRequest.onreadystatechange = function(){
   if(ajaxRequest.readyState == 4){
      var ajaxDisplay = document.getElementById('wrapper');
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
   }
 }
 //queryString =  "?memberid=" + memberid + "&classid=" + classid;
  // document.write(age, wpm, sex);
  // document.write(queryString);
 //ajaxRequest.open("GET", "updatebooking.php" + queryString, true);
 //ajaxRequest.open("GET", "bookupdatedb.php" + queryString, true);
 //ajaxRequest.send(null); 
}

// ------------- End of create_page_ajax() ------------------------------








function validateForm()
{
  var x = document.forms["myForm"]["gameType"].value;
  var y = document.forms["myForm"]["gameTargetOther"].value;
  if (x == "other") 
     {
       if (y == null || y == "")
          {
            alert("Error: If you are not playing 501 or 301, you must specify a whole number e.g. 601");
            return false;
          }

       //isNAN (is not a number)
       if (isNaN(y))
          {
            alert("Error: Only whole numbers are allowed number e.g. 601");
            return false;
          }
       else
          {
            var result_of_match = y.match(/\./g);
            if (result_of_match == null || result_of_match == "")
               { 
                 //alert("ok");
                 return true;
               } 
            else
               {
                 alert("Error: Only whole numbers are allowed number e.g. 601");
                 return false;
               }
          }  
  }
}

function append_number(number_to_append,max_number)
{
  //get current contents
  current_number = document.getElementById("LCD-display").innerHTML;
  
  //update existing number
  //if 00 then replace with new digit
  //else a. count length of existing number
  //     b. append new digit e.g. 4 becomes 45 (4 was existing and 5 is new digit)  
  if (current_number == 00)
     {
      //alert("current number is 00");
      document.getElementById("LCD-display").innerHTML = number_to_append; 
     }
  else
     {
      //alert("current number is nit 00");
       new_displayed_number = "" + current_number + number_to_append;
       document.getElementById("LCD-display").innerHTML = new_displayed_number; 
     }

}

function cancel_last_input()
{
  current_number = document.getElementById("LCD-display").innerHTML;
  new_displayed_number = current_number.substring(0, current_number.length - 1);
  document.getElementById("LCD-display").innerHTML = new_displayed_number; 
}

function reset_LCD_display()
{
  document.getElementById("LCD-display").innerHTML = 00;
}


// ----------------- Left hand side of page ------------------- //


function update_score()
{
  remaining_target = document.getElementsByClassName("p1-running-total-text")[0].innerHTML;
  last_input = document.getElementById("LCD-display").innerHTML;
  new_target = remaining_target - last_input;
  document.getElementsByClassName("p1-running-total-text")[0].innerHTML = new_target;
  reset_LCD_display();
  //update throws
  current_throws_total = document.getElementById("throws-count").innerHTML;
  current_throws_total_int = parseInt(current_throws_total,10);
  new_throws_total = current_throws_total_int + 1;
  
  document.getElementById("throws-count").innerHTML = new_throws_total;
  throw_data_array = [last_input,new_target];
  array_of_throws[new_throws_total] = [throw_data_array];   


  //Determine which player needs updating (1,2,or3)
  player_turn_int = document.getElementById("player_turn_int").innerHTML;  

  display_stats(player_turn_int); 
}

function display_stats(player_turn_int)
{

 player_prefix= "p" + player_turn_int + "-";
 
 row_col_id = player_prefix;
 if (new_throws_total <=7)
    {
      //document.getElementById("demo-9").innerHTML = new_throws_total;
      temp_var_a = array_of_throws[new_throws_total];
      temp_var_b = temp_var_a.toString();
      var result_of_split = temp_var_b.split(","); 
       
      row_col_id = player_prefix + "r" + new_throws_total + "-" + "c1";
      document.getElementById(row_col_id).innerHTML = new_throws_total;
       
      
      row_col_id = player_prefix + "r" + new_throws_total + "-" + "c2";
      document.getElementById(row_col_id).innerHTML = result_of_split[0];
      
      row_col_id = player_prefix + "r" + new_throws_total + "-" + "c3";
      document.getElementById(row_col_id).innerHTML = result_of_split[1];
    }
 else
    { 
      offset_var=new_throws_total - 7;
      
      

      var row_counter = 0;
      while (row_counter < 8)
        {
         temp_var_a = array_of_throws[row_counter + offset_var];
         temp_var_b = temp_var_a.toString();
         var result_of_split = temp_var_b.split(","); 
       
        row_col_id = player_prefix +  "r" + row_counter + "-" + "c1";
        document.getElementById(row_col_id).innerHTML = row_counter + offset_var;
       
        row_col_id = player_prefix +  "r" + row_counter + "-" + "c2";
        document.getElementById(row_col_id).innerHTML = result_of_split[0];
       
        row_col_id = player_prefix +  "r" + row_counter + "-" + "c3";
        document.getElementById(row_col_id).innerHTML = result_of_split[1];
      
        row_counter++;
    
        //display_arrays(array_of_throws); 
     } //end while

     navigation_controls(player_prefix);
   
    } //else

}


function redo_stats(toggle,player_prefix)
{
      top_row_number_id = player_prefix + "r0-c1";
      bottom_row_number_id = player_prefix + "r7-c1";
      top_row_number=document.getElementById(top_row_number_id).innerHTML;
      //alert(top_row_number); 
      //alert(new_throws_total);

      if (toggle=="up")
         {
           offset_var = top_row_number - 1;
           
         } 

      if (toggle=="down")
         {
           top_row_number=document.getElementById(top_row_number_id).innerHTML;
           bottom_row_number=document.getElementById(bottom_row_number_id).innerHTML;
           //alert(top_row_number);
           offset_var_int = parseInt(top_row_number,10); 
           offset_var = offset_var_int + 1;
           //alert(offset_var);
         } 

      var row_counter = 0;
      while (row_counter < 8)
        {
         temp_var_a = array_of_throws[row_counter + offset_var];
         temp_var_b = temp_var_a.toString();
         var result_of_split = temp_var_b.split(","); 
       
        row_col_id = player_prefix + "r" + row_counter + "-" + "c1";
        document.getElementById(row_col_id).innerHTML = row_counter + offset_var;
       
        row_col_id = player_prefix + "r" + row_counter + "-" + "c2";
        document.getElementById(row_col_id).innerHTML = result_of_split[0];
       
        row_col_id = player_prefix + "r" + row_counter + "-" + "c3";
        document.getElementById(row_col_id).innerHTML = result_of_split[1];
      
        row_counter++;
        //display_arrays(array_of_throws);
        top_row_number=document.getElementById(top_row_number_id).innerHTML; 
     } //end while

     navigation_controls(player_prefix);
}


function navigation_controls(player_prefix)
{
 top_row_id = player_prefix + "r0-c1";
 bottom_row_id = player_prefix + "r7-c1";
 top_row_number=document.getElementById(top_row_id).innerHTML;
 bottom_row_number=document.getElementById(bottom_row_id).innerHTML;
 number_of_items_in_array = array_of_throws.length;
 bottom_of_list = array_of_throws.length - 1;

 //up button
 if (top_row_number > 0)
    {
      up_toggle="up";
      cell_id_up_toggle = player_prefix + "r0-c4" 
      document.getElementById(cell_id_up_toggle).innerHTML ="<button type=\"button\" class=\"nav_button\" onclick=\"redo_stats(up_toggle,player_prefix)\"><span class=\"move-up-button-text\">Up</span></button>";
      down_toggle="down"; 
      cell_id_down_toggle = player_prefix + "r7-c4" 
      document.getElementById(cell_id_down_toggle).innerHTML ="<button type=\"button\" class=\"nav_button\" onclick=\"redo_stats(down_toggle,player_prefix)\"><span class=\"move-up-button-text\">Down</span></button>"; 
    }
 else
    {
      document.getElementById(cell_id_up_toggle).innerHTML =" ";
    }

 
 //down button
 if (bottom_of_list == bottom_row_number)
    {
      document.getElementById(cell_id_down_toggle).innerHTML =" ";
    } 
 else
    {
      down_toggle="down"; 
      document.getElementById(cell_id_down_toggle).innerHTML ="<button type=\"button\" class=\"nav_button\" onclick=\"redo_stats(down_toggle,player_prefix)\"><span class=\"move-up-button-text\">Down</span></button>";    
    }
}





function new_game_reset(gameType)
{
  reset_LCD_display();
  document.getElementsByClassName("p1-running-total-text")[0].innerHTML = gameType;
  document.getElementById("throws-count").innerHTML = 0;
  document.getElementById("r0-c1").innerHTML = 0;
  document.getElementById("r0-c2").innerHTML = " ";
  document.getElementById("r0-c3").innerHTML = gameType;
  reset_stats_table();
  //reset arrays
  throws_data_array = [];
  array_of_throws = []; 
  throws_data_array = [0,gameType];
  array_of_throws[0] = throws_data_array;
  
  //display_arrays(array_of_throws);
}

function display_arrays(array_of_throws)
{
  document.getElementById("demo-0").innerHTML = array_of_throws[0];
  document.getElementById("demo-1").innerHTML = array_of_throws[1];
  document.getElementById("demo-2").innerHTML = array_of_throws[2];
  document.getElementById("demo-3").innerHTML = array_of_throws[3];
  document.getElementById("demo-4").innerHTML = array_of_throws[4];
  document.getElementById("demo-5").innerHTML = array_of_throws[5];
  document.getElementById("demo-6").innerHTML = array_of_throws[6];
  document.getElementById("demo-7").innerHTML = array_of_throws[7];
  document.getElementById("demo-8").innerHTML = array_of_throws[8];
  document.getElementById("demo-9").innerHTML = array_of_throws[9];
  document.getElementById("demo-10").innerHTML = array_of_throws[10];
  document.getElementById("demo-11").innerHTML = array_of_throws[11];
  document.getElementById("demo-12").innerHTML = array_of_throws[12];
  document.getElementById("throw").innerHTML = array_of_throws.length;
}


function save_data_and_reset()
{
 //this isn't doing very munch is it!!!!!
}

function open_home_page()
{
  window.open("darts-1.php","_self","","");
}


function reset_stats_table()
{
  var row_counter = 1;
  while (row_counter < 8)
     {
        row_col_id = "r" + row_counter + "-" + "c1";
           column_counter = 1;
           while (column_counter < 5)
             {
                row_col_id = "r" + row_counter + "-" + "c" + column_counter;
                column_counter++; 
                //document.getElementById("demos").innerHTML = row_col_id;
                document.getElementById(row_col_id).innerHTML = ""; 
             }
        row_counter++;
     }
}

function addNameForm()
{
  var x = document.getElementById("numberOfPlayers").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;

  if ( x == 1)
     {
       document.getElementById("player_2_tr").style.display = "none"; 
       document.getElementById("player_3_tr").style.display = "none";
     }
  if ( x == 2)
     {
       document.getElementById("player_2_tr").style.display = ""; 
       document.getElementById("player_3_tr").style.display = "none";
     }
  if ( x == 3)
     {
       document.getElementById("player_2_tr").style.display = ""; 
       document.getElementById("player_3_tr").style.display = "";
     }
  
}



//not used
function live_display_stats()
{
 var row_counter = 0;
   while (row_counter < 8)
     {
       if (new_throws_total <=8)
          {
            throw_number = new_throws_total;
          }
        
    
       temp_var_a = array_of_throws[row_counter];
       temp_var_b = temp_var_a.toString();
       var result_of_split = temp_var_b.split(","); 
       
       row_col_id = "r" + row_counter + "-" + "c1";
       document.getElementById(row_col_id).innerHTML = throw_number;
       
       row_col_id = "r" + row_counter + "-" + "c2";
       document.getElementById(row_col_id).innerHTML = result_of_split[0];
       
       row_col_id = "r" + row_counter + "-" + "c3";
       document.getElementById(row_col_id).innerHTML = result_of_split[1];
      
       row_counter++;
       //display_arrays(array_of_throws); 
     } //end while
}















