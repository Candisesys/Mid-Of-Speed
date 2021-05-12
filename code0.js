gdjs.GameCode = {};
gdjs.GameCode.repeatCount3 = 0;

gdjs.GameCode.repeatIndex3 = 0;

gdjs.GameCode.GDjackObjects1= [];
gdjs.GameCode.GDjackObjects2= [];
gdjs.GameCode.GDjackObjects3= [];
gdjs.GameCode.GDheartObjects1= [];
gdjs.GameCode.GDheartObjects2= [];
gdjs.GameCode.GDheartObjects3= [];
gdjs.GameCode.GDNewObject2Objects1= [];
gdjs.GameCode.GDNewObject2Objects2= [];
gdjs.GameCode.GDNewObject2Objects3= [];
gdjs.GameCode.GDNewObjectObjects1= [];
gdjs.GameCode.GDNewObjectObjects2= [];
gdjs.GameCode.GDNewObjectObjects3= [];
gdjs.GameCode.GDreset2Objects1= [];
gdjs.GameCode.GDreset2Objects2= [];
gdjs.GameCode.GDreset2Objects3= [];
gdjs.GameCode.GDresetObjects1= [];
gdjs.GameCode.GDresetObjects2= [];
gdjs.GameCode.GDresetObjects3= [];
gdjs.GameCode.GDcursorObjects1= [];
gdjs.GameCode.GDcursorObjects2= [];
gdjs.GameCode.GDcursorObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("jack"), gdjs.GameCode.GDjackObjects2);
{for(var i = 0, len = gdjs.GameCode.GDjackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDjackObjects2[i].setY(gdjs.GameCode.GDjackObjects2[i].getY() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("jack"), gdjs.GameCode.GDjackObjects2);
{for(var i = 0, len = gdjs.GameCode.GDjackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDjackObjects2[i].setY(gdjs.GameCode.GDjackObjects2[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("jack"), gdjs.GameCode.GDjackObjects2);
{for(var i = 0, len = gdjs.GameCode.GDjackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDjackObjects2[i].setX(gdjs.GameCode.GDjackObjects2[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("jack"), gdjs.GameCode.GDjackObjects1);
{for(var i = 0, len = gdjs.GameCode.GDjackObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDjackObjects1[i].setX(gdjs.GameCode.GDjackObjects1[i].getX() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDjackObjects1Objects = Hashtable.newFrom({"jack": gdjs.GameCode.GDjackObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDheartObjects1Objects = Hashtable.newFrom({"heart": gdjs.GameCode.GDheartObjects1});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("heart"), gdjs.GameCode.GDheartObjects1);
gdjs.copyArray(runtimeScene.getObjects("jack"), gdjs.GameCode.GDjackObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDjackObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDheartObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDheartObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound FX\\Pickup_coin 1.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.GameCode.GDheartObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDheartObjects1[i].setPosition(gdjs.randomInRange(0, 800),gdjs.randomInRange(0, 600));
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.GameCode.repeatCount3 = 1;
for(gdjs.GameCode.repeatIndex3 = 0;gdjs.GameCode.repeatIndex3 < gdjs.GameCode.repeatCount3;++gdjs.GameCode.repeatIndex3) {

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}if (gdjs.GameCode.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7319604);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(10);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 100;
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= -(20);
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresetObjects2Objects = Hashtable.newFrom({"reset": gdjs.GameCode.GDresetObjects2});gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("heart"), gdjs.GameCode.GDheartObjects2);
gdjs.copyArray(runtimeScene.getObjects("jack"), gdjs.GameCode.GDjackObjects2);
{for(var i = 0, len = gdjs.GameCode.GDjackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDjackObjects2[i].setPosition(109,355);
}
}{for(var i = 0, len = gdjs.GameCode.GDheartObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDheartObjects2[i].setPosition(gdjs.randomInRange(0, 800),gdjs.randomInRange(0, 600));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresetObjects1Objects = Hashtable.newFrom({"reset": gdjs.GameCode.GDresetObjects1});gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("reset"), gdjs.GameCode.GDresetObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresetObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDresetObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDresetObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDresetObjects2[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("reset"), gdjs.GameCode.GDresetObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresetObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDresetObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDresetObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresetObjects1[i].setAnimationFrame(0);
}
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.GameCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObjectObjects1[i].setString("Speed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.GameCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject2Objects1[i].setString("Time: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.GameCode.GDcursorObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.GameCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDjackObjects1.length = 0;
gdjs.GameCode.GDjackObjects2.length = 0;
gdjs.GameCode.GDjackObjects3.length = 0;
gdjs.GameCode.GDheartObjects1.length = 0;
gdjs.GameCode.GDheartObjects2.length = 0;
gdjs.GameCode.GDheartObjects3.length = 0;
gdjs.GameCode.GDNewObject2Objects1.length = 0;
gdjs.GameCode.GDNewObject2Objects2.length = 0;
gdjs.GameCode.GDNewObject2Objects3.length = 0;
gdjs.GameCode.GDNewObjectObjects1.length = 0;
gdjs.GameCode.GDNewObjectObjects2.length = 0;
gdjs.GameCode.GDNewObjectObjects3.length = 0;
gdjs.GameCode.GDreset2Objects1.length = 0;
gdjs.GameCode.GDreset2Objects2.length = 0;
gdjs.GameCode.GDreset2Objects3.length = 0;
gdjs.GameCode.GDresetObjects1.length = 0;
gdjs.GameCode.GDresetObjects2.length = 0;
gdjs.GameCode.GDresetObjects3.length = 0;
gdjs.GameCode.GDcursorObjects1.length = 0;
gdjs.GameCode.GDcursorObjects2.length = 0;
gdjs.GameCode.GDcursorObjects3.length = 0;

gdjs.GameCode.eventsList6(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
