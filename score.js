function setup_page(numberOfPlayersSP)
{

  if (numberOfPlayersSP == 1)
     {   
       document.getElementById("p2_input_div").style.display = "none";
       document.getElementById("p3_input_div").style.display = "none";
       document.getElementById("p2_history_div").style.display = "none";
       document.getElementById("p3_history_div").style.display = "none";
     }

  if (numberOfPlayersSP == 2)
     {   
       document.getElementById("p3_input_div").style.display = "none";
       document.getElementById("p3_history_div").style.display = "none";
     }


  var browser_width = window.innerWidth;
  var browserWidthUnadjusted = browser_width; 
  var browser_height = window.innerHeight;
  var browser_ar = browser_width / browser_height;
  
  //document.getElementById("p1_input_div").innerHTML = browser_ar.toFixed(2);

  wrapper_width = browser_width;
  wrapper_height = wrapper_width / browser_ar;
  document.getElementById("wrapper").style.width = wrapper_width + "px"; 
  document.getElementById("wrapper").style.height = wrapper_height + "px";

  wrapper_ar = wrapper_width / wrapper_height;

  // long browser adjustment
  if (browser_ar >= 1.9)
     {
       browser_width = 1.8 * browser_height;         
     }
  
  // Landscape layout
  divName="seq_div"; 
  scale_factor_w = 500/1600;
  scale_factor_h = 100/900;
  div_ar =  500/100; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  xPosScale=550/1600;
  yPosScale=40/900;
  position_div(divName,xPosScale,yPosScale,browser_width,browser_height);

  
  // font sizes in seq_div
  document.getElementById("nextThrower").style.fontSize = "30px"; 
  divName="back_div"; 
  scale_factor_w = 100/1600;
  scale_factor_h = 100/900;
  div_ar =  100/100; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  xPosScale=850/1600;
  yPosScale=40/900;
  position_div(divName,xPosScale,yPosScale,browser_width,browser_height);

  divName="reset_div"; 
  scale_factor_w = 100/1600;
  scale_factor_h = 100/900;
  div_ar =  100/100; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  xPosScale=850/1600;
  yPosScale=100/900;
  position_div(divName,xPosScale,yPosScale,browser_width,browser_height);

  

// input and stats

//top boxes (main input)
  
 
  //PLAYER 1  ------------------------------------------------------------
  divName="p1_input_div"; 
  scale_factor_w = 500/1600;
  scale_factor_h = 100/900;
  div_ar =  500/100; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  //xPosScale=10/1600;
  yPosScale=180/900;
  //position_div(divName,xPosScale,yPosScale,browser_width,browser_height); 

  //position in center ******************  
  if (numberOfPlayersSP == 1)
     {
      //divSizeThis = document.getElementById(divName).style.width;
      //xAdjustment=(browserWidthUnadjusted / 2) - (parseInt(divSizeThis) / 2);
      xPosScale=550/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }
  if (numberOfPlayersSP == 2)
     {
      xPosScale=290/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }
  if (numberOfPlayersSP == 3)
     {
      xPosScale=30/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }

 
  
  divName="p1NameDiv"; 
  scale_factor_w = 147/1600;
  scale_factor_h = 98/900;
  div_ar =  3/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);

  divName="p1ThrowsDiv"; 
  scale_factor_w = 47/1600;
  scale_factor_h = 98/900;
  div_ar =  1/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);

  divName="p1NewScoreDiv"; 
  scale_factor_w = 97/1600;
  scale_factor_h = 97/900;
  div_ar =  2/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  divName="p1ButtonDiv"; 
  scale_factor_w = 97/1600;
  scale_factor_h = 97/900;
  div_ar =  2/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  divName="p1RemainDiv"; 
  scale_factor_w = 97/1600;
  scale_factor_h = 97/900;
  div_ar =  2/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  //player 1 input field (size adjustment)
  divName="p1ScoreInput"; 
  scale_factor_w = 70/1645;
  scale_factor_h = 40/923;
  div_ar =  7/4; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  relativeContainer = "p1NewScoreDiv";
  designContainerH=100;
  designElementYPos=24;
  repositionElement(divName,relativeContainer,designContainerH,designElementYPos);
  
  function repositionElement(divName,relativeContainer,designContainerH,designElementYPos)
  {
   currentContainerH = document.getElementById(relativeContainer).style.height;
   currentContainerH=parseInt(currentContainerH); 
   //alert(currentContainerH);
   yPos=(currentContainerH/designContainerH) * designElementYPos;
   yPos = parseInt(yPos);
   //alert(yPos);
   //document.getElementById(divName).style.top = yPos + "px";
   x=document.getElementById(divName).style.top;
   //alert(x);
  }
   

  //player 1 button (adjustment)
  divName="buttonPlayer1"; 
  //scale_factor_w = 80/1600;
  //scale_factor_h = 85/900;
  //div_ar =  16/17;
  scale_factor_w = 90/1600;
  scale_factor_h = 44/900;
  div_ar =  7/4;   
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  
   

  divName="p1_history_div"; 
  scale_factor_w = 500/1600;
  scale_factor_h = 550/900;
  div_ar =  100/100; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  //xPosScale=10/1600;
  yPosScale=320/900;
  //position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
  
  //position in center ******************  
  if (numberOfPlayersSP == 1)
     {
      //divSizeThis = document.getElementById(divName).style.width;
      //xAdjustment=(browserWidthUnadjusted / 2) - (parseInt(divSizeThis) / 2);
      xPosScale=550/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }
  if (numberOfPlayersSP == 2)
     {
      xPosScale=290/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }
  if (numberOfPlayersSP == 3)
     {
      xPosScale=30/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }

  // End of Player 1 set up ------------------------------------------------------------------------


  // Player 2 --------------------------------------------------------------------------------------
  divName="p2_input_div"; 
  scale_factor_w = 500/1600;
  scale_factor_h = 100/900;
  div_ar =  500/100; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  //xPosScale=520/1600;
  yPosScale=180/900;
  //position_div(divName,xPosScale,yPosScale,browser_width,browser_height); 
  
  if (numberOfPlayersSP == 2)
     {
      xPosScale=810/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }
  if (numberOfPlayersSP == 3)
     {
      xPosScale=550/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }



  divName="p2NameDiv"; 
  scale_factor_w = 147/1600;
  scale_factor_h = 98/900;
  div_ar =  3/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);

  divName="p2ThrowsDiv"; 
  scale_factor_w = 47/1600;
  scale_factor_h = 98/900;
  div_ar =  1/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);

  divName="p2NewScoreDiv"; 
  scale_factor_w = 97/1600;
  scale_factor_h = 97/900;
  div_ar =  2/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  divName="p2ButtonDiv"; 
  scale_factor_w = 97/1600;
  scale_factor_h = 97/900;
  div_ar =  2/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  divName="p2RemainDiv"; 
  scale_factor_w = 97/1600;
  scale_factor_h = 97/900;
  div_ar =  2/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  //player 2 input field (size adjustment)
  divName="p2ScoreInput"; 
  scale_factor_w = 70/1600;
  scale_factor_h = 40/900;
  div_ar =  7/4;  
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  //player 2 button (adjustment)
  divName="buttonPlayer2"; 
  //scale_factor_w = 80/1645;
  //scale_factor_h = 85/923;
  //div_ar =  16/17;
  scale_factor_w = 90/1600;
  scale_factor_h = 44/900;
  div_ar =  7/4;   
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  divName="p2_history_div"; 
  scale_factor_w = 500/1600;
  scale_factor_h = 550/900;
  div_ar =  100/100; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  yPosScale=320/900;
  
  if (numberOfPlayersSP == 2)
     {
      xPosScale=810/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }
  if (numberOfPlayersSP == 3)
     {
      xPosScale=550/1600; 
      position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
     }
  
  // End of Player 2 set up ---------------------------------------------------------------------------------

  // Player 3 --------------------------------------------------------------------------------------
  divName="p3_input_div"; 
  scale_factor_w = 500/1600;
  scale_factor_h = 100/900;
  div_ar =  500/100; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  xPosScale=1070/1600;
  yPosScale=180/900;
  position_div(divName,xPosScale,yPosScale,browser_width,browser_height); 

  divName="p3NameDiv"; 
  scale_factor_w = 147/1600;
  scale_factor_h = 98/900;
  div_ar =  3/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);

  divName="p3ThrowsDiv"; 
  scale_factor_w = 47/1600;
  scale_factor_h = 98/900;
  div_ar =  1/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);

  divName="p3NewScoreDiv"; 
  scale_factor_w = 97/1600;
  scale_factor_h = 97/900;
  div_ar =  2/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  divName="p3ButtonDiv"; 
  scale_factor_w = 97/1600;
  scale_factor_h = 97/900;
  div_ar =  2/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  divName="p3RemainDiv"; 
  scale_factor_w = 97/1600;
  scale_factor_h = 97/900;
  div_ar =  2/2; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  //player 3 input field (size adjustment)
  divName="p3ScoreInput"; 
  scale_factor_w = 70/1645;
  scale_factor_h = 40/923;
  div_ar =  7/4; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);   

  //player 3 button (adjustment)
  divName="buttonPlayer3"; 
  scale_factor_w = 90/1600;
  scale_factor_h = 44/900;
  div_ar =  7/4;  
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height); 

  divName="p3_history_div"; 
  scale_factor_w = 500/1600;
  scale_factor_h = 550/900;
  div_ar =  100/100; 
  adjust_div(divName,scale_factor_w,scale_factor_h,div_ar,browser_width,browser_height);
  xPosScale=1070/1600;
  yPosScale=320/900;
  position_div(divName,xPosScale,yPosScale,browser_width,browser_height);
  // End of Player 3 set up ---------------------------------------------------------------------------------
  
  //table rows height
  var historyDivH_txt = document.getElementById("p1_history_div").style.height;
  var histortyDivH_float = parseFloat(historyDivH_txt);
  var rowH = (histortyDivH_float - 64) / 10;
  var tableDetails = document.getElementById("table1");
  adjustTable(tableDetails,"height",rowH);
  var tableDetails = document.getElementById("table2");
  adjustTable(tableDetails,"height",rowH);
  var tableDetails = document.getElementById("table3");
  adjustTable(tableDetails,"height",rowH);
   
  // Table cells widths : #p1r0c0,#p1r0c1,#p1r0c2,#p1r0c3,#p2r0c0,#p2r0c1,#p2r0c2,#p2r0c3,#p3r0c0,#p3r0c1,#p3r0c2,#p3r0c3
  
  historyDivW = document.getElementById("p1_history_div").style.width;
  historyDivWInt = parseInt(historyDivW);
  tableCellW = historyDivWInt / 4;
  document.getElementById("p1r0c0").width = tableCellW;
  document.getElementById("p1r0c1").width = tableCellW;
  document.getElementById("p1r0c2").width = tableCellW;
  document.getElementById("p1r0c3").width = tableCellW;
  document.getElementById("p2r0c0").width = tableCellW;
  document.getElementById("p2r0c1").width = tableCellW;
  document.getElementById("p2r0c2").width = tableCellW;
  document.getElementById("p2r0c3").width = tableCellW;
  document.getElementById("p3r0c0").width = tableCellW;
  document.getElementById("p3r0c1").width = tableCellW;
  document.getElementById("p3r0c2").width = tableCellW;
  document.getElementById("p3r0c3").width = tableCellW;


  //adjust font sizes - seq div
  // scale based on screen 1645px x 923px
  designBrowserHeight=923;  
  browserHeightCurrent = window.innerHeight;

  //player 1 history text positioning
  inputBoxCurrentH = document.getElementById("p1_input_div").style.height; 
  inputBoxCurrentHInt = parseInt(inputBoxCurrentH);
  // constant
  inputBoxDesignH = 102; 

  idName="seqTextOne";
  designFontSize=20;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
 
  idName="nextThrower";
  designFontSize=45; 
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);

  idName="homePageButton";
  designFontSize=15;  
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);

  idName="resetPage2Button";
  designFontSize=15; 
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  
  //player 1 input font size and positioning *****************************************8

  idName="playerNameOne";
  designFontSize=35;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 28;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName); 
  
  idName="p1ThrowsSoFar";
  designFontSize=35;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 28;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName); 
  
  idName="p1ScoreInput";
  designFontSize=22;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 24;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName);   

  idName="buttonPlayer1";
  designFontSize=20; 
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 24;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName);  

  idName="p1Remain";
  designFontSize=35; 
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 28;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName);   
  
  //player 2 input font size and positioning *****************************************8
  idName="playerNameTwo";
  designFontSize=35;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 28;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName); 
  
  idName="p2ThrowsSoFar";
  designFontSize=35;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 28;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName); 
  
  idName="p2ScoreInput";
  designFontSize=22;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 24;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName);   

  idName="buttonPlayer2";
  designFontSize=20; 
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 24;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName);  

  idName="p2Remain";
  designFontSize=35; 
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 28;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName);   
  
  //player 3 input font size and positioning *****************************************8
  idName="playerNameThree";
  designFontSize=35;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 28;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName); 
  
  idName="p3ThrowsSoFar";
  designFontSize=35;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 28;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName); 
  
  idName="p3ScoreInput";
  designFontSize=22;
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 24;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName);   

  idName="buttonPlayer3";
  designFontSize=20; 
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 24;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName);  

  idName="p3Remain";
  designFontSize=35; 
  fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent);
  inputBoxFontDesignH = 28;
  inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName);   


  //history info - text height = 45 px, font height will be 28px for this cell height ********************

  designHistoryCellH = 45;
  designHistoryTextH = 28;
  currentCellH = document.getElementById("p1r0c0").style.height;   
  currentCellH = parseInt(currentCellH);
  newTextHeight = (currentCellH / designHistoryCellH) * designHistoryTextH;
  document.getElementById("table1").style.fontSize = newTextHeight + "px";
  document.getElementById("table2").style.fontSize = newTextHeight + "px";
  document.getElementById("table3").style.fontSize = newTextHeight + "px";

  // adjust long name
  idOfContainer = "nextThrowerId";
  idOfText="nextThrower";  
  longNameCheck(idOfContainer,idOfText);

  idOfContainer = "p1NameDiv";
  idOfText="playerNameOne";  
  longNameCheck(idOfContainer,idOfText);
  
  idOfContainer = "p2NameDiv";
  idOfText="playerNameTwo";  
  //longNameCheck(idOfContainer,idOfText);

  idOfContainer = "p3NameDiv";
  idOfText="playerNameThree";  
  //longNameCheck(idOfContainer,idOfText);

}// end function setup_page

