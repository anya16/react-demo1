class manItem {
	constructor(item) {
		this.info = {};
		this.info.name = item.name;
		this.info.age = item.age || 0;
		this.info.id = item.id;
		this.info.sex = item.sex;
		this.info.descrip = item.descrip || '';
		this.key = ++manItem.key;
	}
}
manItem.key = 0;
export default class Man {
	constructor(){
		this.allMan = [
			new manItem(Man.rawData[0]),
			new manItem(Man.rawData[1]),
			new manItem(Man.rawData[2]),
			new manItem(Man.rawData[3]),
			new manItem(Man.rawData[4]),
			new manItem(Man.rawData[5]),
			new manItem(Man.rawData[6]),
			new manItem(Man.rawData[7]),
			new manItem(Man.rawData[8]),
			new manItem(Man.rawData[9]),
			new manItem(Man.rawData[10])			
		];
		this.man = [];
		this.sortType = 0;
		this.filtType = 0;
		this.word = '';
		this._sortMan(this.sortType);
		this._filtMan(this.filtType);
	}
	//增
	addManItem(item) {
		let newItem = new manItem(item);
		this.allMan.push(newItem);
		this._sortMan(this.sortType);
		this._filtMan(this.filtType);
		this._searchMan(this.word);
		return this;
	}
	//删
	removeManItem(key) {
		let newMan = this.allMan.filter(item =>{return item.key != key;});
		this.allMan = newMan;
		this._filtMan(this.filtType);
		this._searchMan(this.word);
		return this;
	}
	//改
	editManItem(item) {
		this.allMan.forEach(manItem=>{
			if(manItem.key == item.key) {
				manItem.info.name = item.name;
				manItem.info.sex= item.sex;
				manItem.info.age = item.age;
				manItem.info.id = item.id;
				manItem.info.descrip = item.descrip;
			}
		});
		this._sortMan(this.sortType);
		this._filtMan(this.filtType);
		this._searchMan(this.word);
		return this;
	}

	//筛选
	_filtMan(filtType) {
		this.filtType= filtType;
		switch(parseInt(filtType)){
			case 0:
				this.man = this.allMan;
			break;
			case 1:
				this.man = this.allMan.filter(item=>{
					return item.info.id =='总监';
				});
			break;
			case 2:
				this.man = this.allMan.filter(item=>{
					return item.info.id =='经理';
				});
			break;
			case 3:
				this.man = this.allMan.filter(item=>{
					return item.info.id =='程序员';
				});
			break;
			case 4:
				this.man = this.allMan.filter(item=>{
					return item.info.id =='实习';
				});
				break;
			default:break;

		}

	}
	//排序
	_sortMan(sortType) {
		this.sortType= sortType;		
		switch(parseInt(sortType)) {
			case 0:
				this.allMan.forEach(item=>{
					switch (item.info.id) {
						case '总监':
						item.info.id = 1;break;
						case '经理':
						item.info.id = 2;break;
						case '程序员':
						item.info.id = 3;break;
						case '实习':
						item.info.id = 4;break;
					default:break;
					}
				});
				this.allMan.sort(function(item1,item2){
					if(item1.info.id<item2.info.id){
						return -1;
					} else if (item1.info.id > item2.info.id){
						return 1;
					} else {
						return 0;
					}
				});
				this.allMan.forEach(item=>{
					switch(item.info.id) {
						case 1:
						item.info.id = '总监';break;
						case 2:
						item.info.id = '经理';break;
						case 3:
						item.info.id = '程序员';break;
						case 4:
						item.info.id = '实习';break;
					default:break;
					}
				});
			break;
			case 1:
			this.allMan.sort(function(item1,item2){
				if (item1.info.age < item2.info.age) {
					return -1;
				} else if (item1.info.age > item2.info.age){
					return 1;

				} else {
					return 0;
				}
			});
			break;
			case 2:
			this.allMan.sort(function(item1,item2) {
				if (item1.info.age < item2.info,age) {
					return 1;
				} else if(item1.info.age > item2.info.age){
					return -1;
				} else {
					return 0;
				}
			});
			break;
			default:break;
		}
		
		
	}
	//搜索
	_searchMan(word) {
		this.word = word;
		this.man = this.man.filter(item =>{
			return item.info.name.indexOf(word) !=-1 ||
			       (item.info.age+'').indexOf(word) !=-1 ||
			       item.info.id.indexOf(word) !=-1 ||
			       item.info.sex.indexOf(word) !=-1;
		});
	}
	filtMan(filtType) {
		this._filtMan(filtType);
		this._searchMan(this.word);
		return this;
	}
	sortMan(sortType) {
		this._sortMan(sortType);
		this._filtMan(this.filtType);
		this._searchMan(this.word);
		return this;
	}
}
Man.rawData= [
	{ descrip:'好好学习，天天向上', sex: '男', age: 20, name: '张三', id: '总监'},
	{ descrip:'好好学习，天天向上', sex: '女', age: 21, name: '李四', id: '程序员'},
	{ descrip:'好好学习，天天向上', sex: '女', age: 22, name: '王五', id: '程序员'},
	{ descrip:'好好学习，天天向上', sex: '女', age: 24, name: '秦秦', id: '实习'},
	{ descrip:'好好学习，天天向上', sex: '男', age: 23, name: '秦大侠', id: '实习'},
	{ descrip:'好好学习，天天向上', sex: '男', age: 22, name: 'Anya', id: '程序员'},
	{ descrip:'好好学习，天天向上', sex: '男', age: 24, name: '张八', id: '总监'},
	{ descrip:'好好学习，天天向上', sex: '男', age: 35, name: '李四', id: '经理'},
	{ descrip:'好好学习，天天向上', sex: '男', age: 42, name: '王五', id: '经理'},
	{ descrip:'好好学习，天天向上', sex: '男', age: 50, name: '赵六', id: '实习'},
	{ descrip:'好好学习，天天向上', sex: '男', age: 60, name: '孙七', id: '实习'}
]	