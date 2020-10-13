module.exports = function () {
    _.assign(Creep.prototype, creepExtension)
}

//自定义的Creep的拓展

const creepExtension = {

    /**
     * 
     * @param {修补指定的建筑} Structure 
     */
    repairStructure(Structure){

        //抽离出对应的建筑
		let repairtargets = this.room.find(FIND_STRUCTURES,{
				filter:(structure) => {
					return (structure.structureType == Structure && structure.hits < structure.hitsMax)            
				}
        });
        
        if(this.repair(repairtargets[0]) == ERR_NOT_IN_RANGE) {
            this.moveTo(repairtargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
        }
      
        if(repairtargets[0]!=null){
      
            return true
        }else{
    
            return false
        }
        
    },
    harvestSources(){

        let sources = this.room.find(FIND_SOURCES);

         //如果太远则移动到矿的位置
        if(this.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                
            this.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    },
    
    harvesttransfer(){
    //抽出需要能源的建筑
    let targets = this.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER) && 
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
    });

    if(targets.length > 0) {
        if(this.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            this.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }


    }


    



}