//long name check - reduce font if necessary
// if container is higher than the block of text then adjust the fonz
function longNameCheck(idOfContainer,idOfText)
{
    containerH = document.getElementById(idOfContainer).offsetHeight;
    containerW = document.getElementById(idOfContainer).offsetWidth;
    textH = document.getElementById(idOfText).offsetHeight;
    textW = document.getElementById(idOfText).offsetWidth;
    console.log(containerH,containerW, textH, textW);
        if (containerH < textH)
       {
         scaleFactor  = containerH / textH;
         //alert(scaleFactor);
         fontH = document.getElementById(idOfText).style.fontSize;
         newFontH = parseInt(fontH) * scaleFactor;
         document.getElementById(idOfText).style.fontSize = newFontH + "px";
       } 
   
    if (containerW < textW)
       {    
         document.getElementById(idOfContainer).style.overflow = "hidden";
         document.getElementById(idOfText).style.overflow = "hidden"; 
       }

var rect = p1NameDiv.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

}

function inputBoxTextPosition(inputBoxCurrentHInt,inputBoxDesignH,inputBoxFontDesignH,idName)
{
  xPos = (inputBoxCurrentHInt / inputBoxDesignH) * inputBoxFontDesignH;
  document.getElementById(idName).style.top = xPos + "px"; 
}


