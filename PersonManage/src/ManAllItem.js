import React from 'react';
import ManItem from './ManItem.js';
export default class ManAllItem extends React.Component {
	render(){
		let items = [];
		
		if(this.props.items.length == 0) {
		  items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>);
		}else {
	    this.props.items.forEach(item => {
		    items.push(<ManItem key={item.key} item={item} removeManItem={this.props.removeManItem} detailManItem={this.props.detailManItem}/>);
	    });
		}
		return (
			<table className='allItem'>
				<tHead>
					<th className='itemTh'>姓名</th>
					<th className='itemTh'>年龄</th>
					<th className='itemTh'>身份</th>
					<th className='itemTh'>性别</th>
					<th className='itemTh'>操作</th>
				</tHead>
				<tbody>{items}</tbody>
			</table>
		);
	}

}