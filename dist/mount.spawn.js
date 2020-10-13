module.exports = function () {
    _.assign(StructureTower.prototype, creepExtension)
}

//自定义的Tower的拓展

const spawnExtension = {
    

    work(){
        // 自己已经在生成了 / 内存里没有生成队列 / 生产队列为空 就啥都不干
    if (this.spawning || !this.memory.spawnList || this.memory.spawnList.length == 0) return 

    // 进行生成
    const spawnSuccess = this.mainSpawn(this.memory.spawnList[0])
    
    // 生成成功后移除任务
    if (spawnSuccess) this.memory.spawnList.shift()

    },
    addTask(taskName){
        // 任务加入队列
        this.memory.spawnList.push(taskName)
        return this.memory.spawnList.length

    },
    mainSpawn(){

    }
   

    



}