function fontSizesAdjust(idName,designFontSize,designBrowserHeight,browserHeightCurrent)
{
  scaleFactor = browserHeightCurrent / designBrowserHeight;
  scaledFontSize = designFontSize * scaleFactor;
  document.getElementById(idName).style.fontSize = scaledFontSize + "px";
}


function update_score(playerNumber)
{
 
 var throwsSoFar = [];
 whosGoIsIt = document.getElementById("hiddenPlayerSequence").innerHTML; 
   
 lastScoreInput = document.getElementsByClassName("scoreInputField")[playerNumber].value;
 if (lastScoreInput == "")
    {
      alert("You must enter a number");
      return;
    }
 

 if (playerNumber == 0)
    {
      playerNumberReal=1;
      idString="p" + "1" + "Remain"
    }
 if (playerNumber == 1)
    {
      playerNumberReal=2;
      idString="p" + "2" + "Remain"
    } 
 if (playerNumber == 2)
    {
      playerNumberReal=3;
      idString="p" + "3" + "Remain"
    }

 remainingTarget = document.getElementById(idString).innerHTML;
 newTarget = remainingTarget - lastScoreInput;
 document.getElementById(idString).innerHTML = newTarget;
 
 //update stats arrays

 //array to keep data about how many elements in each player's array
 
 arraySize = []; 


 if (playerNumberReal == 1)
    {
      throwsSoFar[playerNumberReal] = document.getElementById("p1ThrowsSoFar").innerHTML;
 
      throwsSoFar[playerNumberReal]++;

      p1ThrowsArray = [lastScoreInput,newTarget];
      p1ArrayOfP1ThrowsArray[throwsSoFar[playerNumberReal]] = p1ThrowsArray;
       
      
      //document.getElementById("p2ScoreInput").focus();
      //document.getElementById("p2ScoreInput").select();
      document.getElementsByClassName("scoreInputField")[playerNumber].value = "";
      arraySize[0] = p1ArrayOfP1ThrowsArray.length;
     
    }

  if (playerNumberReal == 2)
    {
      throwsSoFar[playerNumberReal] = document.getElementById("p2ThrowsSoFar").innerHTML;
 
      throwsSoFar[playerNumberReal]++; 

      p2ThrowsArray = [lastScoreInput,newTarget];
      p2ArrayOfP2ThrowsArray[throwsSoFar[playerNumberReal]] = p2ThrowsArray;

      
      //document.getElementById("p3ScoreInput").focus();
      //document.getElementById("p3ScoreInput").select();
      document.getElementsByClassName("scoreInputField")[playerNumber].value = "";
      arraySize[1] = p2ArrayOfP2ThrowsArray.length;
             
    }

  if (playerNumberReal == 3)
    {
      throwsSoFar[playerNumberReal] = document.getElementById("p3ThrowsSoFar").innerHTML;
 
      throwsSoFar[playerNumberReal]++;
 
      p3ThrowsArray = [lastScoreInput,newTarget];
      p3ArrayOfP3ThrowsArray[throwsSoFar[playerNumberReal]] = p3ThrowsArray;

      
      //document.getElementById("p1ScoreInput").focus();
      //document.getElementById("p1ScoreInput").select();
      document.getElementsByClassName("scoreInputField")[playerNumber].value = "";
      arraySize[2] = p3ArrayOfP3ThrowsArray.length;
          
    }
  displayStats(playerNumberReal,throwsSoFar[playerNumberReal],arraySize,playerNumber);

}


