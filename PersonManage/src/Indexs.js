import React from 'react';
import ManHeader from'./ManHeader.js';
import ManAllItem from './ManAllItem.js';
import ManFooter from './ManFooter.js';
import ManDetail from './ManDetail.js';
import Man from './Manage.js'



class App extends React.Component {


	constructor(props){
		super(props);
		this.state = {
			man: new Man,
			manDetail: null
		};
	}
	//增
	addManItem(item) {
		this.setState({
			man:this.state.man.addManItem(item)
		});
	}
	//删除
	removeManItem(key) {
		this.setState({
			man:this.state.man.removeManItem(key)
		});
	}

	//详情打开
	detailManItem(key) {
		this.setState({
			manDetail:this.state.man.man.filter(item=>{
				return item.key == key;
			})[0]
		});
	}
	//关闭
	closeDetail(){
		this.setState({
			manDetail:null
		});
	}
	//编辑
	editDetail(item) {
		this.setState({
			man:this.state.man.editManItem(item)
		});
	}
	//排序
	sortMan(sortType) {
		this.setState({
			man:this.state.man.sortMan(sortType)
		});
	}
	//筛选
	filtMan(filtType) {
    this.setState({
	    man: this.state.man.filtMan(filtType)
		});
	}
	
	/*
	 * 搜索
	 */
	searchMan(word) {
    this.setState({
	    man: this.state.man.searchMan(word)
		});
	}


	render(){
		return (
			<div>
				<ManHeader sortMan={this.sortMan.bind(this)} filtMan={this.filtMan.bind(this)} searchMan={this.searchMan.bind(this)}/>
				<ManAllItem items={this.state.man.man} removeManItem={this.removeManItem.bind(this)} detailManItem={this.detailManItem.bind(this)}/>
				<ManFooter addManItem={this.addManItem.bind(this)}/>
				<ManDetail manDetail={this.state.manDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
			</div>
		)
	}
}

React.render(<App />, document.getElementById('app'));