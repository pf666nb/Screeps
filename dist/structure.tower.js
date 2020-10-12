
let Structure_tower = {

    //进攻
    attack:function (tower){
        //查找防御塔周围最近的一个不属于你的creeps
        let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile){
            tower.attack(closestHostile);
        }

    },
    //修复
    repair:function (tower){
        //查找防御塔最近的一个低于最大血量的建筑，进行修补
        let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        //如果存在则进行修补
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }
    },
    //设定修复上限
    limtrepair:function(tower,limt){
         //查找防御塔最近的一个低于最大血量的建筑，进行修补
         let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => {structure.structureType == STRUCTURE_WALL&&structure.hits<limt}
        });
        console.log(closestDamagedStructure)
        //如果存在则进行修补
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }
    }
    
  
};

module.exports = Structure_tower;