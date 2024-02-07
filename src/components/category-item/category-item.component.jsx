import "./category-item.styles.scss";

const CategoryItem = ({ item }) => {
  const {imageUrl,title} = item;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Here</p>
      </div>
    </div>
  );
};

export default CategoryItem;
