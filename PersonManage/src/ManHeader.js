import React from 'react';
export default class ManHeader extends React.Component {

	 handlerOrderChange(){
	  let sel = React.findDOMNode(this.refs.selOrder);
		let selValue = sel.options[sel.selectedIndex].value;
		this.props.sortMan(selValue);
	}
	
	//筛选
	handlerIdChange(){
	  let sel = React.findDOMNode(this.refs.selId);
		let selValue = sel.options[sel.selectedIndex].value;
		console.log(selValue);
		this.props.filtMan(selValue);
	}
	
	//search
	handlerSearch(){
	  let bar = React.findDOMNode(this.refs.searchBar);
		let value = bar.value;
		this.props.searchMan(value);
	}
	render(){
		return (
			<div className="personBox">
				<h3 className='titleH3'>人员管理</h3>
				<ul className='choseHeader clearfix'>
					<li>

						<input type="text" ref='searchBar' placeholder='Search...' onChange={this.handlerSearch.bind(this)} />
					</li>
					<li>
						<label for="idSelect">人员筛选:</label>
						<select id="idSelect" ref='selId' onChange={this.handlerIdChange.bind(this)}>
							<option value="0">全部</option>
							<option value="1">主任</option>
							<option value="2">老师</option>
							<option value="3">学生</option>
							<option value="4">实习</option>
						</select>
					</li>
					<li>
						<label for="orderSelect">排列方式:</label>
						<select id="orderSelect" ref='selOrder' onChange={this.handlerOrderChange.bind(this)}>
							<option value="0">身份</option>
							<option value="1">年龄升</option>
							<option value="2">年龄降</option>
						</select>
					</li>
				</ul>
			</div>
		)
	}
}