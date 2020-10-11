
//引入生成creeps模块
let createcreep = require('role.create');
//引入工具类
let mainutil = require('main.util');


let loopCreate = {
    
    loopCreate : function(Spawn,creepsConfig){
       

        for(creepobj in creepsConfig){

            //获取当前可以使用的能量
            let energyAvailable = Game.spawns[Spawn].room.energyAvailable;
           
            //获取配置中的creeps的body组件
            let body = creepsConfig[creepobj].body;
            //获取配置中的creeps的role
            let role = creepsConfig[creepobj].role;
            //获取配置中的creeps的body组件的消耗
            let bodycost = mainutil.cost(body);
            //根据配置中的role去查询相应的creeps数量
            let creepsNum = _.filter(Game.creeps,(creep) => creep.memory.role == role).length;
            // console.log("可使用的能量"+energyAvailable+"所需能量"+bodycost)
            
     
           
            //判断creeps数量是否小于配置中的限制数量，如果小于则生成对应配置的creeps
            if(creepsConfig[creepobj].limt>creepsNum&&energyAvailable>=bodycost){
                console.log("正在创建")
                createcreep.create(Spawn,body,role);

            }


           
            
        }

    }
};

module.exports = loopCreate;