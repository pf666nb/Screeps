let createcreep = {


    
    /**
     * 
     * @param {生产的母体} Spawn 
     * @param {生成的creep的配置} body 
     * @param {生成的creep的角色} role 
     */
     create: function(Spawn,body,role) {
        //获取当前可以使用的能量
        let energyAvailable = Game.spawns[Spawn].room.energyAvailable;
        //为新crepps随机设置名字
        let newName = role + Game.time;
        let nums = Game.spawns[Spawn].spawnCreep(body,newName,{memory:{role:role}});


        console.log(Spawn+"生成了一个"+newName+"，body为"+body+";role为"+role+";函数调用结果为"+nums);
        
        
        
	}


}

module.exports = createcreep;