gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDSprite1Objects1= [];
gdjs.Untitled_32sceneCode.GDSprite1Objects2= [];
gdjs.Untitled_32sceneCode.GDSprite1Objects3= [];
gdjs.Untitled_32sceneCode.GDSprite1Objects4= [];
gdjs.Untitled_32sceneCode.GDSpawnerObjects1= [];
gdjs.Untitled_32sceneCode.GDSpawnerObjects2= [];
gdjs.Untitled_32sceneCode.GDSpawnerObjects3= [];
gdjs.Untitled_32sceneCode.GDSpawnerObjects4= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDSiteObjects1= [];
gdjs.Untitled_32sceneCode.GDSiteObjects2= [];
gdjs.Untitled_32sceneCode.GDSiteObjects3= [];
gdjs.Untitled_32sceneCode.GDSiteObjects4= [];
gdjs.Untitled_32sceneCode.GDSite2Objects1= [];
gdjs.Untitled_32sceneCode.GDSite2Objects2= [];
gdjs.Untitled_32sceneCode.GDSite2Objects3= [];
gdjs.Untitled_32sceneCode.GDSite2Objects4= [];
gdjs.Untitled_32sceneCode.GDSite22Objects1= [];
gdjs.Untitled_32sceneCode.GDSite22Objects2= [];
gdjs.Untitled_32sceneCode.GDSite22Objects3= [];
gdjs.Untitled_32sceneCode.GDSite22Objects4= [];
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects1= [];
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects2= [];
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects3= [];
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects4= [];
gdjs.Untitled_32sceneCode.GDGrassObjects1= [];
gdjs.Untitled_32sceneCode.GDGrassObjects2= [];
gdjs.Untitled_32sceneCode.GDGrassObjects3= [];
gdjs.Untitled_32sceneCode.GDGrassObjects4= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects3= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects4= [];
gdjs.Untitled_32sceneCode.GDRoundJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDRoundJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDRoundJoystickObjects3= [];
gdjs.Untitled_32sceneCode.GDRoundJoystickObjects4= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects4= [];
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects4= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{



}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.Untitled_32sceneCode.GDSpawnerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpawnerObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("spawn_location").setNumber(gdjs.randomInRange(50, 800));
}}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects1Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects1});
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.Untitled_32sceneCode.GDSpawnerObjects2);
{runtimeScene.getScene().getVariables().get("spawn_location").setNumber(gdjs.randomInRange(50, 800));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpawnerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpawnerObjects2[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("spawn_location")));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.Untitled_32sceneCode.GDSpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects1[i].setZOrder(1);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects2Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects2Objects = Hashtable.newFrom({"Site2": gdjs.Untitled_32sceneCode.GDSite2Objects2});
gdjs.Untitled_32sceneCode.asyncCallback10992620 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Untitled_32sceneCode.GDSprite1Objects2) asyncObjectsList.addObject("Sprite1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10992620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects2);

gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects2Objects, 12, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDSprite1Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.25, 5, 5, 2, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "1f1ebe8108992cd14f6e6efd76a9b665945c890b833501122abe84f5c6519b24_Hit 5.aac", false, 100, 1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10537092 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDSite2Objects1) asyncObjectsList.addObject("Site2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10537092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTargetRoundButtonObjects1Objects = Hashtable.newFrom({"TargetRoundButton": gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects3Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects3Objects = Hashtable.newFrom({"Site2": gdjs.Untitled_32sceneCode.GDSite2Objects3});
gdjs.Untitled_32sceneCode.asyncCallback10643564 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects4);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects4[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Untitled_32sceneCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Untitled_32sceneCode.GDSprite1Objects3) asyncObjectsList.addObject("Sprite1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10643564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects3);

gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects3);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects3Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects3Objects, 12, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDSprite1Objects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.25, 5, 5, 2, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "1f1ebe8108992cd14f6e6efd76a9b665945c890b833501122abe84f5c6519b24_Hit 5.aac", false, 100, 1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{


{
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10443772 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDSite2Objects1) asyncObjectsList.addObject("Site2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10443772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTargetRoundButtonObjects1Objects = Hashtable.newFrom({"TargetRoundButton": gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1});
gdjs.Untitled_32sceneCode.eventsList14 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects1Objects = Hashtable.newFrom({"Site2": gdjs.Untitled_32sceneCode.GDSite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects1Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects1Objects = Hashtable.newFrom({"Site2": gdjs.Untitled_32sceneCode.GDSite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects1Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects1});
gdjs.Untitled_32sceneCode.eventsList15 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scope_zoom_view_value")), "", 0);
}}

}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}{runtimeScene.getScene().getVariables().get("scope_zoom_view_value").setNumber(2);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("scope_view_is_zoomed"), false);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariables().get("Firing"), false);
}
}{runtimeScene.getScene().getVariables().get("scope_movement_speed").setNumber(4);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDSite2Objects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDSite2Objects1[0] : null), true, "", 0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "074c17bc259fa79fb9f8dd116c632fa9dd091b7ecea97957fbf0e8f6f4121944_Horror Mytery.aac", true, 100, 1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setX(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getX() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scope_movement_speed"))));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setX(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scope_movement_speed"))));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setY(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getY() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scope_movement_speed"))));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setY(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getY() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scope_movement_speed"))));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("scope_view_is_zoomed"), false);
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setScale(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getScale() + (1.25));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("scope_view_is_zoomed"), true);
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("scope_view_is_zoomed"), true);
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setScale(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getScale() - (1.25));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("scope_view_is_zoomed"), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSite2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariables().get("Firing"), false) ) {
        gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDSite2Objects1[k] = gdjs.Untitled_32sceneCode.GDSite2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSite2Objects1.length = k;}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDSite2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariables().get("Firing"), true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "d3f175cd0b845107446c68bdec2ce23d9c448062ef9f184825fb7dd644b79e16_Gun 1.aac", false, 50, 1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariables().get("Firing"), false);
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTargetRoundButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSite2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariables().get("Firing"), false) ) {
        gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDSite2Objects1[k] = gdjs.Untitled_32sceneCode.GDSite2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSite2Objects1.length = k;}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDSite2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariables().get("Firing"), true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "d3f175cd0b845107446c68bdec2ce23d9c448062ef9f184825fb7dd644b79e16_Gun 1.aac", false, 50, 1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTargetRoundButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariables().get("Firing"), false);
}
}}

}


{



}


{


gdjs.Untitled_32sceneCode.eventsList14(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects1Objects, 25, true);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scope_zoom_view_value")) >= 2;
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("scope_zoom_view_value").sub(0);
}{runtimeScene.getScene().getVariables().get("scope_movement_speed").setNumber(4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects1Objects, 25, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scope_zoom_view_value")) <= 10;
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("scope_zoom_view_value").add(0);
}{runtimeScene.getScene().getVariables().get("scope_movement_speed").setNumber(1);
}}

}


{


{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDSprite1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDSprite1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDSprite1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDSprite1Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSiteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSiteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSiteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSiteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDSite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDSite2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDSite2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDSite22Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDSite22Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDSite22Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDSite22Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDRoundJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRoundJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRoundJoystickObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRoundJoystickObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects4.length = 0;

gdjs.Untitled_32sceneCode.eventsList15(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
