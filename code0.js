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
gdjs.Untitled_32sceneCode.GDMarkerObjects1= [];
gdjs.Untitled_32sceneCode.GDMarkerObjects2= [];
gdjs.Untitled_32sceneCode.GDMarkerObjects3= [];
gdjs.Untitled_32sceneCode.GDMarkerObjects4= [];
gdjs.Untitled_32sceneCode.GDMarkerStartObjects1= [];
gdjs.Untitled_32sceneCode.GDMarkerStartObjects2= [];
gdjs.Untitled_32sceneCode.GDMarkerStartObjects3= [];
gdjs.Untitled_32sceneCode.GDMarkerStartObjects4= [];
gdjs.Untitled_32sceneCode.GDMessageObjects1= [];
gdjs.Untitled_32sceneCode.GDMessageObjects2= [];
gdjs.Untitled_32sceneCode.GDMessageObjects3= [];
gdjs.Untitled_32sceneCode.GDMessageObjects4= [];
gdjs.Untitled_32sceneCode.GDBorderObjects1= [];
gdjs.Untitled_32sceneCode.GDBorderObjects2= [];
gdjs.Untitled_32sceneCode.GDBorderObjects3= [];
gdjs.Untitled_32sceneCode.GDBorderObjects4= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects1Objects = Hashtable.newFrom({"Site2": gdjs.Untitled_32sceneCode.GDSite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.Untitled_32sceneCode.GDBorderObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.Untitled_32sceneCode.GDBorderObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{



}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.Untitled_32sceneCode.GDSpawnerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpawnerObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("spawn_location").setNumber(gdjs.randomInRange(50, 650));
}}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);
}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects2Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects2});
gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.Untitled_32sceneCode.GDSpawnerObjects2);
{runtimeScene.getScene().getVariables().get("spawn_location").setNumber(gdjs.randomInRange(50, 650));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpawnerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpawnerObjects2[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("spawn_location")));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.Untitled_32sceneCode.GDSpawnerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpawnerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpawnerObjects2[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects2[i].getBehavior("PlatformerObject").setGravity(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects2[i].getBehavior("PlatformerObject").setMaxFallingSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)), false);
}
}}

}


{


{
}

}


};gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects2Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects2Objects = Hashtable.newFrom({"Site2": gdjs.Untitled_32sceneCode.GDSite2Objects2});
gdjs.Untitled_32sceneCode.asyncCallback10859836 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Untitled_32sceneCode.GDSprite1Objects2) asyncObjectsList.addObject("Sprite1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10859836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects2);

gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects2Objects, 16, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDSprite1Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.25, 5, 5, 2, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "1f1ebe8108992cd14f6e6efd76a9b665945c890b833501122abe84f5c6519b24_Hit 5.aac", false, 100, 1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10859124 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDSite2Objects1) asyncObjectsList.addObject("Site2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10859124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList11 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Untitled_32sceneCode.GDMarkerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDMarkerStartObjects1Objects = Hashtable.newFrom({"MarkerStart": gdjs.Untitled_32sceneCode.GDMarkerStartObjects1});
gdjs.Untitled_32sceneCode.eventsList12 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Untitled_32sceneCode.GDMessageObjects1);
gdjs.Untitled_32sceneCode.GDMarkerObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDMarkerStartObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDMarkerObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMarkerObjects1[i].setScale(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMarkerObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDMarkerObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMessageObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.input.getTouchX(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getVariables()).getFromIndex(0))), "", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getVariables()).getFromIndex(0))), "", 0));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDMarkerStartObjects1Objects, gdjs.evtTools.input.getTouchX(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getVariables()).getFromIndex(0))), "", 0), gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getVariables()).getFromIndex(0))), "", 0), "");
}}

}


};gdjs.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

