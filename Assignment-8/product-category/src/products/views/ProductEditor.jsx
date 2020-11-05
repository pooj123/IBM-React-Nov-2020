import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductEditor extends Component {
    state = {
        name: '',
        description: '',
        price: 0,
        category: '',
    };

    onCategoryChange = (evt) => {
      console.log(evt.target);
      this.setState({ category: evt.target.value});
    }

    onAddNewProductClick = () => {
        const { addNew } = this.props,
            { name, description, price, category } = this.state;
        addNew(name, description, price, category);
    };

    render() {
      let categoriesList = this.props.categories.map((category) => (<option key={category.id} value={category.name}>{category.name}</option>));
        return (
          <section className="edit">
            <div className="field">
              <label htmlFor="">Name :</label>
              <input
                type="text"
                onChange={evt => this.setState({ name: evt.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="">Description :</label>
              <input
                type="text"
                onChange={evt =>
                  this.setState({ description: evt.target.value })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="">Price :</label>
              <input
                type="number"
                onChange={evt =>
                  this.setState({ price: parseInt(evt.target.value) })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="">Category</label>
              <select name="categories" id="categories" onChange={this.onCategoryChange} >
                <option disabled selected="selected" hidden>Please select an option</option>
                {categoriesList}
              </select>
            </div>
            <div className="field">
              <input
                type="button"
                value="Add Product"
                onClick={this.onAddNewProductClick}
              />
            </div>
          </section>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}
export default connect(mapStateToProps,null)(ProductEditor);