import { useTheme } from "../../context/ThemeContext";
import { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import Categories from "../Categories/categories";
import Search from "../Search/search";
import Slider from "../Slider/slider";
import styles from "./styles.module.scss";

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