{


{
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects3Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects3Objects = Hashtable.newFrom({"Site2": gdjs.Untitled_32sceneCode.GDSite2Objects3});
gdjs.Untitled_32sceneCode.asyncCallback10869620 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects4);

gdjs.copyArray(asyncObjectsList.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects4);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects4[i].setVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects4[i].getVariables().get("Firing"), false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(8).add(5);
}}
gdjs.Untitled_32sceneCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Untitled_32sceneCode.GDSite2Objects3) asyncObjectsList.addObject("Site2", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDSprite1Objects3) asyncObjectsList.addObject("Sprite1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10869620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects3);

gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Untitled_32sceneCode.GDSprite1Objects3);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects3Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects3Objects, 16, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDSprite1Objects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSprite1Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSprite1Objects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.25, 5, 5, 2, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "1f1ebe8108992cd14f6e6efd76a9b665945c890b833501122abe84f5c6519b24_Hit 5.aac", false, 100, 1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{


{
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10868460 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Untitled_32sceneCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDSite2Objects1) asyncObjectsList.addObject("Site2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10868460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList17 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects1Objects = Hashtable.newFrom({"Site2": gdjs.Untitled_32sceneCode.GDSite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects1Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects1Objects = Hashtable.newFrom({"Site2": gdjs.Untitled_32sceneCode.GDSite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects1Objects = Hashtable.newFrom({"Sprite1": gdjs.Untitled_32sceneCode.GDSprite1Objects1});
gdjs.Untitled_32sceneCode.eventsList18 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.Untitled_32sceneCode.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBorderObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDBorderObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDSite2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBorderObjects1Objects, false);
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{



}


{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{runtimeScene.getScene().getVariables().get("scope_zoom_view_value").setNumber(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("scope_view_is_zoomed"), false);
}{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(20);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariables().get("Firing"), false);
}
}{runtimeScene.getScene().getVariables().get("scope_movement_speed").setNumber(4);
}{gdjs.evtTools.sound.playSound(runtimeScene, "074c17bc259fa79fb9f8dd116c632fa9dd091b7ecea97957fbf0e8f6f4121944_Horror Mytery.aac", true, 100, 1);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);
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
gdjs.Untitled_32sceneCode.eventsList10(runtimeScene);} //End of subevents
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


gdjs.Untitled_32sceneCode.eventsList11(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 0;
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Untitled_32sceneCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarkerStart"), gdjs.Untitled_32sceneCode.GDMarkerStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMarkerObjects1[i].setPosition(gdjs.evtTools.input.getTouchX(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDMarkerObjects1[i].getVariables().getFromIndex(0))), "", 0),gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDMarkerObjects1[i].getVariables().getFromIndex(0))), "", 0));
}
}{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber((( gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getPointX("")) - (( gdjs.Untitled_32sceneCode.GDMarkerStartObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarkerStartObjects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber((( gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getPointY("")) - (( gdjs.Untitled_32sceneCode.GDMarkerStartObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarkerStartObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setPosition(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getX() +gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)),gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getY() +gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMarkerStartObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMarkerStartObjects1[i].setPosition(gdjs.evtTools.input.getTouchX(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getVariables()).getFromIndex(0))), "", 0),gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getVariables()).getFromIndex(0))), "", 0));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Untitled_32sceneCode.GDMarkerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.hasTouchEnded(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getVariables()).getFromIndex(0))));
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDMarkerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("MarkerStart"), gdjs.Untitled_32sceneCode.GDMarkerStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Untitled_32sceneCode.GDMessageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Site2"), gdjs.Untitled_32sceneCode.GDSite2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMessageObjects1[i].setString("ENDED");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMessageObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMessageObjects1[i].setString(gdjs.evtTools.common.toString((( gdjs.Untitled_32sceneCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarkerObjects1[0].getPointX("")) - (( gdjs.Untitled_32sceneCode.GDMarkerStartObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarkerStartObjects1[0].getPointX(""))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSite2Objects1[i].setVariableBoolean(gdjs.Untitled_32sceneCode.GDSite2Objects1[i].getVariables().get("Firing"), true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "d3f175cd0b845107446c68bdec2ce23d9c448062ef9f184825fb7dd644b79e16_Gun 1.aac", false, 50, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMarkerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMarkerStartObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMarkerStartObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.eventsList17(runtimeScene);
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
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scope_zoom_view_value")) == 1;
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
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSite2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSprite1Objects1Objects, 20, false);
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
gdjs.Untitled_32sceneCode.GDMarkerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMarkerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMarkerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMarkerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDMarkerStartObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMarkerStartObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMarkerStartObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMarkerStartObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDMessageObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMessageObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMessageObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMessageObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBorderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBorderObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBorderObjects4.length = 0;

gdjs.Untitled_32sceneCode.eventsList18(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
