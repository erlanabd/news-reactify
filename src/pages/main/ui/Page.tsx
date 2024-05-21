import LatestNews from "./LatestNews/latestNews";
import NewsByfilters from "./NewsByFilters/newsByfilters";
import styles from "./styles.module.scss";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByfilters />
    </main>
  );
};

export default MainPage;
