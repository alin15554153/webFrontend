// //量测：三维测量
// //测距
// var measureDist = document.getElementById('measure_distances');
// measureDist.addEventListener("click",
//     function() {
// 		clearHandler();
//         if(!Cesium.MeasureSurvey.measureDist(viewer)){
//             console.log('加载测距模块失败');
//         }
//     }
// );
// //测高
// var measureHeight = document.getElementById('measure_height');
// measureHeight.addEventListener("click",
//     function() {
// 		clearHandler();
//         if(!Cesium.MeasureSurvey.measureHeight(viewer)){
//             console.log('加载测高模块失败');
//         }
//     }
// );
// //测面
// var measureArea = document.getElementById('measure_area');
// measureArea.addEventListener("click",
//     function() {
// 		clearHandler();
//         if(!Cesium.MeasureSurvey.measureArea(viewer)){
//             console.log('加载测面模块失败');
//         }
//     }
// );
// //关闭标注、测量的监听
// var clearHandler = document.getElementById('measure_clear');
// clearHandler = function(){
// 	Cesium.MeasureSurvey.clearHandler();
// 	Cesium.LabelFunction.clearHandler();    
// };
// //清除量测结果
// var measureClear = document.getElementById('measure_clear');
// measureClear.addEventListener("click",
//     function() {
//         if(!Cesium.MeasureSurvey.measureClear(viewer)){
//             console.log('加载清除测量结果模块失败');
//         }
//     }
// );