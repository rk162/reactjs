import React from 'react';

class TypeList extends React.Component {

  render () {
    const {types, selectedType, selectType} = this.props;
    return  (
      <ul className="typeList">
      {types.map(type=>(
        <li className={`${selectedType.name === type.name? `${type.name} selected`:''}`} key={type.name} onClick={(e)=>{selectType(e, type)}}>{type.name}</li>
      ))}
      </ul>
    );
  }
}

export default TypeList;