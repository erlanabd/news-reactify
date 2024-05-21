import { IFilters } from "@/shared/interfaces";
import styles from "./styles.module.scss";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useAppDispatch } from "@/app/appStore";
import Slider from "@/features/slider/ui/Slider/slider";
import Categories from "@/features/category/ui/Categories/categories";
import Search from "@/features/search/ui/Search/search";
import { setFilters } from "@/entities/news/model/newsSlice";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";

interface Props {
  filters: IFilters;
}
const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
