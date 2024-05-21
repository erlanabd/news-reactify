import { IFilters } from "@/shared/interfaces";
import styles from "./styles.module.scss";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useAppDispatch } from "@/app/appStore";
import Slider from "@/features/slider/ui/Slider/slider";
import Categories from "@/features/category/ui/Categories/categories";
import Search from "@/features/search/ui/Search/search";
import { setFilters } from "@/entities/news/model/newsSlice";
import { CategoriesType } from "@/entities/category";

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}
const NewsFilters = ({ filters, categories }: Props) => {
  const { isDark } = useTheme();

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
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
