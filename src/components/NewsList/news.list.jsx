import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsItem from "../NewsItem/news.item";
import styles from "./styles.module.scss";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
