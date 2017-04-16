import React from 'react';
export default class ManDetail extends React.Component{
	handlerEdit(){
    let item = {};
    let editTabel = React.findDOMNode(this.refs.editTabel);
		let sex = editTabel.querySelector('#manEditSex');
		let id = editTabel.querySelector('#manEditId');
		
		item.name = editTabel.querySelector('#manEditName').value.trim();
		item.age = editTabel.querySelector('#manEditAge').value.trim();
		item.descrip = editTabel.querySelector('#manEditDescrip').value.trim();
		item.sex = sex.options[sex.selectedIndex].value;
		item.id = id.options[id.selectedIndex].value;
		item.key = this.props.manDetail.key;
		
		/*
		 *表单验证
		 */
		if(item.name=='' || item.age=='' || item.descrip=='') {
			let tips = React.findDOMNode(this.refs.DtipsUnDone);
			tips.style.display = 'block';
			setTimeout(function(){
				tips.style.display = 'none';
			}, 1000);
			return;
		}
		//非负整数
    let numReg = /^\d+$/;
		if(!numReg.test(item.age) || parseInt(item.age)>150) {
			let tips = React.findDOMNode(this.refs.DtipsUnAge);
			tips.style.display = 'block';
			setTimeout(function(){
				tips.style.display = 'none';
			}, 1000);
			return;
		}
		
		this.props.editDetail(item);
		
		//此处应在返回修改成功信息后确认
		let tips = React.findDOMNode(this.refs.Dtips);
		tips.style.display = 'block';
		setTimeout(function(){
      tips.style.display = 'none';
		}, 1000);
	}
	
	handlerClose(){
	  this.props.closeDetail();
	}
	
	componentDidUpdate(){
	  if(this.props.manDetail == null){

	  } else {
			let selSex = React.findDOMNode(this.refs.selSex);
			for(let i=0; i<selSex.options.length; i++){
				if(selSex.options[i].value == this.props.manDetail.info.sex){
				  selSex.options[i].selected = 'selected';
				  break;
				}
			}
			let selId = React.findDOMNode(this.refs.selId);
			for(let i=0; i<selId.options.length; i++) {
				if(selId.options[i].value == this.props.manDetail.info.id){
				  selId.options[i].selected = 'selected';
				  break;
				}
			}
		}
	}


	render(){
	  let manDetail = this.props.manDetail;  
	  if(!manDetail) return null;
	  return (
      <div className="overLay">
		    <h4 style={{'text-align':'center'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
				<hr/>
			  <table ref="editTabel">
				  <tbody>
				    <tr>
						  <th>姓名</th>
						  <td><input id='manEditName' type="text"  defaultValue={manDetail.info.name}></input></td>
						</tr>
				    <tr>
						  <th>年龄</th>
						  <td><input id='manEditAge' type="text"  defaultValue={manDetail.info.age}></input></td>
						</tr>
				    <tr>
						  <th>性别</th>
						  <td>
						    <select ref='selSex' id='manEditSex'>
							  <option value="男">男</option>
							  <option value="女">女</option>
							</select>
						  </td>
						</tr>
						<tr>
						  <th>身份</th>
		          <td>
						    <select ref="selId" id='manEditId'>
								  <option value="主任">主任</option>
								  <option value="老师">老师</option>
								  <option value="学生">学生</option>
								  <option value="实习">实习</option>
								</select>
						  </td>
						</tr>
					  <tr>
						  <th>个人描述</th>
						  <td><textarea id='manEditDescrip' type="text" defaultValue={manDetail.info.descrip}></textarea></td>
						</tr>
				  </tbody>
				</table>
				<p ref='Dtips' className='tips'>修改成功</p>
				<p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
				<p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
				<button onClick={this.handlerEdit.bind(this)}>完成</button>
				<button onClick={this.handlerClose.bind(this)}>关闭</button>
		  </div>
	  );
	}
}