function displayStats(playerNumberReal,throwsSoFar,arraySize,playerNumber)
{
   
   throwsSoFar = parseInt(throwsSoFar);
   new_throws_total =  throwsSoFar;
   temp_id = "p" + playerNumberReal + "ThrowsSoFar";
   document.getElementById(temp_id).innerHTML = new_throws_total;  
   
   // throw 1 maps to row 0 !!!

   mappingAdjustment = new_throws_total - 1;

   player_prefix= "p" + playerNumberReal;
   row_col_0_id = player_prefix + "r" + mappingAdjustment + "c0";
   row_col_1_id = player_prefix + "r" + mappingAdjustment + "c1";
   row_col_2_id = player_prefix + "r" + mappingAdjustment + "c2";

   if (throwsSoFar <11)
    {
      if (playerNumberReal == 1)
         {
          document.getElementById(row_col_0_id).innerHTML = new_throws_total;
          document.getElementById(row_col_1_id).innerHTML = p1ArrayOfP1ThrowsArray[throwsSoFar][0];
          document.getElementById(row_col_2_id).innerHTML = p1ArrayOfP1ThrowsArray[throwsSoFar][1];
         }
      if (playerNumberReal == 2)
         {
          document.getElementById(row_col_0_id).innerHTML = new_throws_total;
          document.getElementById(row_col_1_id).innerHTML = p2ArrayOfP2ThrowsArray[throwsSoFar][0];
          document.getElementById(row_col_2_id).innerHTML = p2ArrayOfP2ThrowsArray[throwsSoFar][1];
         }
      if (playerNumberReal == 3)
         {
          document.getElementById(row_col_0_id).innerHTML = new_throws_total;
          document.getElementById(row_col_1_id).innerHTML = p3ArrayOfP3ThrowsArray[throwsSoFar][0];
          document.getElementById(row_col_2_id).innerHTML = p3ArrayOfP3ThrowsArray[throwsSoFar][1];
         }
      
    }
   else
    { 
      
      offset_var=arraySize[playerNumber] - rowsInTable;
      arrayPointer = throwsSoFar - 9;
     
      var row_counter = 0;
     
      while (row_counter <= 9)
        {
         row_col_0_id = player_prefix + "r" + row_counter + "c0";
         row_col_1_id = player_prefix + "r" + row_counter + "c1";
         row_col_2_id = player_prefix + "r" + row_counter + "c2";
          //arrayPointer = row_counter + offset_var;

      if (playerNumberReal == 1)
         {
          document.getElementById(row_col_0_id).innerHTML = arrayPointer;
          document.getElementById(row_col_1_id).innerHTML = p1ArrayOfP1ThrowsArray[arrayPointer][0];
          document.getElementById(row_col_2_id).innerHTML = p1ArrayOfP1ThrowsArray[arrayPointer][1];
         }
      if (playerNumberReal == 2)
         {
          document.getElementById(row_col_0_id).innerHTML = arrayPointer;
          document.getElementById(row_col_1_id).innerHTML = p2ArrayOfP2ThrowsArray[arrayPointer][0];
          document.getElementById(row_col_2_id).innerHTML = p2ArrayOfP2ThrowsArray[arrayPointer][1];
         }
      if (playerNumberReal == 3)
         {
          document.getElementById(row_col_0_id).innerHTML = arrayPointer;
          document.getElementById(row_col_1_id).innerHTML = p3ArrayOfP3ThrowsArray[arrayPointer][0];
          document.getElementById(row_col_2_id).innerHTML = p3ArrayOfP3ThrowsArray[arrayPointer][1];
         } 
         
          row_counter++;
          arrayPointer++; 
          //display_arrays(array_of_throws); 
      } //end while

      navigation_controls(playerNumberReal);
        
 
    } //else end
   



  // if game not won, set up next throw.
  howManyPlayers = document.getElementById("hiddenNumberOfPlayers").innerHTML;
  

  if (playerNumberReal == 1)
     {
        if (howManyPlayers == 1)
           {
             whosGoIsIt = 1;
             nextThrower = document.getElementById("playerNameOne").innerHTML;
             document.getElementById("p1ScoreInput").focus();
             document.getElementById("p1ScoreInput").select();

           }  
        if ((howManyPlayers == 2) || (howManyPlayers == 3))
           {

             whosGoIsIt = 2;
             nextThrower = document.getElementById("playerNameTwo").innerHTML;
             document.getElementById("buttonPlayer1").disabled = true;
             document.getElementById("buttonPlayer2").disabled = false;
             document.getElementById("buttonPlayer3").disabled = true;
             document.getElementById("p2ScoreInput").focus();
             document.getElementById("p2ScoreInput").select();  
           }
     }


  if (playerNumberReal == 2)
     {
        if (howManyPlayers == 2)
           {
             whosGoIsIt = 1;
             nextThrower = document.getElementById("playerNameOne").innerHTML;
             document.getElementById("buttonPlayer1").disabled = false;
             document.getElementById("buttonPlayer2").disabled = true;
             document.getElementById("buttonPlayer3").disabled = true;
             document.getElementById("p1ScoreInput").focus();
             document.getElementById("p1ScoreInput").select();  
           }
        if (howManyPlayers == 3)
           {
             whosGoIsIt = 3;
             nextThrower = document.getElementById("playerNameThree").innerHTML;
             document.getElementById("buttonPlayer1").disabled = true;
             document.getElementById("buttonPlayer2").disabled = true;
             document.getElementById("buttonPlayer3").disabled = false;
             document.getElementById("p3ScoreInput").focus();
             document.getElementById("p3ScoreInput").select();
           }    
     }

  if (playerNumberReal == 3)
     {
        whosGoIsIt = 1;
        nextThrower = document.getElementById("playerNameOne").innerHTML;
        document.getElementById("buttonPlayer1").disabled = false;
        document.getElementById("buttonPlayer2").disabled = true;
        document.getElementById("buttonPlayer3").disabled = true;
        document.getElementById("p1ScoreInput").focus();
        document.getElementById("p1ScoreInput").select();
     }

  
  document.getElementById("nextThrower").innerHTML = nextThrower; 
  document.getElementById("hiddenPlayerSequence").innerHTML = whosGoIsIt;
  // disable other player's button

 } //function close
 


