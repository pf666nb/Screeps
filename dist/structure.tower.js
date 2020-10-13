
let Structure_tower = {

    //进攻
    /**
     * 
     * @param {目标防御塔} tower 
     */
    attack:function (tower){
        //查找防御塔周围最近的一个不属于你的creeps
        
        let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile){
            tower.room.visual.text("❗",closestHostile.pos.x,closestHostile.pos.y,{align: 'left', opacity: 0.8});
            tower.attack(closestHostile);
        }

    },
    //修复任何低于最大生命值的最近建筑
    /**
     * 
     * @param {目标防御塔} tower 
     */
    repair:function (tower){
        //查找防御塔最近的一个低于最大血量的建筑，进行修补
        
        let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        //如果存在则进行修补
      
        if(closestDamagedStructure) {
            tower.room.visual.text("💗",closestDamagedStructure.pos.x,closestDamagedStructure.pos.y,{align: 'left', opacity: 0.8});
            tower.repair(closestDamagedStructure);
        }
    },
    /**
     * 
     * @param {目标防御塔} Tower 
     * @param {目标建筑} Structure 
     * @param {目标建筑的限制血量} hitslimt 
     */
    limtrepair:function(Tower,Structure,hitslimt){
        //抽出对应类型和规定血量以下的建筑
        let closestDamagedStructure = Tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => { return (structure.structureType == Structure) &&structure.hits < hitslimt;}

        });
        if(closestDamagedStructure) {
           
            Tower.room.visual.text("💗",closestDamagedStructure.pos.x,closestDamagedStructure.pos.y,{align: 'left', opacity: 0.8});
            Tower.repair(closestDamagedStructure);
        }
  
    }

    
  
};

module.exports = Structure_tower;