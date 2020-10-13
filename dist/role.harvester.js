let roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.harvesting = false;
            creep.say('🟢 挖矿');
	    }
	    if(!creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
	        creep.memory.harvesting = true;
	        creep.say('🟢 运输');
        }
        if(creep.memory.harvesting){
            creep.harvesttransfer();
        }else{
            creep.harvestSources();

        }

	
	}
};

module.exports = roleHarvester;