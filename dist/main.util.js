var mainutil = {

    

    //计算身体部件所需的能量
    cost: function(bodys) {
        let totalcost = 0;
        for(body of bodys){
   
            switch(body){
                case 'move':
                    totalcost+=50;
                    break;
                case 'work':
                    totalcost+=100;
                    break;
                case 'carry':
                    totalcost+=50;
                    break;
                case 'attack':
                    totalcost+=80;
                    break;
                case 'ranged_attack':
                    totalcost+=150;
                    break;
                case 'heal':
                    totalcost+=250;
                    break;
                case 'claim':
                    totalcost+=600;
                    break;
                case 'tough':
                    totalcost+=10;
                    break;
                default:
                    break;
            }
        }
        return totalcost;
	    
	}
};

module.exports = mainutil;