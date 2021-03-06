import React from 'react';
import {Card,WhiteSpace,WingBlank} from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
@withRouter
class UserCard extends React.Component{
static propType={
    userList:PropTypes.array.isRequired
}
    handleClick(v){
        this.props.history.push(`/chat/${v._id}`)
    }
    render(){
        return(
            <div>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    {  
                        this.props.userList.map(v=>(
                            v.avatar?(
                                <div key={v._id}>
                                <Card onClick={()=>this.handleClick(v)}>
                                    <Card.Header
                                    title={v.user}
                                    thumb={require(`../img/${v.avatar}.png`)}
                                    extra={<span>{v.title}</span>}
                                    >
                                    </Card.Header>
                                    <Card.Body>
                                        {v.type==='boss'?(<div>公司:{v.company}</div>):null}
                                        {
                                            v.desc.split('\n').map(
                                                d=>(
                                                    <div key={d}>{d}</div>
                                                )
                                            )
                                        }
                                        {v.type==='boss'?(<div>薪资：{v.money}</div>):null}
                                    </Card.Body>
                                </Card>
                                </div>
                            ):null
                        ))
                    }
                </WingBlank>
            </div>
        )
    }
}
export default UserCard;