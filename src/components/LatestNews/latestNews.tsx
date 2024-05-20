import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import BannersList from "../BannersList/bannersList";
import styles from "./styles.module.scss";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