function navigation_controls(playerNC)
{
 
 var arraySizeNC = [];
 //not using ArraySizeNC[0] 

 if (playerNC == 1)
    {
      player_prefix = "p1";
      arraySizeNC[1] = p1ArrayOfP1ThrowsArray.length;
    }
 if (playerNC == 2)
    {
      player_prefix = "p2";
      arraySizeNC[2] = p2ArrayOfP2ThrowsArray.length;
    }
 if (playerNC == 3)
    {
     player_prefix = "p3";
     arraySizeNC[3] = p3ArrayOfP3ThrowsArray.length;
    }
  

 topRowId = player_prefix + "r0c0";
 bottomRowId = player_prefix + "r9c0";
 topRowThrow = document.getElementById(topRowId).innerHTML;
 bottomRowThrow = document.getElementById(bottomRowId).innerHTML;
  
 topRowColumn4 = player_prefix + "r0c3";
 bottomRowColumn4 = player_prefix + "r9c3"; 

 playerNC = parseInt(playerNC,10);
 //alert(playerNumber);

//up button. redo(playerNumber,1=up 2=down)

 if (topRowThrow > 1)
    {
      if (playerNC == 1){ 
          up_toggle="up";
          document.getElementById(topRowColumn4).innerHTML ="<button type=\"button\" class=\"nav_button\" onclick=\"redo_stats(1,1)\"><span class=\"move-up-button-text\">^</span></button>";
          adjustNavButtons("p1r0c0","p1r0c3"); 
         }
 
      if (playerNC == 2){
          up_toggle="up";
          document.getElementById(topRowColumn4).innerHTML ="<button type=\"button\" class=\"nav_button\" onclick=\"redo_stats(2,1)\"><span class=\"move-up-button-text\">^</span></button>";
          adjustNavButtons("p1r0c0","p2r0c3");
         }

      if (playerNC == 3){
          up_toggle="up";
          document.getElementById(topRowColumn4).innerHTML ="<button type=\"button\" class=\"nav_button\" onclick=\"redo_stats(3,1)\"><span class=\"move-up-button-text\">^</span></button>";
          adjustNavButtons("p1r0c0","p3r0c3"); 
         }
    }
else
    {
      document.getElementById(topRowColumn4).innerHTML ="";  
    }

//down button. redo(playerNumber,1=up 2=down)

 if (bottomRowThrow <  (arraySizeNC[playerNC] - 1))
    {
      if (playerNC == 1)
         { 
           down_toggle = "down";
           document.getElementById(bottomRowColumn4).innerHTML ="<button type=\"button\" class=\"nav_button\" onclick=\"redo_stats(1,2)\"><span class=\"move-up-button-text\">v</span></button>";
           adjustNavButtons("p1r0c0","p1r9c3");
         } 
      if (playerNC == 2)
         { 
           down_toggle = "down";
           document.getElementById(bottomRowColumn4).innerHTML ="<button type=\"button\" class=\"nav_button\" onclick=\"redo_stats(2,2)\"><span class=\"move-up-button-text\">v</span></button>";
           adjustNavButtons("p1r0c0","p2r9c3");
         }  
      if (playerNC == 3)
         { 
           down_toggle = "down";
           document.getElementById(bottomRowColumn4).innerHTML ="<button type=\"button\" class=\"nav_button\" onclick=\"redo_stats(3,2)\"><span class=\"move-up-button-text\">v</span></button>";
           adjustNavButtons("p1r0c0","p3r9c3"); 
         } 
  
    }
 else
    {
      document.getElementById(bottomRowColumn4).innerHTML ="";  
    }  
}
// end nav function


