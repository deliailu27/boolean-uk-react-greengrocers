const Filter = ({ filterByCategories, sortItems }) => {
  return (
    <div className="filterList">
      <select
        name="categories"
        id="categories"
        onChange={evt => filterByCategories(evt)}
      >
        <option value="vegetable,fruit">All</option>
        <option value="vegetable">Vegetables</option>
        <option value="fruit">Fruits</option>
      </select>
      <select name="filter" id="filter" onChange={evt => sortItems(evt)}>
        <option value="id">Sort items</option>
        <option value="price">Sort by price</option>
        <option value="name">Sort by name</option>
      </select>
    </div>
  )
}

export default Filter
