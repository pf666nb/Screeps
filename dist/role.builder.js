var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
			let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			// let repairtargets = creep.room.find(FIND_STRUCTURES,{
			// 	filter:(structure) => {
			// 		return (structure.structureType == STRUCTURE_ROAD && structure.hits < structure.hitsMax)            
			// 	}
			// });

            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }else{
				
				if(!creep.repairStructure(STRUCTURE_ROAD)){
					creep.harvesttransfer()
				}
				
				// if(creep.repair(repairtargets[0]) == ERR_NOT_IN_RANGE) {
				// 	creep.moveTo(repairtargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
				// }
			}
	    }
	    else {
	        let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;