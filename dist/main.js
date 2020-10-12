//引入角色配置
let roleconfig = require('role.config');
//引入工作者模块
let roleHarvester = require('role.harvester');
//引入修建者模块
let roleBuilder = require('role.builder');
//引入升级者模块
let roleUpgrader = require('role.upgrader');
//引入主配置
let mainconfig = require('main.config');
//引入生成creeps模块
let createcreep = require('role.create');
//引入工具类
let mainutil = require('main.util');
//引入循环生成creeps模块
let loopCreate = require('role.loopCreate');
//引入防御塔的模块
let Structure_tower = require('structure.tower');


//主循环
module.exports.loop = function () {
    //清理死亡creeps的记忆
    for(let name in Memory.creeps){
        if(!Game.creeps[name]){
            delete Memory.creeps[name];
            console.log("清除了死亡creep的记忆--名字为",name);
        }
    }

    //抽出当前房间的防御塔
//     let tower = Game.spawns[mainconfig.MySpawn[0]].room.find(FIND_STRUCTURES,{
//         filter: (structure) => {
//             return (structure.structureType == STRUCTURE_TOWER)            
//         }
// });
    let tower = Game.getObjectById('5f8338d3a58ab1bb76bacf1e');
    Structure_tower.attack(tower);
    Structure_tower.repair(tower);
    

    loopCreate.loopCreate(mainconfig.MySpawn[0],roleconfig.BaiscsLoopCreate);

    // for(item in roleconfig.test){
        
    //     console.log(roleconfig.test[item].limt)
    // }
  
    // //从所有中creeps中抽离出工作者
    // let harvesters = _.filter(Game.creeps,(creep) => creep.memory.role == roleconfig.harvester);
    // //从所有中creeps中抽离出修建者
    // let builders = _.filter(Game.creeps,(creep) => creep.memory.role == roleconfig.builder);
    // //从所有中creeps中抽离出升级者
    // let upgraders = _.filter(Game.creeps,(creep) => creep.memory.role == roleconfig.upgrader);

  
    // //当前房间可使用能量
    // let energyAvailable = Game.spawns[mainconfig.MySpawn[0]].room.energyAvailable;

    // for(creep in roleconfig.BaiscsLoopCreate){
    //     console.log(roleconfig.BaiscsLoopCreate[creep].limt);
    // }
    
    


    // //如果能源够最基本的creeps消耗
    // // console.log(builders.length<roleconfig.BuilderNum);
    // if(energyAvailable>=mainutil.cost(roleconfig.BasicsCreeps)){
    //      //判断creeps的数量是否低于roleconfig中定义的数量,如果低于则创造creeps
    // if(harvesters.length < roleconfig.HarvesterNum){
    //     if(energyAvailable>=mainutil.cost(roleconfig.BigHarvesterCreeps)){
    //         createcreep.create(mainconfig.MySpawn[0],roleconfig.BigHarvesterCreeps,roleconfig.harvester);
    //     }else{
    //     createcreep.create(mainconfig.MySpawn[0],roleconfig.BasicsCreeps,roleconfig.harvester);
    //     }
    // }
    // if(upgraders.length<roleconfig.UpgraderNum){
    //     //判断本房间中所有 spawn 和 extension 中的可用能量总额是否够生成对应的creeps，如果等于550则创造一个更大的creeps；
    //     if(energyAvailable>mainutil.cost(roleconfig.BigUpgraderCreeps)){
    //         createcreep.create(mainconfig.MySpawn[0],roleconfig.BigUpgraderCreeps,roleconfig.upgrader);
    //     }else{
    //         createcreep.create(mainconfig.MySpawn[0],roleconfig.BasicsCreeps,roleconfig.upgrader);
    //     }
    // }
    // if(builders.length < roleconfig.BuilderNum){
        
    //     createcreep.create(mainconfig.MySpawn[0],roleconfig.BasicsCreeps,roleconfig.builder);
    // }
            
    // }

    

   
    


    //显示当前Spawn孵化的进度
    if(Game.spawns[mainconfig.MySpawn[0]].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns[mainconfig.MySpawn[0]].spawning.name];
        Game.spawns[mainconfig.MySpawn[0]].room.visual.text(
            '🛠️' + spawningCreep.memory.role+";",
            Game.spawns[mainconfig.MySpawn[0]].pos.x + 1, 
            Game.spawns[mainconfig.MySpawn[0]].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    

    //每个creeps执行相应的行动
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == roleconfig.harvester) {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == roleconfig.builder){
            roleBuilder.run(creep);
        }
        if(creep.memory.role == roleconfig.upgrader) {
            roleUpgrader.run(creep);
        }
    }
}