function adjustHomeResetButtons(IdName,relatedDiv,aspectR,otherStuff)
{

}


function adjustNavButtons(cellId,buttonId)
{
 buttonAR = 33/20;
 designHistoryCellH = 45;
 designHistoryButtH = 33;
 designHistoryTextH = 20;
 currentCellH = document.getElementById(cellId).style.height;
 currentCellH = parseInt(currentCellH);
 

 scaleFactor = currentCellH / designHistoryCellH;
 newButtonH = designHistoryButtH * scaleFactor;
 newButtonW = newButtonH * buttonAR;
 newTextH = designHistoryTextH * scaleFactor;
 
 x=document.getElementById(buttonId).children; 
 x[0].style.height = newButtonH + "px";
 x[0].style.width = newButtonW + "px";
 x[0].style.fontSize= newTextH + "px";
 }


function redo_stats(playerRS,upOrDown)
{
playerRS = parseInt(playerRS,10);
//upOrDown is either 1 (up) or 2 (down).

var redoArraySize = [];
//not using redoArraySize[0] 


if (playerRS == 1){
     player_prefix = "p1";
     redoArraySize[1] = p1ArrayOfP1ThrowsArray.length;
    }
 if (playerRS == 2){
     player_prefix = "p2";
     redoArraySize[2] = p2ArrayOfP2ThrowsArray.length;
   }
 if (playerRS == 3){
     player_prefix = "p3";
     redoArraySize[3] = p3ArrayOfP3ThrowsArray.length;
   }


 topRowId = player_prefix + "r0c0";
 bottomRowId = player_prefix + "r9c0";
 topRowThrow = document.getElementById(topRowId).innerHTML;
 bottomRowThrow = document.getElementById(bottomRowId).innerHTML;

 //document.getElementById("demo0").innerHTML = topRowThrow;
 //document.getElementById("demo1").innerHTML = bottomRowThrow;
 //document.getElementById("demo2").innerHTML = redoArraySize[playerRS];
 
 
 topRowColumn4 = player_prefix + "r0c3";
 bottomRowColumn4 = player_prefix + "r9c3"; 

 
 //alert(playerNumber);

 //document.getElementById("demo3").innerHTML = toggleUpDown;
 //document.getElementById("demo4").innerHTML = player_prefix;
 //document.getElementById("demo5").innerHTML = elementsInArray;
 //document.getElementById("demo6").innerHTML = topRowThrow;
 //document.getElementById("demo7").innerHTML = bottomRowThrow;
 //document.getElementById("demo8").innerHTML = "player number:";
 //document.getElementById("demo9").innerHTML = playerNumber;

 
 topRowThrow = parseInt(topRowThrow,10);
 bottomRowThrow = parseInt(bottomRowThrow,10);
 

 if (upOrDown == 1)
         {
           newTopRowThrow = topRowThrow - 1;
         } 

      if (upOrDown == 2)
         {
           newTopRowThrow = topRowThrow + 1;
         } 


 arrayPointer = newTopRowThrow;
 var row_counter = 0;
     
 while (row_counter <= 9)
        {
         row_col_0_id = player_prefix + "r" + row_counter + "c0";
         row_col_1_id = player_prefix + "r" + row_counter + "c1";
         row_col_2_id = player_prefix + "r" + row_counter + "c2";
         

 if (player_prefix == "p1")
         {
          document.getElementById(row_col_0_id).innerHTML = arrayPointer;
          document.getElementById(row_col_1_id).innerHTML = p1ArrayOfP1ThrowsArray[arrayPointer][0];
          document.getElementById(row_col_2_id).innerHTML = p1ArrayOfP1ThrowsArray[arrayPointer][1];
         }
 if (player_prefix == "p2")
         {
          document.getElementById(row_col_0_id).innerHTML = arrayPointer;
          document.getElementById(row_col_1_id).innerHTML = p2ArrayOfP2ThrowsArray[arrayPointer][0];
          document.getElementById(row_col_2_id).innerHTML = p2ArrayOfP2ThrowsArray[arrayPointer][1];
         }
 if (player_prefix == "p3")
         {
          document.getElementById(row_col_0_id).innerHTML = arrayPointer;
          document.getElementById(row_col_1_id).innerHTML = p3ArrayOfP3ThrowsArray[arrayPointer][0];
          document.getElementById(row_col_2_id).innerHTML = p3ArrayOfP3ThrowsArray[arrayPointer][1];
         } 
         
        row_counter++;
        arrayPointer++;     
      } //end while

      navigation_controls(playerRS);
 
  
}


