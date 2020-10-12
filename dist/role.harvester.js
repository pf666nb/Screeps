let roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.harvesting = false;
            creep.say('🔄 挖矿');
	    }
	    if(!creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
	        creep.memory.harvesting = true;
	        creep.say('⚡ 运输');
        }
        if(creep.memory.harvesting){
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_TOWER) && 
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
        });
        // console.log(targets)
        if(targets.length > 0) {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        }else{
             //获取所有矿资源
             let sources = creep.room.find(FIND_SOURCES);
             //如果太远则移动到矿的位置
             if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                
                 creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
             }

        }

	
	}
};

module.exports = roleHarvester;