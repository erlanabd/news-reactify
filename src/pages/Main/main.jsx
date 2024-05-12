import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getNews } from "../../api/apiNews";
import NewsBanner from "../../components/NewsBanner/news.banner";
import NewsList from "../../components/NewsList/news.list";

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