function adjustInputDivs(div1,div2,div3,div4,div5)
{  
  document.getElementById(div1).style.width = "35%";
  document.getElementById(div1).style.height = "96%";
  document.getElementById(div2).style.width = "21%";
  document.getElementById(div2).style.height = "96%";
  document.getElementById(div3).style.width = "21%";
  document.getElementById(div3).style.height = "96%";
  document.getElementById(div4).style.width = "20%";
  document.getElementById(div4).style.height = "96%";
}

function adjustInputDivstest(div1,div2,div3,div4,div5)
{  
  document.getElementById(div1).style.width = "19%";
  document.getElementById(div1).style.height = "96%";
  document.getElementById(div2).style.width = "19%";
  document.getElementById(div2).style.height = "96%";
  document.getElementById(div3).style.width = "20%";
  document.getElementById(div3).style.height = "100%";
  document.getElementById(div4).style.width = "19%";
  document.getElementById(div4).style.height = "96%";
  document.getElementById(div5).style.width = "20%";
  document.getElementById(div5).style.height = "96%";
}

function adjustTable(tableDetails,propertyName,pixelSize)
{
 //x_id=tableDetails.rows[0].cells[0].id;
 rowsInTable = tableDetails.rows.length;
 columnsInTable = tableDetails.rows[0].cells.length;
 for (x = 0; x < rowsInTable; ++x)
     {
       columnID=tableDetails.rows[x].cells[0].id;
       document.getElementById(columnID).style.height =  pixelSize + "px";    
     }
} 


