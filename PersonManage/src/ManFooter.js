import React from 'react';
export default class ManFooter extends React.Component {
		handlerAddClick(evt){
	  evt.preventDefault();
		let item = {};
		let addForm = React.findDOMNode(this.refs.addForm);
		let sex = addForm.querySelector('#manAddSex');
		let id = addForm.querySelector('#manAddId');
		
		item.name = addForm.querySelector('#manAddName').value.trim();
		item.age = addForm.querySelector('#manAddAge').value.trim();
		item.descrip = addForm.querySelector('#manAddDescrip').value.trim();
		item.sex = sex.options[sex.selectedIndex].value;
		item.id = id.options[id.selectedIndex].value;

		/*
		 *表单验证
		 */
		if(item.name=='' || item.age=='' || item.descrip=='') {
			let tips = React.findDOMNode(this.refs.tipsUnDone);
			tips.style.display = 'block';
			setTimeout(function(){
				tips.style.display = 'none';
			}, 1000);
			return;
		}
		//非负整数
	  let numReg = /^\d+$/;
		if(!numReg.test(item.age) || parseInt(item.age)>150) {
			let tips = React.findDOMNode(this.refs.tipsUnAge);
			tips.style.display = 'block';
			setTimeout(function(){
				tips.style.display = 'none';
			}, 1000);
			return;
		}
		
		this.props.addManItem(item);
		addForm.reset();
		
		//此处应在返回添加成功信息后确认
		let tips = React.findDOMNode(this.refs.tips);
		tips.style.display = 'block';
		setTimeout(function(){
	          tips.style.display = 'none';
		}, 1000);
	}

	render(){
		return (
			<div>
				<h4 style={{'text-align':'center'}}>人员新增</h4>
				<hr/>
				<form ref='addForm' className='addForm'>
					<div>
						<label for='manAddName' style={{'display':'inline-block'}}>姓名</label>
						<input type="text" ref='addName' id='manAddName' placeholder='Your Name'/>
					</div>
					<div>
						<label for='manAddAge' style={{'display':'inline-block'}}>年龄</label>
						<input type="text" ref='addAge' id='manAddAge' placeholder='Your Age(0-150)'/>
					</div>
					<div>
						<label for='manAddSex' style={{'display':'inline-block'}}>性别</label>
						<select ref='addSex' id="manAddSex">
							<option value="男">男</option>
							<option value="女">女</option>
						</select>
					</div>
					<div>
						<label for='manAddId' style={{'display':'inline-block'}}>身份</label>
						<select ref='addId' id="manAddId">
							<option value="主任">主任</option>
							<option value="老师">老师</option>
							<option value="学生">学生</option>
							<option value="实习">实习</option>
						</select>
					</div>
					<div className="manDescriDiv">
						<label for='manAddDescrip' className='manDescri' style={{'display':'inline-block'}}>个人信息</label>
						<textarea type="text" ref='AddDescrip' id='manAddDescrip'></textarea>
					</div>
					<p ref='tips' className='tips'>提交成功</p>
					<p ref='tipsUnDone' className='tips'>请录入完整的人员</p>
					<p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
					<div>
						<button onClick={this.handlerAddClick.bind(this)}> 提交</button>
					</div>
				</form>
			</div>
		)
	}
}