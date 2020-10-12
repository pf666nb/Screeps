//creeps的配置

let roleconfig = {
    
    //设定creeps的分工
    harvester:"harvester",
    builder:"builder",
    upgrader:"upgrader",


    //设定creeps的数量
    HarvesterNum:1,
    UpgraderNum:3,
    BuilderNum:2,

    //设定creeps的体型
    BasicsCreeps:[WORK,CARRY,MOVE],
    
    BigUpgraderCreeps:[WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE],
    BigHarvesterCreeps:[WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE],

    // test:{
    //     body:{limt:HarvesterNum}
    // },



    BaiscsLoopCreate:{
        Bigharvester:{body:[WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE],role:"harvester",limt:2},
        BigUpgrader:{body:[WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE],role:"upgrader",limt:2},
        BigBuilder:{body:[WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE],role:"builder",limt:2},
        // harvester:{body:[WORK,CARRY,MOVE],role:"harvester",limt:1},
        // builder:{body:[WORK,CARRY,MOVE],role:"builder",limt:3},
        // upgrader:{body:[WORK,CARRY,MOVE],role:"upgrader",limt:3},
    }
   


    
   
};

module.exports = roleconfig;