function adjust_div(divName,sfW,sfH,divAR,browserW,browserH)
{
  divW = browserW * sfW;
  divH = divW /divAR; 
  document.getElementById(divName).style.width = divW + "px";
  document.getElementById(divName).style.height = divH + "px";

}

function position_div(divName,xPosScale,yPosScale,browser_width,browser_height)
{
  xPos = xPosScale * browser_width;
  yPos = yPosScale * browser_height;
  document.getElementById(divName).style.left = xPos + "px";
  document.getElementById(divName).style.top = yPos + "px";
}


function open_home_page()
{
  //window.open("darts-1.php","_self","","");
  window.open("index.php","_self","",""); 
}


function reset_page()
{
  p1ArrayOfP1ThrowsArray = [];
  p1ThrowsArray = [];
  p2ArrayOfP2ThrowsArray = [];
  p2ThrowsArray = [];
  p3ArrayOfP3ThrowsArray = [];
  p3ThrowsArray = [];

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

  document.getElementById("hiddenPlayerSequence").innerHTML = 1;  
  nextThrowerReset = document.getElementById("playerNameOne").innerHTML;
  document.getElementById("nextThrower").innerHTML = nextThrowerReset;  
  
  targetReset = document.getElementById("hiddenGameToPlay").innerHTML;
  document.getElementById("p1Remain").innerHTML = targetReset;
  document.getElementById("p2Remain").innerHTML = targetReset;
  document.getElementById("p3Remain").innerHTML = targetReset;   
   
  document.getElementById("p1ThrowsSoFar").innerHTML = 0;
  document.getElementById("p2ThrowsSoFar").innerHTML = 0;
  document.getElementById("p3ThrowsSoFar").innerHTML = 0; 
 
  playerReset="p1";
  //stringReset="";
  //row_col_0_id = player_prefix + "r" + row_counter + "c0";
  for (p=1; p < 4; ++p)
      {
        for (x = 0; x < 10; ++x)
            {
              //string = string+x;
              //document.getElementById("demo").innerHTML =  string;    
              for (y = 0; y < 4; ++y)
                  {
                     cellId =  "p" + p + "r" + x + "c" + y; 
                     document.getElementById(cellId).innerHTML = "";
                  }
            }
      }
  


}

