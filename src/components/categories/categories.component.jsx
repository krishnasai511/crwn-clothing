import CategoryItem from "../category-item/category-item.component";
import './categories.styles.scss'

const Categories = ({categories}) => {

  return (
    <div className="categories-container">
      {categories.map((cat) => {
        return <CategoryItem key={cat.id} item={cat}/>;
      })}
    </div>
  );
};

export default Categories;
