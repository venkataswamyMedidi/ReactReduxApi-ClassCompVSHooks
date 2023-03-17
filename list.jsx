import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { fetch } from 'cross-fetch';
import { useSelector, useDispatch } from 'react-redux';

function addListItem(payload) {
  console.log('addListItem', payload);
  return { type: 'ADD_ITEM', payload };
}

const mapStateToProps = (state) => {
  return { addItem: state.addItem };
};

function mapDispatchToProps(dispatch) {
  return {
    addListItem: (item) => dispatch(addListItem(item)),
  };
}


class ConnectedList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch('https://www.mocky.io/v2/5d0c720e3500005a00b8980b')
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        this.props.addListItem(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <ListViewComponent
          delayUpdate={true}
          showHeader={true}
          headerTitle="EJ2 List"
          dataSource={this.props.addItem}
          cssClass="e-list-template"
          template={(data) => {
            return (
              <div className="e-list-wrapper e-list-multi-line ">
                <p className="e-list-content">{data.company}</p>
                <p className="e-list-content">Email: {data.email}</p>
                <p className="e-list-content">Phone: {data.phone}</p>
                <p className="e-list-content">Registered :{data.registered}</p>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
