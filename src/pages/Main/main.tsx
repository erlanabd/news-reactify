import styles from "./styles.module.scss";
import LatestNews from "../../components/LatestNews/latestNews";
import NewsByfilters from "../../components/NewsByFilters/newsByfilters";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByfilters />
    </main>
  );
};

export default Main;
