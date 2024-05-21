import BannersListWithSkeleton from "@/widgets/news/ui/BannersList/bannersList";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.scss";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
